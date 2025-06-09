package com.plc.lib.core.collection;

import com.plc.lib.core.connection.DeviceConnection;
import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.core.memory.DeviceVarsMap;
import com.plc.lib.core.driver.plc.PLC;
import com.plc.lib.core.driver.plc.PLCInstanceFactory;
import com.plc.model.PlcModel;
import com.plc.model.VarModel;
import com.plc.utils.StringUtils;

import java.util.HashMap;
import java.util.List;

public class CollectTask extends Thread {

    private String plcId;
    private PLC plc = null;

    public CollectTask(String plcId) {
        this.plcId = plcId;
    }

    @Override
    public void run() {
        PlcModel plcModel = DeviceInfoMap.getByDeviceId(plcId);
        if (StringUtils.isNull(plcModel)) return;

        plc = PLCInstanceFactory.createPLCInstance(plcModel);
        PLC PLCInstance = plc.connect(plcModel);
        if (PLCInstance == null || !plc.isConnected()) {
            DeviceConnection.removeConnection(plcId);
            DeviceConnection.ReConnect(plcModel);
            return;
        }

        DeviceConnection.Connect(plcModel, PLCInstance);
        while (!isInterrupted()) {
            // TODO
            // 变量按plc分组-》按变量类型分组-》按数据类型分组
            // 变量类型中按点位大小排好序-》取出最大和最小，最小作为起始地址，最大-最小 作为长度
            // 记录单个任务的执行次数
            try {
                HashMap<String, HashMap<String, List<VarModel>>> regListVarMap = DeviceVarsMap.DEVID_REG_LISTVAR_MAP.get(plcId);
                if (StringUtils.isNotNull(regListVarMap)) {
                    plc.getResult(plcModel, regListVarMap);
                }

                Thread.currentThread().sleep(2000);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

    }

}
