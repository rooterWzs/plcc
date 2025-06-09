package com.plc.service;

import com.plc.model.Value;
import com.plc.model.ioserver.output.IOServerResModel;
import com.plc.model.PlcModel;
import com.plc.model.VarModel;

import java.util.List;

public interface IOServerService {

    /**
     * 获取 PLC
     */
    List<PlcModel> getAllPlc();
    PlcModel getPlc();


    /**
     * 获取 PLC变量
     */
    List<IOServerResModel> getAllVars();

    List<VarModel> getSysVars();

    List<IOServerResModel> getPlcVars();

    IOServerResModel getVar();

    boolean write(String tagId, Value value);

}
