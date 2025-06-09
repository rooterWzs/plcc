package com.plc.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.plc.lib.core.driver.plc.DriverEnum;
import com.plc.model.ioserver.input.Device;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Data
@NoArgsConstructor
public class PlcModel {

    private String deviceId;
    private String deviceName; //
    private String description;
    private String channelType; // 链接方式 TCP/UDP/串口/以太网  Ethernet | SerialPort

    private String driver; // 驱动
    private int retryInterval; // 重连间隔
    private int commTimeout; // 链接超时时长
    private String deviceSeries;
    private String series;

    private String addr;
    private int port;
    private int varNumber;
    private boolean isActive;
    private boolean isConnected = false;

    private int unitIdentifier; // 站点ID

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date updateTime;

    public PlcModel(Device device){
        this.setDeviceId(UUID.randomUUID().toString());
        this.setDeviceName(device.getDeviceName());
        this.setDescription(device.getDescription());
        if("以太网".equals(device.getChannelType())){
            this.setChannelType(ChannelType.Ethernet.getChannel());
        }else{
            this.setChannelType(ChannelType.Ethernet.getChannel());
        }

        if(DriverEnum.OMRON_CJ.equals(device.getDeviceSeries()) || DriverEnum.OMRON_CS.equals(device.getDeviceSeries())){
            String series = "[\"" + DriverEnum.BRAND_OMRON + "\",\"" + device.getDeviceSeries() + "\"]";
            this.setSeries(series);
        }

        this.setDriver(device.getDeviceSeries());
        this.setRetryInterval(device.getRetryInterval());
        this.setCommTimeout(device.getCommTimeout());
        this.setDeviceSeries(device.getDeviceSeries());

        // 定义匹配IP地址的正则表达式
        String ipPattern = "(\\d{1,3}\\.){3}\\d{1,3}";
        // 编译正则表达式
        Pattern pattern = Pattern.compile(ipPattern);
        // 创建匹配器对象
        Matcher matcher = pattern.matcher(device.getDeviceAddrString());

        // 查找匹配项
        if (matcher.find()) {
            // 获取匹配的IP地址
            String ipAddress = matcher.group();
            this.setAddr(ipAddress);
        } else {
            this.setAddr(device.getDeviceAddrString());
        }


        this.setActive(device.isActive());
        this.setUpdateTime(device.getUpdateTime());
    }

    public static enum ChannelType{
        Ethernet("Ethernet"),
        SerialPort("SerialPort");

        @Getter
        private String channel;
        ChannelType(String channel){
            this.channel = channel;
        }
    }

}
