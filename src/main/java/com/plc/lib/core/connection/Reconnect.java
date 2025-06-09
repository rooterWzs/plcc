package com.plc.lib.core.connection;

import com.alibaba.fastjson2.JSON;
import com.plc.lib.core.operation.Operator;
import com.plc.lib.core.operation.OperatorEnum;
import com.plc.lib.core.operation.OperatorManager;
import com.plc.model.PlcModel;

import java.util.Iterator;
import java.util.Map;

public class Reconnect implements Runnable{

    @Override
    public void run() {
        OperatorManager operatorManager = new OperatorManager();
        while(true){
            if(!DeviceConnection.CONNECTION_FAILED_MAP.isEmpty()){
                Iterator<Map.Entry<String, PlcModel>> devices = DeviceConnection.CONNECTION_FAILED_MAP.entrySet().iterator();
                while (devices.hasNext()) {
                    Map.Entry<String, PlcModel> entry = devices.next();
                    PlcModel plcModel = entry.getValue();

                    System.err.println("[重新连接]RECONNECT____CONNECTION_FAILED_MAP:" + JSON.toJSON(plcModel));

                    Operator init = new Operator(OperatorEnum.INIT, plcModel.getDeviceId());
                    operatorManager.triggerOperation(init);
                }
            }

            try {
                Thread.sleep(30 * 1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }

    }
}
