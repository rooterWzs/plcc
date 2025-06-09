package com.plc.api;

import com.alibaba.excel.EasyExcel;
import com.plc.lib.core.memory.VarInfoMap;
import com.plc.service.VarService;
import com.plc.model.Result;
import com.plc.model.VarModel;
import com.plc.model.ioserver.input.Vars;
import com.plc.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping({"/api/var"})
public class VarController {

    @Autowired
    private VarService varService;

    @PostMapping("list/{page}/{size}")
    public Result list(@RequestBody VarModel varModel, @PathVariable int page, @PathVariable int size){
        if (StringUtils.isNull(page)) page = 1;
        if (StringUtils.isNull(size)) size = 10;

        HashMap<String,Object> map = new HashMap<>();
        List<VarModel> varModelList = VarInfoMap.getListByCondition(varModel);
        int endIndex = page * size;
        if(endIndex > varModelList.size()){
            endIndex = varModelList.size();
        }
        List<VarModel> list = varModelList.subList((page-1) * size, endIndex);
        map.put("list",list);
        map.put("total",VarInfoMap.getList().size());
        return Result.success(map);
    }

    @PostMapping("/{tagName}")
    public Result getVarByName(@PathVariable String tagName){
        return Result.success(VarInfoMap.getByTagName(tagName));
    }

    @GetMapping("tagGroupList")
    public Result tagGroupList(){
        return Result.success(varService.tagGroupList());
    }


    @PostMapping("/add")
    public Result add(@RequestBody VarModel varModel){
        varService.add(varModel);
        return Result.success(varModel);
    }


    @PostMapping("/edit")
    public Result edit(@RequestBody VarModel varModel){
        varService.edit(varModel);
        return Result.success(varModel);
    }

    @PostMapping("/write")
    public Result write(@RequestBody VarModel varModel){
        boolean result = varService.write(varModel);
        HashMap<String,Object> map = new HashMap<>();
        map.put("result",result);
        return Result.success(map);
    }

    @PostMapping("/import")
    public Result importVar(@RequestPart(value = "file") MultipartFile file){
        try {
            List<Vars> varsList = EasyExcel.read(file.getInputStream())
                    .head(Vars.class)
                    .charset(Charset.forName("GBK"))
                    .sheet()
                    .doReadSync();

            varService.importVar(varsList);

            return Result.success(varsList);
        } catch (IOException e) {
            return Result.error();
        }
    }

    @PostMapping("/remove")
    public Result remove(@RequestBody VarModel varModel){
        varService.remove(varModel);
        return Result.success(varModel);
    }

    @PostMapping("/batchRemove")
    public Result batchRemove(@RequestBody List<String> tagIdList){
        if(tagIdList.size() <= 0) return Result.error("请选择要删除的变量");
        tagIdList.forEach((tagId) -> {
            VarModel varModel = VarInfoMap.getByTagId(tagId);
            if(StringUtils.isNotNull(varModel)){
                varService.remove(varModel);
            }
        });
        return Result.success("删除成功");
    }


}
