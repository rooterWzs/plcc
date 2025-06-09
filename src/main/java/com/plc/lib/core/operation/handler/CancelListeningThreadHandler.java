package com.plc.lib.core.operation.handler;

import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.core.collection.CollectionManager;
import com.plc.lib.core.operation.Operator;
import com.plc.model.PlcModel;


public class CancelListeningThreadHandler implements OperationHandler {
    @Override
    public boolean handle(Operator operator) {
        System.out.println("CancelListeningThreadHandler: 取消监听线程");

        PlcModel plcModel = DeviceInfoMap.getByDeviceId(operator.getPlcId());
        CollectionManager.removeTask(plcModel);
        return true; // 默认处理
    }
}
