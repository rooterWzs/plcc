package com.plc.lib.core.driver.plc.omron;

import HslCommunication.Core.Types.OperateResult;
import HslCommunication.Core.Types.OperateResultExOne;
import HslCommunication.Profinet.Omron.OmronFinsNet;
import com.plc.lib.core.connection.DeviceConnection;
import com.plc.lib.constants.PLCDataType;
import com.plc.lib.core.memory.VarInfoMap;
import com.plc.lib.core.driver.plc.BaseDriver;
import com.plc.lib.core.driver.plc.PLC;
import com.plc.model.PlcModel;
import com.plc.model.Value;
import com.plc.model.VarModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Omron extends BaseDriver<OmronFinsNet> implements PLC {

    private static final Logger logger = LoggerFactory.getLogger(Omron.class);

    @Override
    public PLC connect(PlcModel plcModel) {
        OmronFinsNet plc = new OmronFinsNet(plcModel.getAddr(),plcModel.getPort());
        plc.SetPersistentConnection();
        OperateResult connection = plc.ConnectServer();
        if(connection.IsSuccess) {
            this.setConnected(true);
            this.setDriver(plc);
            return this;
        }
        return null;
    }

    @Override
    public void getResult(PlcModel plcModel, HashMap<String,HashMap<String, List<VarModel>>> regItemDataTypeVarListMap) {
        long startTime = System.currentTimeMillis();
        // 根据dataType判断数据类型
        Omron omronInstance = (Omron) DeviceConnection.getConnection(plcModel.getDeviceId());
        if(omronInstance == null){
            this.setConnected(false);
            return;
        }
        OmronFinsNet plc = omronInstance.getDriver();

        regItemDataTypeVarListMap.forEach((regItem,dataTypeVarListMap) -> { // 循环注册表
            dataTypeVarListMap.forEach((dataType,varList) -> { // 循环数据类型

                List<String> addressList = new ArrayList();
                varList.forEach(var -> { // 循环变量
                    addressList.add(var.getRegName() + var.getItemName());
                });
                String[] addressArray = addressList.toArray(new String[addressList.size()]);
                OperateResultExOne<byte[]> ReadResult = plc.Read(addressArray);

                for (int i = 0; i < varList.toArray().length; i++) {
                    VarModel var = varList.get(i);
                    addressList.add(var.getRegName() + var.getItemName());

                    Object value = null;

                    switch (var.getItemDataType()){
                        case PLCDataType.BIT:
                            String numberStr = Double.toString(Double.parseDouble(var.getItemName()));
                            String decimalPart = numberStr.split("\\.")[1];
                            int val = plc.getByteTransform().TransUInt16(ReadResult.Content, i * 2);
                            String binary = String.format("%16s", Integer.toBinaryString(val)).replace(' ', '0');
                            int bitVal = Integer.valueOf(String.valueOf(binary.charAt(15 - Integer.parseInt(decimalPart))));
                            VarInfoMap.setVarValue(var.getTagId(),bitVal > 0);

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
        OmronFinsNet plc = (OmronFinsNet) DeviceConnection.getConnection(plcModel.getDeviceId());
        OperateResultExOne<Boolean> result = plc.ReadBool("DM100.0");
        if(!result.IsSuccess){

        }
    }

    @Override
    public boolean write(VarModel varModel, Value value) {
        Omron omronInstance = (Omron) DeviceConnection.getConnection(varModel.getDeviceId());
        if(omronInstance == null){
            return false;
        }
        OmronFinsNet plc = omronInstance.getDriver();
        String address = varModel.getRegName() + varModel.getItemName();

        OperateResult operateResult = null;
        switch (varModel.getItemDataType()){
            case PLCDataType.BIT:
                operateResult = plc.Write(address, Boolean.valueOf((String) value.getValue()));
                break;
            case PLCDataType.BYTE:
                operateResult = plc.Write(address, Byte.valueOf((String) value.getValue()));
                break;
            case PLCDataType.SHORT:
                operateResult = plc.Write(address, Integer.valueOf((String) value.getValue()));
                break;
            case PLCDataType.USHORT:
                operateResult = plc.Write(address, Integer.valueOf((String) value.getValue()));
                break;
            case PLCDataType.BCD:
                operateResult = plc.Write(address, Integer.valueOf((String) value.getValue()));
                break;
            case PLCDataType.LONG:
                operateResult = plc.Write(address, Integer.valueOf((String) value.getValue()));
                break;
            case PLCDataType.LONGBCD:
                operateResult = plc.Write(address, Integer.valueOf((String) value.getValue()));
                break;
            case PLCDataType.FLOAT:
                operateResult = plc.Write(address, Float.valueOf((String) value.getValue()));
                break;
            case PLCDataType.STRING:
                operateResult = plc.Write(address, (String) value.getValue());
                break;
            case PLCDataType.DOUBLE:
                operateResult = plc.Write(address, Double.valueOf((String) value.getValue()));
                break;
            case PLCDataType.INT64:
                operateResult = plc.Write(address, Long.valueOf((String) value.getValue()));
                break;
        }
        if(operateResult != null && operateResult.IsSuccess) return true;
        else return false;
    }


}
