package com.plc.service.impl;

import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.core.memory.DeviceVarsMap;
import com.plc.lib.core.memory.VarInfoMap;
import com.plc.lib.exception.ServiceException;
import com.plc.service.VarService;
import com.plc.model.PlcModel;
import com.plc.model.VarModel;
import com.plc.model.ioserver.input.Vars;
import com.plc.utils.FileUtils;
import com.plc.utils.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.UUID;

@Service
public class VarServiceImpl implements VarService {

    private static final Logger logger = LoggerFactory.getLogger(VarServiceImpl.class);

    @Override
    public boolean write(VarModel varModel) {
//        if()
        return false;
    }

    @Override
    public boolean add(VarModel varModel) {
        if(!DeviceInfoMap.isExist(varModel.getDeviceId())){
            String msg = "ERROR: 设备【" + varModel.getDeviceName() + "】不存在";
            logger.error(msg);
            throw new ServiceException(msg);
        }
        varModel.setTagId(UUID.randomUUID().toString());
        if(StringUtils.isNotNull(VarInfoMap.getByTagName(varModel.getTagName()))){
            String msg = "ERROR: 变量名称【" + varModel.getTagName() + "】存在";
            logger.error(msg);
            throw new ServiceException(msg);
        }

        VarInfoMap.put(varModel.getTagId(),varModel);
        DeviceVarsMap.refresh();
        backUpAndSave();
        return true;
    }

    @Override
    public boolean importVar(List<Vars> varsList) {
        String msg = "";
        for (Vars var : varsList){
            PlcModel plcModel = DeviceInfoMap.getByDeviceName(var.getDeviceName());
            if(StringUtils.isNull(plcModel)){
                continue;
            }

            if(StringUtils.isNotNull(VarInfoMap.getByTagName(var.getTagName()))){
                msg += var.getTagName() + ";";
                logger.error(msg);
                continue;
            }
            VarModel varModel = new VarModel(var);
            varModel.setDeviceId(plcModel.getDeviceId());

            VarInfoMap.put(varModel.getTagId(),varModel);
        }

        DeviceVarsMap.refresh();
        backUpAndSave();

        if(StringUtils.isNotEmpty(msg)){
            throw new ServiceException("添加失败的变量【" + msg + "】；原因：该变量已存在！");
        }
        return true;
    }


    @Override
    public boolean edit(VarModel varModel) {
        if(!VarInfoMap.isExist(varModel.getTagId())){
            String msg = "ERROR: 变量名称【" + varModel.getTagName() + "】不存在";
            logger.error(msg);
            throw new ServiceException(msg);
        }

        VarInfoMap.put(varModel.getTagId(),varModel);
        DeviceVarsMap.refresh();
        backUpAndSave();
        return true;
    }

    @Override
    public boolean remove(VarModel varModel) {
        if(!VarInfoMap.isExist(varModel.getTagId())){
            String msg = "ERROR: 变量名称【" + varModel.getTagName() + "】不存在";
            logger.error(msg);
            throw new ServiceException(msg);
        }

        VarInfoMap.remove(varModel.getTagId());
        DeviceVarsMap.refresh();
        backUpAndSave();
        return true;
    }

    @Override
    public LinkedHashSet<String> tagGroupList() {
        List<VarModel> varModelList = VarInfoMap.getList();
        LinkedHashSet<String> list = new LinkedHashSet<String>();
        varModelList.forEach((varModel)->{
            list.add(varModel.getTagGroup());
        });

        return list;
    }


    private void backUpAndSave(){
        try {
            FileUtils.backUpAndSave(VarModel.class, VarInfoMap.getList(),VarInfoMap.CSV_FILE_NAME);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
    
}
