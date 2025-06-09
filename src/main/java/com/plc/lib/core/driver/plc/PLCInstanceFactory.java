package com.plc.lib.core.driver.plc;

import com.alibaba.fastjson2.JSON;
import com.plc.lib.core.driver.plc.modbus.ModbusTCP4x;
import com.plc.lib.core.driver.plc.omron.Omron;
import com.plc.lib.core.driver.plc.siemens.SiemensS7P4X;
import com.plc.model.PlcModel;

public class PLCInstanceFactory {

    public static PLC createPLCInstance(PlcModel plcModel){
        switch (plcModel.getDriver()) {
            case DriverEnum.S7_1200_TCP:
                return new SiemensS7P4X();

            case DriverEnum.OMRON_CJ:
            case DriverEnum.OMRON_CS:
                return new Omron();

            case DriverEnum.MODBUS_TCP:
            case DriverEnum.MODBUS_RTU:
            case DriverEnum.MODBUS_ASCII:
                return new ModbusTCP4x();

            default:
                throw new IllegalArgumentException("不支持的 PLC 驱动: [" + plcModel.getDriver() + "]|" + JSON.toJSON(plcModel));
        }
    }

}
