package com.plc.lib.core.driver.plc;

import com.plc.model.PlcModel;
import com.plc.model.Value;
import com.plc.model.VarModel;

import java.util.HashMap;
import java.util.List;

public interface PLC {

    public PLC connect(PlcModel plcModel);

    public void getResult(PlcModel plcModel, HashMap<String,HashMap<String, List<VarModel>>> regItemDataTypeVarListMap);

    public void heartbeat(PlcModel plcModel);

    public boolean write(VarModel varModel, Value value);

    public boolean isConnected();

}
