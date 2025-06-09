package com.plc.api;

import com.alibaba.excel.EasyExcel;
import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.service.PlcService;
import com.plc.model.PlcModel;
import com.plc.model.Result;
import com.plc.model.ioserver.input.Device;
import com.plc.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping({"/api/plc"})
public class PlcController {

    @Autowired
    private PlcService plcService;

    @GetMapping("/list")
    public Result list(@RequestBody(required = false) PlcModel plc){
        List<PlcModel> plcModelList = DeviceInfoMap.getList();
        if(plc != null && StringUtils.isNotEmpty(plc.getDeviceName())) {
            List<PlcModel> resultPlcModelList = new ArrayList<>();
            plcModelList.forEach(plcModel -> {
                if(plcModel.getDeviceName().equals(plc.getDeviceName())){
                    resultPlcModelList.add(plcModel);
                    return;
                }
            });
            return Result.success(resultPlcModelList);
        }else {
            return Result.success(plcModelList);
        }


    }

    @PostMapping("/add")
    public Result add(@RequestBody PlcModel plc){
        plcService.add(plc);
        return Result.success(plc);
    }


    @PostMapping("/edit")
    public Result edit(@RequestBody PlcModel plc){
        plcService.edit(plc);
        return Result.success(plc);
    }


    @PostMapping("/import")
    public Result importPlc(@RequestPart(value = "file") MultipartFile file){
        try {
            List<Device> plcList = EasyExcel.read(file.getInputStream())
                    .head(Device.class)
                    .charset(Charset.forName("GBK"))
                    .sheet()
                    .doReadSync();

            plcService.importPlc(plcList);

            return Result.success();
        } catch (IOException e) {
            return Result.error();
        }
    }


    @PostMapping("/remove")
    public Result remove(@RequestBody PlcModel plc){
        plcService.remove(plc);
        return Result.success(plc);
    }

}
