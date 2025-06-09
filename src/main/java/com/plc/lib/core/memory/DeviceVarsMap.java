package com.plc.lib.core.memory;

import com.plc.model.VarModel;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @Author Zhishuang.Wang
 * @Date 2023/11/3 13:20
 * @Email 1406110602@qq.com
 */
public class DeviceVarsMap {

    private static Map<String, List<VarModel>> DEVICE_LIST_VAR_MAP = new ConcurrentHashMap<>();

    // private static HashMap<String, List<VarModel>> DEVICE_LIST_VAR_MAP = new HashMap<>();
    // <PLC id, 寄存器名 , 采集类型, list<var>>
    public static Map<String,HashMap<String,HashMap<String,List<VarModel>>>> DEVID_REG_LISTVAR_MAP = new ConcurrentHashMap<>();


    public static List<VarModel> getByDeviceId(String deviceId){
        return DEVICE_LIST_VAR_MAP.get(deviceId);
    }

    public static Map<String, List<VarModel>> getAll(){
        return DEVICE_LIST_VAR_MAP;
    }

    public static List<VarModel> getListByDeviceId(String deviceId){
        return DEVICE_LIST_VAR_MAP.get(deviceId);
    }

    public synchronized static void put(String deviceId, List<VarModel> varModelList){
        if(!isExist(deviceId)){
            return;
        }
        DEVICE_LIST_VAR_MAP.put(deviceId,varModelList);
    }

    public static boolean isExist(String deviceId){
        return DEVICE_LIST_VAR_MAP.containsKey(deviceId);
    }

    public static void refresh(){
        List<VarModel> varModelList = VarInfoMap.getList();
        DEVID_REG_LISTVAR_MAP = new HashMap<>();
        DEVICE_LIST_VAR_MAP = new HashMap<>();
        varModelList.forEach( (varModel)->{
            if(!DEVICE_LIST_VAR_MAP.containsKey(varModel.getDeviceId())){
                List<VarModel> list = new ArrayList<>();
                DEVICE_LIST_VAR_MAP.put(varModel.getDeviceId(),list);
            }
            DEVICE_LIST_VAR_MAP.get(varModel.getDeviceId()).add(varModel);

            // 添加 deviceId
            if(!DEVID_REG_LISTVAR_MAP.containsKey(varModel.getDeviceId())){
                HashMap<String,HashMap<String,List<VarModel>>> map = new HashMap<>();
                DEVID_REG_LISTVAR_MAP.put(varModel.getDeviceId(),map);
            }
            // 添加 regName
            if(!DEVID_REG_LISTVAR_MAP.get(varModel.getDeviceId()).containsKey(varModel.getRegName())){
                HashMap<String,List<VarModel>> map = new HashMap<>();
                DEVID_REG_LISTVAR_MAP.get(varModel.getDeviceId()).put(varModel.getRegName(),map);
            }

            // 添加 tagDataType
            if(!DEVID_REG_LISTVAR_MAP.get(varModel.getDeviceId()).get(varModel.getRegName()).containsKey(varModel.getItemDataType())){
                List<VarModel> list = new ArrayList<>();
                DEVID_REG_LISTVAR_MAP.get(varModel.getDeviceId()).get(varModel.getRegName()).put(varModel.getItemDataType(),list);
            }
            DEVID_REG_LISTVAR_MAP.get(varModel.getDeviceId()).get(varModel.getRegName()).get(varModel.getItemDataType()).add(varModel);
        });

        DEVICE_LIST_VAR_MAP.forEach((key,value) -> {
            int num = value.size() > 0 ? value.size() : 0;
            if(DeviceInfoMap.isExist(key)){
                DeviceInfoMap.getByDeviceId(key).setVarNumber(num);
            }
        });

        DEVID_REG_LISTVAR_MAP.forEach((deviceId, regVarListMap) -> {
            regVarListMap.forEach((regName, varDataTypeMap) -> {
                varDataTypeMap.forEach((String dataType, List<VarModel> varModelList1) -> {
                    // DEVID_REG_LISTVAR_MAP.get(deviceId).get(regName).get(dataType).stream().sorted(Comparator.comparing(VarModel::getItemName)).collect(Collectors.toList());

                    varModelList1.sort(Comparator.comparing(VarModel::getItemName));
                    DEVID_REG_LISTVAR_MAP.get(deviceId).get(regName).put(dataType, varModelList1);
                });
                // DEVID_REG_LISTVAR_MAP HashMap<String,HashMap<String,List<VarModel>>> 排序，按照 ItemName 从小到大排序

            });
        });

    }

}
