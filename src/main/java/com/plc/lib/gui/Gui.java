package com.plc.lib.gui;

import com.plc.model.PlcModel;
import com.plc.model.VarModel;
import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.core.memory.VarInfoMap;

import java.util.*;

public class Gui {

    private static final String OPERATION_EXIT = "EXIT";
    private static final String CMD_D = "D";
    private static final String CMD_V = "V";
    private static final String CMD_TAG_NAME = "T:";
    private static final String CMD_O_D = "OD:";

    public void start(){
        System.out.println("请开始您的输入，EXIT/E 退出");
        System.out.println("1、输入 D 查询所有在线的设备");
        System.out.println("2、输入 V 查询所有的变量");
        System.out.println("3、输入 T:`TagName` 查询变量的值");
        System.out.println("4、输入 OD:`DeviceName` 查询设备上所有变量的值");
        String OPERATION_EXIT = "EXIT";
        //怎么让程序一直运行
        Scanner scan = new Scanner(System.in);
        while(scan.hasNext()) {
            String in = scan.next().toString();
            if(OPERATION_EXIT.equals(in.toUpperCase())
                    || OPERATION_EXIT.substring(0, 1).equals(in.toUpperCase())) {
                System.out.println("您成功已退出！");
                break;
            }
            System.out.println("您输入的值："+in);
            if(CMD_D.equals(in)){
                printD();
            }
            else if(CMD_V.equals(in)){
                printV();
            }
            else if(CMD_TAG_NAME.equals(in)){
                printV();
            }
            else if(CMD_O_D.equals(in)){
                printV();
            }
            else{
                System.out.println("查询无效");
            }
        }
    }

    public void printD(){
        Formatter formatter = new Formatter(System.out);
        formatter.format("设备名 \t\t 地址 \t\t 是否在线 \t\t 更新时间 \n");

        Iterator<Map.Entry<String, PlcModel>> devices = DeviceInfoMap.getAll().entrySet().iterator();
        while (devices.hasNext()) {
            Map.Entry<String, PlcModel> entry = devices.next();
            PlcModel dev = entry.getValue();
            formatter.format(dev.getDeviceName() + " \t\t " + dev.getAddr() + " \t\t " + dev.isActive() + " \t\t " + dev.getUpdateTime() + "\n");
        }
    }


    public void printV(){
        Formatter formatter = new Formatter(System.out);
        formatter.format("变量名 \t\t 地址 \t\t 变量值 \t\t 更新时间 \n");
        Iterator<Map.Entry<String, VarModel>> vars = VarInfoMap.getAll().entrySet().iterator();
        while (vars.hasNext()) {
            Map.Entry<String, VarModel> entry = vars.next();
            VarModel var = entry.getValue();
            formatter.format(var.getTagName() + " \t\t " + var.getItemName() + " \t\t " + var.getValue() + " \t\t " + var.getUpdateTime() + "\n");
        }
    }

}
