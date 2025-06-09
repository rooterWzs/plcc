package com.plc.api;

import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.core.collection.CollectionManager;
import com.plc.model.PlcModel;
import com.plc.model.Result;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/api/test"})
public class TestController {

    @GetMapping("killThread")
    public Result tagGroupList(String plcId){
        PlcModel plcModel = DeviceInfoMap.getByDeviceId(plcId);

        CollectionManager.removeTask(plcModel);

        return Result.success();
    }

}
