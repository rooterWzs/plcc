package com.plc.model.ioserver.input;

import lombok.Data;

import java.util.Date;

/**
 * @Author Zhishuang.Wang
 * @Date 2023/11/2 20:35
 * @Email 1406110602@qq.com
 */
@Data
public class Device {

    private int DeviceID;
    private String DeviceName;
    private String Description;
    private String GroupName;
    private String ChannelType;

    private String ChannelName;
    private String ChannelDriver;
    private int InitTimeout;
    private int CommTimeout;
    private String ClsID;

    private String DeviceSeries;
    private String DeviceAddrString;
    private int DeviceAddressNo;
    private int RetryInterval;
    private String RetryIntervalUnit;

    private int MaxRetryTime;
    private String MaxRetryTimeUnit;
    private String Enable;
    private String RedundanceStyle;
    private String RedunChannelName;

    private String RedunDeviceName;
    private String CurrentActiveDeviceID;
    private String Optimization;
    private int PublishingInterval;
    private int LifetimeCount;

    private int MaxKeepAliveCount;
    private int MaxNotificationsPerPublish;
    private int PublishingEnabled;
    private int PublishPriority;
    private String DeviceGeneral1;

    private String DeviceGeneral2;
    private String DeviceGeneral3;
    private String DeviceGeneral4;
    private String DeviceGeneral5;
    private String DeviceGeneral6;

    private String DeviceGeneral7;
    private String DeviceGeneral8;
    private String DeviceGeneral9;
    private String DeviceGeneral10;

    private boolean isActive;

    private Date updateTime;

}
