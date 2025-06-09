package com.plc.lib.core.operation.handler;

import com.alibaba.fastjson2.JSON;
import com.plc.lib.core.collection.CollectTask;
import com.plc.lib.core.collection.CollectionManager;
import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.core.operation.Operator;
import com.plc.model.PlcModel;

public class AddListeningThreadHandler implements OperationHandler {
    @Override
    public boolean handle(Operator operator) {
        String plcId = operator.getPlcId();
        PlcModel plcModel = DeviceInfoMap.getByDeviceId(plcId);

        System.err.println("AddListeningThreadHandler: CollectionManager.addTask(plcModel, new CollectTask(plcId)):"
                + JSON.toJSONString(plcModel)
        );

        CollectionManager.addTask(plcModel, new CollectTask(plcId));

        return true; // 事件已处理，链条终止
    }

}
