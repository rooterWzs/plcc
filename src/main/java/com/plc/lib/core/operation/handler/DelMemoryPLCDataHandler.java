package com.plc.lib.core.operation.handler;

import com.plc.lib.core.collection.CollectionManager;
import com.plc.lib.core.connection.DeviceConnection;
import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.core.memory.DeviceVarsMap;
import com.plc.lib.core.memory.VarInfoMap;
import com.plc.lib.core.operation.Operator;
import com.plc.model.PlcModel;


public class DelMemoryPLCDataHandler implements OperationHandler {
    @Override
    public boolean handle(Operator operator) {
        System.out.println("DelMemoryPLCDataHandler: 删除PLC数据内存-》删除关联的变量");
        if(!DeviceInfoMap.isExist(operator.getPlcId())) return false;

        DeviceConnection.removeConnection(operator.getPlcId());

        DeviceInfoMap.remove(operator.getPlcId());

        VarInfoMap.removeByPlc(operator.getPlcId());
        DeviceVarsMap.refresh();
        UpdateMemoryPLCDataHandler.backUpAndSave();
        return true; // 事件已处理，链条终止
    }
}
