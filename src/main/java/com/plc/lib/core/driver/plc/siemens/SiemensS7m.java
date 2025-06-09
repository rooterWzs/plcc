package com.plc.lib.core.driver.plc.siemens;

import HslCommunication.Core.Address.S7AddressData;
import HslCommunication.Core.Types.OperateResult;
import HslCommunication.Core.Types.OperateResultExOne;
import HslCommunication.Profinet.Siemens.SiemensPLCS;
import HslCommunication.Profinet.Siemens.SiemensS7Net;
import com.plc.lib.constants.PLCDataType;
import com.plc.lib.core.connection.DeviceConnection;
import com.plc.lib.core.driver.plc.BaseDriver;
import com.plc.lib.core.driver.plc.PLC;
import com.plc.lib.core.memory.VarInfoMap;
import com.plc.model.PlcModel;
import com.plc.model.Value;
import com.plc.model.VarModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.List;

public class SiemensS7m extends BaseDriver<SiemensS7Net> implements PLC {

    private static final Logger logger = LoggerFactory.getLogger(SiemensS7m.class);

    @Override
    public PLC connect(PlcModel plcModel) {
        SiemensS7Net plc = new SiemensS7Net(SiemensPLCS.S200, plcModel.getAddr());
        plc.SetPersistentConnection();
        OperateResult connection = plc.ConnectServer();
        if (connection.IsSuccess) {
            this.setConnected(true);
            this.setDriver(plc);
            return this;
        }
        return null;
    }

    @Override
    public void getResult(PlcModel plcModel, HashMap<String, HashMap<String, List<VarModel>>> regItemDataTypeVarListMap) {
        long startTime = System.currentTimeMillis();
        // 根据dataType判断数据类型
        SiemensS7m s7Instance = (SiemensS7m) DeviceConnection.getConnection(plcModel.getDeviceId());
        if (s7Instance == null) {
            this.setConnected(false);
            return;
        }
        SiemensS7Net plc = s7Instance.getDriver();

        regItemDataTypeVarListMap.forEach((regItem, dataTypeVarListMap) -> { // 循环注册表
            dataTypeVarListMap.forEach((dataType, varList) -> { // 循环数据类型

                S7AddressData[] S7AddressDataArray = new S7AddressData[varList.size()];

                for (int i = 0; i < varList.size(); i++) {
                    VarModel var = varList.get(i);

                    String address = var.getRegName() + var.getItemName();
                    int length = 1;
                    switch (var.getItemDataType()) {
                        case PLCDataType.BIT:
                            length = 1;
                            break;
                        case PLCDataType.BYTE:
                            length = 1;
                            break;
                        case PLCDataType.SHORT:
                            length = 2;
                            break;
                        case PLCDataType.USHORT:
                            length = 2;
                            break;
                        case PLCDataType.LONG:
                            length = 4;
                            break;
                        case PLCDataType.BCD:
                            length = 2;
                            break;
                        case PLCDataType.LONGBCD:
                            length = 4;
                            break;
                        case PLCDataType.FLOAT:
                            length = 4;
                            break;
                        case PLCDataType.STRING:
                            length = 1;
                            break;
                        case PLCDataType.DOUBLE:
                            length = 8;
                            break;
                        case PLCDataType.INT64:
                            length = 8;
                            break;
                        default:

                            break;
                    }

                    OperateResultExOne<S7AddressData> resultExOne = S7AddressData.ParseFrom(address, length);
                    if (resultExOne.IsSuccess) {
                        S7AddressDataArray[i] = resultExOne.Content;
                    }

                }

                OperateResultExOne<byte[]> ReadResult = plc.Read(S7AddressDataArray);

                for (int i = 0; i < varList.toArray().length; i++) {
                    VarModel var = varList.get(i);

                    Object value = null;

                    switch (var.getItemDataType()) {
                        case PLCDataType.BIT:
                            String numberStr = Double.toString(Double.parseDouble(var.getItemName()));
                            String decimalPart = numberStr.split("\\.")[1];
                            int val = plc.getByteTransform().TransUInt16(ReadResult.Content, i * 2);
                            String binary = String.format("%16s", Integer.toBinaryString(val)).replace(' ', '0');
                            int bitVal = Integer.valueOf(String.valueOf(binary.charAt(15 - Integer.parseInt(decimalPart))));
                            VarInfoMap.setVarValue(var.getTagId(), bitVal > 0);

                            break;
                        case PLCDataType.BYTE:
                            value = plc.getByteTransform().TransByte(ReadResult.Content, i * 1);
                            VarInfoMap.setVarValue(var.getTagId(), value);
                            break;
                        case PLCDataType.SHORT:
                            value = plc.getByteTransform().TransInt16(ReadResult.Content, i * 2);
                            VarInfoMap.setVarValue(var.getTagId(), value);
                            break;
                        case PLCDataType.USHORT:
                            value = plc.getByteTransform().TransUInt16(ReadResult.Content, i * 2);
                            VarInfoMap.setVarValue(var.getTagId(), value);
                            break;
                        case PLCDataType.LONG:
                            value = plc.getByteTransform().TransInt32(ReadResult.Content, i * 4);
                            VarInfoMap.setVarValue(var.getTagId(), value);
                            break;
                        case PLCDataType.BCD:
                            value = plc.getByteTransform().TransUInt16(ReadResult.Content, i * 2);
                            VarInfoMap.setVarValue(var.getTagId(), value);
                            break;
                        case PLCDataType.LONGBCD:
                            value = plc.getByteTransform().TransUInt32(ReadResult.Content, i * 4);
                            VarInfoMap.setVarValue(var.getTagId(), value);
                            break;
                        case PLCDataType.FLOAT:
                            OperateResultExOne<Float> floatVal = plc.ReadFloat(var.getRegName() + var.getItemName());
                            VarInfoMap.setVarValue(var.getTagId(), floatVal.Content);
                            break;
                        case PLCDataType.STRING:
                            OperateResultExOne<String> strVal = plc.ReadString(var.getRegName() + var.getItemName(), (short) 256, Charset.forName("utf8"));
                            VarInfoMap.setVarValue(var.getTagId(), strVal.Content);
                            break;
                        case PLCDataType.DOUBLE:
                            OperateResultExOne<Double> doubleVal = plc.ReadDouble(var.getRegName() + var.getItemName());
                            VarInfoMap.setVarValue(var.getTagId(), doubleVal.Content);
                            break;
                        case PLCDataType.INT64:
                            OperateResultExOne<Long> longVal = plc.ReadInt64(var.getRegName() + var.getItemName());
                            VarInfoMap.setVarValue(var.getTagId(), longVal.Content);
                            break;
                        default:

                            break;
                    }
                }

            });
        });
        long endTime = System.currentTimeMillis();
        long duration = endTime - startTime; // 以毫秒为单位
        System.out.println(plcModel.getAddr() + "运行时长（毫秒）: " + duration + " ms");
    }

    @Override
    public void heartbeat(PlcModel plcModel) {

    }

    @Override
    public boolean write(VarModel varModel, Value value) {
        SiemensS7m s7Instance = (SiemensS7m) DeviceConnection.getConnection(varModel.getDeviceId());
        if (s7Instance == null) {
            return false;
        }
        SiemensS7Net siemensS7Net = s7Instance.getDriver();




        return false;
    }

}
