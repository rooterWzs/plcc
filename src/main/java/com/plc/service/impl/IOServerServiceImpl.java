package com.plc.service.impl;

import com.plc.lib.core.connection.DeviceConnection;
import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.core.memory.VarInfoMap;
import com.plc.lib.core.driver.plc.PLC;
import com.plc.lib.exception.ServiceException;
import com.plc.model.Value;
import com.plc.model.ioserver.output.IOServerResModel;
import com.plc.model.PlcModel;
import com.plc.model.VarModel;
import com.plc.service.IOServerService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class IOServerServiceImpl implements IOServerService {
    @Override
    public List<PlcModel> getAllPlc() {
        List<PlcModel> list = DeviceInfoMap.getAll().values().stream().collect(Collectors.toList());
        return list;
    }

    @Override
    public PlcModel getPlc() {
        return null;
    }

    @Override
    public List<IOServerResModel> getAllVars() {
        List<IOServerResModel> list = new ArrayList<>();
        Iterator<Map.Entry<String, VarModel>> vars = VarInfoMap.getAll().entrySet().iterator();
        while (vars.hasNext()) {
            Map.Entry<String, VarModel> entry = vars.next();
            VarModel var = entry.getValue();
            IOServerResModel model = new IOServerResModel(var);
            list.add(model);
        }
        return list;
    }

    @Override
    public List<VarModel> getSysVars() {
        List<VarModel> list = VarInfoMap.getAll().values().stream().collect(Collectors.toList());
        return list;
    }

    @Override
    public List<IOServerResModel> getPlcVars() {
        return null;
    }

    @Override
    public IOServerResModel getVar() {
        return null;
    }

    @Override
    public boolean write(String tagId, Value value) {
        if(!VarInfoMap.isExist(tagId)) throw new ServiceException("点位不存在");
        VarModel varModel = VarInfoMap.getByTagId(tagId);
        if(!DeviceConnection.CONNECTION_MAP.containsKey(varModel.getDeviceId())){
            throw new ServiceException("当前设备不在线");
        }
        PLC plc = DeviceConnection.getConnection(varModel.getDeviceId());
        return plc.write(varModel, value);
    }
}
