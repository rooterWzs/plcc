package com.plc.api;

import com.plc.lib.core.memory.DeviceVarsMap;
import com.plc.model.Result;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping(value = {"/api/"})
public class ApiController {

    @PostMapping("login")
    public Result login(){
        HashMap<String,Object> map = new HashMap<>();
        map.put("token", "@word(50, 100)");
        map.put("refresh_token", "@word(50, 100)");
        return Result.success("登录成功",map);
    }

    @GetMapping("userinfo")
    public Result userinfo(){
        HashMap<String,Object> map = new HashMap<>();
        map.put("id", 1);
        map.put("name", "zhangsan");
        map.put("role|1", new String[]{"admin","visitor"});
        map.put("avatar", "@image('48x48', '#fb0a2a')");
        return Result.success("获取用户信息成功", map);
    }

    @GetMapping("info")
    public Result info(){
        return Result.success("获取用户信息成功", DeviceVarsMap.DEVID_REG_LISTVAR_MAP);
    }

}
