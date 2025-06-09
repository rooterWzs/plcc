package com.plc.lib.core.memory;

import com.plc.model.PlcModel;
import com.plc.lib.exception.ServiceException;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

/**
 * @Author Zhishuang.Wang
 * @Date 2023/11/2 17:22
 * @Email 1406110602@qq.com
 */
public class DeviceInfoMap {

    public final static String CSV_FILE_NAME = "PLC";

    /**
     * <deviceName.Device>
     */
    private static Map<String, PlcModel> DEVICE_MAP = new ConcurrentHashMap<>();

    public static PlcModel getByDeviceId(String deviceId){
        return DEVICE_MAP.get(deviceId);
    }

    public static PlcModel getByDeviceName(String deviceName){
        List<PlcModel> plcModels = getList();
        PlcModel plcModel = null;
        for (PlcModel plc : plcModels){
            if(plc.getDeviceName().equals(deviceName)) {
                plcModel = plc;
                break;
            }
        }
        return plcModel;
    }

    public static Map<String, PlcModel> getAll(){
        return DEVICE_MAP;
    }

    public static List<PlcModel> getList(){
        return DeviceInfoMap.getAll().values().stream().collect(Collectors.toList());
    }

    public synchronized static void put(String deviceId, PlcModel device){
        DEVICE_MAP.put(deviceId,device);
    }

    public synchronized static void remove(String deviceId){
        if(!isExist(deviceId)){
            throw new ServiceException("设备名称【" + deviceId + "】不存在.");
        }
        DEVICE_MAP.remove(deviceId);
    }

    public static boolean isExist(String deviceId){
        return DEVICE_MAP.containsKey(deviceId);
    }

}
