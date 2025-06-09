package com.plc.service;

import com.plc.model.PlcModel;
import com.plc.model.ioserver.input.Device;

import java.util.List;

public interface PlcService {

    boolean add(PlcModel plc);

    boolean importPlc(List<Device> plcList);

    boolean edit(PlcModel plc);

    boolean remove(PlcModel plc);

}
