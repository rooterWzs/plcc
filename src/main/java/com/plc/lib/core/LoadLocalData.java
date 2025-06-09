package com.plc.lib.core;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.read.listener.PageReadListener;
import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.core.memory.VarInfoMap;
import com.plc.model.PlcModel;
import com.plc.model.VarModel;
import com.plc.utils.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;


/**
 * @Author Zhishuang.Wang
 * @Date 2023/11/2 17:42
 * @Email 1406110602@qq.com
 */
public class LoadLocalData {

    private static final Logger logger = LoggerFactory.getLogger(LoadLocalData.class);

    public void loadDevice(){
        String fileName = FileUtils.fileNameWithPath(DeviceInfoMap.CSV_FILE_NAME);
        System.out.println("LoadLocalData.loadDevice():" + fileName);
        File file = new File(fileName);
        if(!file.exists()) {
            return;
        }
        logger.info("正在加载设备.....");
        EasyExcel.read(fileName, PlcModel.class, new PageReadListener<PlcModel>(dataList -> {
            for (PlcModel device : dataList) {
                if(DeviceInfoMap.isExist(device.getDeviceId())){
                    logger.error("ERROR: 设备名称【" + device.getDeviceName() + "】重复,请重新填写");
                    continue;
                }
                DeviceInfoMap.put(device.getDeviceId(), device);
            }
        })).sheet().doRead();
    }


    public void loadVars(){
        String fileName = FileUtils.fileNameWithPath(VarInfoMap.CSV_FILE_NAME);
        File file = new File(fileName);
        if(!file.exists()) {
            return;
        }
        logger.info("正在加载设备变量.....");
        EasyExcel.read(fileName, VarModel.class, new PageReadListener<VarModel>(dataList -> {
            for (VarModel var : dataList) {
                if(VarInfoMap.isExist(var.getTagId())){
                    logger.error("ERROR: 变量名称【" + var.getTagName() + "】重复发");
                    continue;
                }
                VarInfoMap.put(var.getTagId(), var);
            }
        })).sheet().doRead();
    }

}
