package com.plc.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.plc.model.Result;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@RequestMapping(value = {"/api/config"})
public class ConfigController {


    @RequestMapping(value = "/modelList", method = {RequestMethod.GET,RequestMethod.POST})
    public Result modelList(){
        Resource resource = new ClassPathResource("static");
        try {
            String path = resource.getFile().getPath();
            String fileName = path + "/PLCModel.json";
            File file = new File(fileName);
            String jsonString = new String(Files.readAllBytes(Paths.get(file.getPath())));
            ObjectMapper mapper = new ObjectMapper();
            return Result.success(mapper.readTree(jsonString));

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

//    @PostMapping("/registerList")
    @RequestMapping(value = "/registerList", method = {RequestMethod.GET,RequestMethod.POST})
    public Result registerList(){
        Resource resource = new ClassPathResource("static");
        try {
            String path = resource.getFile().getPath();
            String fileName = path + "/PLCRegisterType.json";
            File file = new File(fileName);
            String jsonString = new String(Files.readAllBytes(Paths.get(file.getPath())));
            ObjectMapper mapper = new ObjectMapper();
            return Result.success(mapper.readTree(jsonString));
            //return Result.success(mapper.readValue(jsonString, JSONObject.class));

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

//    @PostMapping("/tagDataTypeList")
    @RequestMapping(value = "/tagDataTypeList", method = {RequestMethod.GET,RequestMethod.POST})
    public Result itemDataTypeList(){
        Resource resource = new ClassPathResource("static");
        try {
            String path = resource.getFile().getPath();
            String fileName = path + "/TagDataType.json";
            File file = new File(fileName);
            String jsonString = new String(Files.readAllBytes(Paths.get(file.getPath())));
            ObjectMapper mapper = new ObjectMapper();
            return Result.success(mapper.readTree(jsonString));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

//    @PostMapping("/plcDataTypeMap")
    @RequestMapping(value = "/plcDataTypeMap", method = {RequestMethod.GET,RequestMethod.POST})
    public Result plcDataTypeList(){
        Resource resource = new ClassPathResource("static");
        try {
            String path = resource.getFile().getPath();
            String fileName = path + "/PLCDataType.json";
            File file = new File(fileName);
            String jsonString = new String(Files.readAllBytes(Paths.get(file.getPath())));
            ObjectMapper mapper = new ObjectMapper();
            return Result.success(mapper.readTree(jsonString));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
