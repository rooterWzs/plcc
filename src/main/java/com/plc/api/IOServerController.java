package com.plc.api;

import com.plc.model.Value;
import com.plc.model.ioserver.output.IOServerResModel;
import com.plc.model.PlcModel;
import com.plc.model.Result;
import com.plc.model.VarModel;
import com.plc.service.IOServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/api/IOServer"})
public class IOServerController {

    @Autowired
    private IOServerService ioServerService;


    @PostMapping("/getDevices")
    public Result getAllDevice(){
        List<PlcModel> list = ioServerService.getAllPlc();
        return Result.success(list);
    }

    @PostMapping("/getSysVars")
    public Result getSysVars(){
        List<VarModel> list = ioServerService.getSysVars();
        return Result.success(list);
    }


    @PostMapping("/getAllVars")
    public Result getAllVars(){
        List<IOServerResModel> list = ioServerService.getAllVars();
        return Result.success(list);
    }


    @PostMapping("/write/{tagId}")
    public Result write(@PathVariable(value="tagId") String tagId, @RequestBody Value value){
        boolean res = ioServerService.write(tagId, value);
        String msg = "下发失败";
        if(res) msg = "下发成功";
        return Result.success(msg,res);
    }


}
