package com.plc.lib.core.driver.plc.siemens;

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
import java.util.concurrent.ExecutionException;

public class SiemensS7P4X extends BaseDriver<PlcConnection> implements PLC {

    private static final Logger logger = LoggerFactory.getLogger(SiemensS7P4X.class);

    @Override
    public PLC connect(PlcModel plcModel) {
        try {
            String ip = plcModel.getAddr();
            Integer port = plcModel.getPort();
            String timeout = "5000";
            String controllerType = "";
            if (DriverEnum.S7_1200_TCP.equals(plcModel.getDeviceSeries())) {
                controllerType = "S7_1200";
            }
            String urlFormat = "{}://{}?remote-rack=0&remote-slot=3&controller-type={}";
            // String connectionString = "s7://10.10.1.33?remote-rack=0&remote-slot=3&controller-type=S7_400";
            String connectionString = StringUtils.format(urlFormat, "s7", ip, controllerType);
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

    /**
     * . %{Memory-Area}{start-address}:{Data-Type}[{array-size}]
     */
    @Override
    public void getResult(PlcModel plcModel, HashMap<String, HashMap<String, List<VarModel>>> regItemDataTypeVarListMap) {
        long startTime = System.currentTimeMillis();

        SiemensS7P4X s7Instance = (SiemensS7P4X) DeviceConnection.getConnection(plcModel.getDeviceId());
        if (s7Instance == null) {
            this.setConnected(false);
            return;
        }

        PlcConnection plcConnection = s7Instance.getDriver();
        if (!plcConnection.isConnected()) {
            this.setConnected(false);
            return;
        }

        // Check if this connection support reading of data.
        if (!plcConnection.getMetadata().isReadSupported()) {
            logger.error("This connection doesn't support reading.");
            return;
        }

        PlcReadRequest.Builder readrequest = plcConnection.readRequestBuilder();

        regItemDataTypeVarListMap.forEach((regItem, dataTypeVarListMap) -> { // 循环注册表
            dataTypeVarListMap.forEach((dataType, varList) -> { // 循环数据类型
                // 根据dataType判断数据类型

                for (int i = 0; i < varList.toArray().length; i++) {
                    VarModel var = varList.get(i);
                    String tag_address = var.getRegName();
                    String start_address = var.getItemName();
                    String data_type = getDataType(var);
                    // {memory-Area}{start-address}:{data-type}[{array-size}]:{name-value-tag-options}
                    String tagAddr = tag_address + start_address + ":" + data_type;
                    if(i == 0){
                        readrequest.addTagAddress("TAG01", "%" + tagAddr);
                    }
                    readrequest.addTagAddress(var.getTagId(), "%" + tagAddr);
                }

                PlcReadRequest rr = readrequest.build(); //(3.2)
                try {
                    PlcReadResponse response; //(04)
                    response = rr.execute().get(); //(05)

                    if (response.getResponseCode("TAG01") == PlcResponseCode.OK) { //(06)
                        for (int i = 0; i < varList.size(); i++) {
                            VarModel var = varList.get(i);
                            logger.info("VAL:" + var.getTagId() + " : " + response.getObject(var.getTagId()));
                            VarInfoMap.setVarValue(var.getTagId(), response.getObject(var.getTagId()));
                        }
                    } else {
                        logger.info("Problem reading...");
                    }

                }catch (Exception e) {
                    e.printStackTrace();
                }

            });
        });

    }

    @Override
    public void heartbeat(PlcModel plcModel) {

    }

    @Override
    public boolean write(VarModel varModel, Value value) {
        SiemensS7P4X s7Instance = (SiemensS7P4X) DeviceConnection.getConnection(varModel.getDeviceId());
        if (s7Instance == null) {
            return false;
        }
        PlcConnection plcConnection = s7Instance.getDriver();

        PlcWriteRequest.Builder builder = plcConnection.writeRequestBuilder();
        builder.addTagAddress("value-1", "%Q0.4:BOOL", true);
        builder.addTagAddress("value-2", "%Q0:BYTE", (byte) 0xFF);
        builder.addTagAddress("value-4", "%DB.DB1.4:INT[3]", 7, 23, 42);
        PlcWriteRequest writeRequest = builder.build();
        PlcWriteResponse response = null;
        try {
            response = writeRequest.execute().get();
            if (PlcResponseCode.OK == response.getResponseCode(varModel.getTagName())) {
                return true;
            }
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } catch (ExecutionException e) {
            throw new RuntimeException(e);
        }

        return false;
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
