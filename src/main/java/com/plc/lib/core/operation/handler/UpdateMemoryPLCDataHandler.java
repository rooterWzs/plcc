package com.plc.lib.core.operation.handler;

import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.core.memory.DeviceVarsMap;
import com.plc.lib.core.operation.Operator;
import com.plc.model.PlcModel;
import com.plc.utils.FileUtils;

import java.io.IOException;


public class UpdateMemoryPLCDataHandler implements OperationHandler {

    @Override
    public boolean handle(Operator operator) {
        System.out.println("UpMemoryPLCDataHandler: 更新数据内存——》更新文件内存");
        if(operator.getPlcModel() == null) return false;

        PlcModel plc = operator.getPlcModel();
        DeviceInfoMap.put(plc.getDeviceId(), plc);
        DeviceVarsMap.refresh();
        backUpAndSave();

        return true; // 事件已处理，链条终止
    }

    public static void backUpAndSave(){
        // 同步到文件缓存
        try {
            FileUtils.backUpAndSave(PlcModel.class,DeviceInfoMap.getList(),DeviceInfoMap.CSV_FILE_NAME);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
