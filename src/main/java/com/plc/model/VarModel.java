package com.plc.model;

import com.alibaba.excel.annotation.ExcelIgnore;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.plc.model.ioserver.input.Vars;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@NoArgsConstructor
public class VarModel {

    private String TagId;
    private String TagName;
    private String Description;
    private String DeviceName;
    private String DeviceId;
    private String TagType;
    private String TagDataType;
    private String ItemName;
    private String RegName;
    private String RegType;
    private String ItemDataType;
    private String ItemAccessMode; // 读写/只读
    private String CollectInterval; // 采集频率 1000 ms
    private String TagGroup;
    @ExcelIgnore
    private Object value;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date updateTime;

    public VarModel(Vars var){
        this.setTagId(UUID.randomUUID().toString());
        this.TagName = var.getTagName();
        this.Description = var.getDescription();
        this.DeviceName = var.getDeviceName();
        this.TagType = var.getTagType();
        this.TagDataType = var.getTagDataType();
        // this.ItemName = var.getItemName();
        this.RegName = var.getRegName();
        this.ItemName = var.getItemName().replaceFirst(var.getRegName(),"");
        this.RegType = var.getRegType();
        this.ItemDataType = var.getItemDataType();
        this.ItemAccessMode = var.getItemAccessMode();
        this.CollectInterval = var.getCollectInterval();
        this.TagGroup = var.getTagGroup();
        this.value = var.getValue();
        this.updateTime = var.getUpdateTime();
    }


}
