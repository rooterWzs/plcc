package com.plc.model.ioserver.input;

import lombok.Data;

import java.util.Date;

/**
 * @Author Zhishuang.Wang
 * @Date 2023/11/3 10:07
 * @Email 1406110602@qq.com
 */
@Data
public class Vars {

    private int TagID;
    private String TagName;
    private String Description;
    private String TagType;
    private String TagDataType;
    private String MaxRawValue;
    private String MinRawValue;
    private String MaxValue;
    private String MinValue;
    private String NonLinearTableName;
    private String ConvertType;
    private String IsFilter;
    private String DeadBand;
    private String Unit;
    private String ChannelName;
    private String DeviceName;
    private String ChannelDriver;
    private String DeviceSeries;
    private String DeviceSeriesType;
    private String CollectControl;
    private String CollectInterval;
    private String CollectOffset;
    private String TimeZoneBias;
    private String TimeAdjustment;
    private String Enable;
    private String ForceWrite;
    private String ItemName;
    private String RegName;
    private String RegType;
    private String ItemDataType;
    private String ItemAccessMode;
    private String HisRecordMode;
    private String HisDeadBand;
    private String HisInterval;
    private String TagGroup;
    private String NamespaceIndex;
    private String IdentifierType;
    private String Identifier;
    private String ValueRank;
    private String QueueSize;
    private String DiscardOldest;
    private String MonitoringMode;
    private String TriggerMode;
    private String DeadType;
    private String DeadValue;
    private String UANodePath;


    private Object value;

    private Date updateTime;

}
