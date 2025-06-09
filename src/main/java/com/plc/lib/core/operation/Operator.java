package com.plc.lib.core.operation;

import com.plc.model.PlcModel;
import lombok.Data;

@Data
public class Operator {
    private String op;
    private String plcId;

    private PlcModel plcModel;

    public Operator(String op, String plcId) {
        this.op = op;
        this.plcId = plcId;
    }

    public Operator(String op, PlcModel plcModel) {
        this.op = op;
        this.plcModel = plcModel;
        this.plcId = plcModel.getDeviceId();
    }

}
