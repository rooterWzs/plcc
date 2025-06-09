package com.plc.lib.core.connection;

import com.plc.lib.core.collection.CollectionManager;
import com.plc.lib.core.driver.plc.PLC;
import com.plc.model.PlcModel;

import java.util.Date;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @Author Zhishuang.Wang
 * @Date 2023/11/2 17:20
 * @Email 1406110602@qq.com
 */
public class DeviceConnection{

    public static final ConcurrentHashMap<String, PLC> CONNECTION_MAP = new ConcurrentHashMap<>();

    // 失败的设备
    public static final ConcurrentHashMap<String, PlcModel> CONNECTION_FAILED_MAP = new ConcurrentHashMap<>();

    
    public static PLC getConnection(String deviceID){
        if(CONNECTION_MAP.containsKey(deviceID)){
            return CONNECTION_MAP.get(deviceID);
        }
        return null;
    }

    public static boolean isActive(String deviceId){
        if(CONNECTION_MAP.containsKey(deviceId)) return true;
        else if (CONNECTION_FAILED_MAP.containsKey(deviceId)) return false;
        else return false;
    }
    

    public static void Connect(PlcModel plcModel, PLC PLCInstance){
        if(DeviceConnection.CONNECTION_FAILED_MAP.containsKey(plcModel.getDeviceId())){
            DeviceConnection.CONNECTION_FAILED_MAP.remove(plcModel.getDeviceId());
        }

        DeviceConnection.CONNECTION_MAP.put(plcModel.getDeviceId(),PLCInstance);

        plcModel.setActive(true);
        plcModel.setUpdateTime(new Date());
    }


    public static void ReConnect(PlcModel plcModel){
        if(DeviceConnection.CONNECTION_MAP.containsKey(plcModel.getDeviceId())){
            DeviceConnection.CONNECTION_MAP.remove(plcModel.getDeviceId());
        }
        if(plcModel.isActive()){
            plcModel.setUpdateTime(new Date());
        }
        plcModel.setActive(false);
        DeviceConnection.CONNECTION_FAILED_MAP.put(plcModel.getDeviceId(),plcModel);
    }
    
    
    public static void removeConnection(String deviceId){
        CollectionManager.removeTask(deviceId);

        if(DeviceConnection.CONNECTION_MAP.containsKey(deviceId)){
            DeviceConnection.CONNECTION_MAP.remove(deviceId);
        }
        
        if(DeviceConnection.CONNECTION_FAILED_MAP.containsKey(deviceId)){
            DeviceConnection.CONNECTION_FAILED_MAP.remove(deviceId);
        }
    }

}
