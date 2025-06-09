package com.plc.api;

import com.plc.lib.core.memory.DeviceVarsMap;
import com.plc.model.Result;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = {"/api/memory"})
public class MemoryController {

    @GetMapping(value = {"/devIdRegListVar"})
    public Result devIdRegListVar() {
        return Result.success(DeviceVarsMap.DEVID_REG_LISTVAR_MAP);
    }

}
