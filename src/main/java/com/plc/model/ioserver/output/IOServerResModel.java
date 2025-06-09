package com.plc.model.ioserver.output;

import com.plc.model.VarModel;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class IOServerResModel {

//    {
//            "N": "atd_r_XSATDL001",
//            "V": 2,
//            "Q": 192,
//            "T": "2023-11-17 15:04:38.911"
//    },

    private String N = "";
    private Object V = "";
    private int Q = 0;
    private Date T;

    public IOServerResModel(VarModel var){
        this.setN(var.getTagName());
        this.setV(var.getValue());
        this.setQ(192);
        this.setT(var.getUpdateTime());
    }

}
