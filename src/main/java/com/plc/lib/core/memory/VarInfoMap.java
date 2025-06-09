package com.plc.lib.core.memory;

import com.plc.model.VarModel;
import com.plc.utils.StringUtils;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @Author Zhishuang.Wang
 * @Date 2023/11/2 17:22
 * @Email 1406110602@qq.com
 */
public class VarInfoMap {

    public final static String CSV_FILE_NAME = "VAR";

    /**
     * <deviceName.Device>
     *     // 存放 tag 的值，
     *     // <tagId,value>
     */
    private static HashMap<String, VarModel> VAR_INFO_MAP = new HashMap<>();

    public static VarModel getByTagId(String tagId){
        return VAR_INFO_MAP.get(tagId);
    }

    public static VarModel getByTagName(String tagName){
        List<VarModel> varModels = getList();
        VarModel varModel = null;
        for (VarModel var : varModels){
            if(var.getTagName().equals(tagName)) {
                varModel = var;
                break;
            }
        }
        return varModel;
    }

    public static HashMap<String, VarModel> getAll(){
        return VAR_INFO_MAP;
    }

    public static List<VarModel> getList(){
        return VarInfoMap.getAll().values().stream().collect(Collectors.toList());
    }

    public static List<VarModel> getListByCondition(VarModel varModel){
        if(StringUtils.isNull(varModel) ||
                (
                    StringUtils.isEmpty(varModel.getTagName()) &&
                    StringUtils.isEmpty(varModel.getTagGroup()) &&
                    StringUtils.isEmpty(varModel.getDeviceId()) &&
                    StringUtils.isEmpty(varModel.getDeviceName())
                )
        )
            return VarInfoMap.getList();

        List<VarModel> resultList = new ArrayList<>();
        VarInfoMap.getAll().forEach((key, value) -> {
            if(StringUtils.isNotEmpty(varModel.getTagGroup()) && StringUtils.isNotEmpty(varModel.getTagName())){
                if(value.getTagGroup().contains(varModel.getTagGroup()) && value.getTagName().contains(varModel.getTagName())){
                    resultList.add(value);
                }
            }
            else if(StringUtils.isNotEmpty(varModel.getTagGroup()) && value.getTagGroup().contains(varModel.getTagGroup())){
                resultList.add(value);
            }
            else if(StringUtils.isNotEmpty(varModel.getTagName()) && value.getTagName().contains(varModel.getTagName())){
                resultList.add(value);
            }
            else if(StringUtils.isNotEmpty(varModel.getDeviceId()) && value.getDeviceId().contains(varModel.getDeviceId())){
                resultList.add(value);
            }
            else if(StringUtils.isNotEmpty(varModel.getDeviceName()) && value.getDeviceName().contains(varModel.getDeviceName())){
                resultList.add(value);
            }
        });
        return resultList;
    }

    public synchronized static void setVarValue(String tagId, Object value){
        if(VAR_INFO_MAP.containsKey(tagId)) {
            VAR_INFO_MAP.get(tagId).setValue(value);
            VAR_INFO_MAP.get(tagId).setUpdateTime(new Date());
        }
    }

    public synchronized static void put(String tagId, VarModel var){
        VAR_INFO_MAP.put(tagId,var);
    }

    public synchronized static void remove(String tagId){
        if(!isExist(tagId)){
            return;
        }
        VAR_INFO_MAP.remove(tagId);
    }

    public synchronized static void removeByPlc(String deviceId){
//        if(!DeviceInfoMap.isExist(deviceId)){
//            return;
//        }
        List<VarModel> varModelList = VarInfoMap.getList();
        for (int i = 0; i < varModelList.size(); i++) {
            VarModel var = varModelList.get(i);
            if(deviceId.equals(var.getDeviceId())) remove(var.getTagId());
        }
    }

    public static boolean isExist(String tagId){
        return VAR_INFO_MAP.containsKey(tagId);
    }

}
