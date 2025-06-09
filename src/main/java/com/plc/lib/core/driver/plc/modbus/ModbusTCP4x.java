package com.plc.lib.core.driver.plc.modbus;

import com.plc.lib.constants.PLCDataType;
import com.plc.lib.core.connection.DeviceConnection;
import com.plc.lib.core.driver.plc.BaseDriver;
import com.plc.lib.core.driver.plc.DriverEnum;
import com.plc.lib.core.driver.plc.PLC;
import com.plc.lib.core.memory.VarInfoMap;
import com.plc.model.PlcModel;
import com.plc.model.Value;
import com.plc.model.VarModel;
import com.plc.utils.StringUtils;
import org.apache.plc4x.java.api.PlcConnection;
import org.apache.plc4x.java.api.PlcDriverManager;
import org.apache.plc4x.java.api.messages.PlcReadRequest;
import org.apache.plc4x.java.api.messages.PlcReadResponse;
import org.apache.plc4x.java.api.messages.PlcWriteRequest;
import org.apache.plc4x.java.api.messages.PlcWriteResponse;
import org.apache.plc4x.java.api.types.PlcResponseCode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class ModbusTCP4x extends BaseDriver<PlcConnection> implements PLC {

    private static final Logger logger = LoggerFactory.getLogger(ModbusTCP4x.class);

    @Override
    public PLC connect(PlcModel plcModel) {
        try {
            // {memory-Area}{start-address}:{data-type}[{array-size}]:{name-value-tag-options}
            String ip = plcModel.getAddr();
            Integer port = plcModel.getPort();
            // 单元标识符：相当于设备的地址
            int unitIdentifier = plcModel.getUnitIdentifier();
            String timeout = "5000";
            String urlFormat = "{}:tcp://{}:{}?unit-identifier={}&request-timeout={}";
            String connectionString = "";
            if (DriverEnum.MODBUS_TCP.equals(plcModel.getDeviceSeries())) {
                connectionString = StringUtils.format(urlFormat, "modbus-tcp", ip, port, unitIdentifier, timeout);
            } else if (DriverEnum.MODBUS_RTU.equals(plcModel.getDeviceSeries())) {
                connectionString = StringUtils.format(urlFormat, "modbus-rtu", ip, port, unitIdentifier, timeout);
            } else if (DriverEnum.MODBUS_ASCII.equals(plcModel.getDeviceSeries())) {
                connectionString = StringUtils.format(urlFormat, "modbus-ascii", ip, port, unitIdentifier, timeout);
            }

            PlcConnection plcConnection = PlcDriverManager.getDefault().getConnectionManager().getConnection(connectionString);
            if (plcConnection.isConnected()) {
                this.setConnected(true);
                this.setDriver(plcConnection);
                return this;
            }

        } catch (Exception ex) {

        }
        return null;
    }

    @Override
    public void getResult(PlcModel plcModel, HashMap<String, HashMap<String, List<VarModel>>> regItemDataTypeVarListMap) {
        long startTime = System.currentTimeMillis();
        ModbusTCP4x modbusTCP4xInstance = (ModbusTCP4x) DeviceConnection.getConnection(plcModel.getDeviceId());
        if (modbusTCP4xInstance == null) {
            this.setConnected(false);
            return;
        }

        PlcConnection plcConnection = modbusTCP4xInstance.getDriver();
        if (!plcConnection.isConnected()) {
            this.setConnected(false);
            return;
        }

        // Check if this connection support reading of data.
        if (!plcConnection.getMetadata().isReadSupported()) {
            logger.error("This connection doesn't support reading.");
            return;
        }

        regItemDataTypeVarListMap.forEach((regItem, dataTypeVarListMap) -> { // 循环注册表
            dataTypeVarListMap.forEach((dataType, varList) -> { // 循环数据类型

                PlcReadRequest.Builder builder = plcConnection.readRequestBuilder();
                for (int i = 0; i < varList.toArray().length; i++) {
                    VarModel var = varList.get(i);

                    String tag_address = getTagAddress(var);
                    String start_address = var.getItemName();
                    String data_type = getDataType(var);
                    // {memory-Area}{start-address}:{data-type}[{array-size}]:{name-value-tag-options}
                    String tagAddr = tag_address + start_address + ":" + data_type;
                    builder.addTagAddress(var.getTagId(), tagAddr);
                }
                PlcReadRequest readRequest = builder.build();

                CompletableFuture<? extends PlcReadResponse> asyncResponse = readRequest.execute();
                asyncResponse.whenComplete((response, throwable) -> {
                    try {
                        for (String tagName : response.getTagNames()) {
                            if (response.getResponseCode(tagName) == PlcResponseCode.OK) {
                                int numValues = response.getNumberOfValues(tagName);
                                // If it's just one element, output just one single line.
                                if (numValues == 1) {
                                    VarInfoMap.setVarValue(tagName, response.getObject(tagName));
                                    // logger.info("Value[" + tagName + "]: " + response.getObject(tagName));
                                }
                                // If it's more than one element, output each in a single row.
                                else {
                                    // logger.info("Value[" + tagName + "]:");
                                    for (int i = 0; i < numValues; i++) {
                                        logger.info(" - " + response.getObject(tagName, i));
                                    }
                                }
                            }
                            // Something went wrong, to output an error message instead.
                            else {
                                logger.error("ModbusTCP4x-Error[" + tagName + "]: " + response.getResponseCode(tagName).name());
                            }
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                });

            });
        });

    }

    @Override
    public void heartbeat(PlcModel plcModel) {

    }

    @Override
    public boolean write(VarModel varModel, Value value) {
        ModbusTCP4x modbusTCP4xInstance = (ModbusTCP4x) DeviceConnection.getConnection(varModel.getDeviceId());
        if (modbusTCP4xInstance == null) {
            return false;
        }
        PlcConnection plcConnection = modbusTCP4xInstance.getDriver();
        PlcWriteRequest.Builder builder = plcConnection.writeRequestBuilder();

        String tag_address = getTagAddress(varModel);
        String start_address = varModel.getItemName();
        String data_type = getDataType(varModel);
        // {memory-Area}{start-address}:{data-type}[{array-size}]:{name-value-tag-options}
        String tagAddr = tag_address + start_address + ":" + data_type;
        builder.addTagAddress(varModel.getTagId(), tagAddr, value.getValue());

        PlcWriteRequest writeRequest = builder.build();
        PlcWriteResponse response = null;
        try {
            response = writeRequest.execute().get();
            if (PlcResponseCode.OK == response.getResponseCode(varModel.getTagId())) {
                return true;
            }
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } catch (ExecutionException e) {
            throw new RuntimeException(e);
        }
        return false;
    }

    private String getTagAddress(VarModel varModel) {
        String tag_address = "holding-register";
        switch (varModel.getRegName()) {
            case "0":
                tag_address = "coil";
                break;
            case "1":
                tag_address = "discrete-input";
                break;
            case "3":
                tag_address = "input-register";
                break;
            case "4":
                tag_address = "holding-register";
                break;
            case "6":
                tag_address = "extended-register";
                break;
        }
        tag_address += ":";
        return tag_address;
    }


    private String getDataType(VarModel var) {
        String data_type = "";
        switch (var.getItemDataType()) {
            case PLCDataType.BIT:
                data_type = "BOOL";
                break;
            case PLCDataType.BYTE:
                data_type = "BYTE";
                break;
            case PLCDataType.SHORT:
                data_type = "INT";
                break;
            case PLCDataType.USHORT:
                data_type = "UINT";
                break;
            case PLCDataType.LONG:
                data_type = "DINT";
                break;
            case PLCDataType.BCD:
                data_type = "WORD";
                break;
            case PLCDataType.LONGBCD:
                data_type = "DWORD";
                break;
            case PLCDataType.FLOAT:
                data_type = "REAL";
                break;
            case PLCDataType.STRING:
                data_type = "BYTE";
                break;
            case PLCDataType.DOUBLE:
                data_type = "LREAL";
                break;
            case PLCDataType.INT64:
                data_type = "LINT";
                break;
            default:

                break;
        }
        return data_type;
    }

}
