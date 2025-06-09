package com.plc.model;

import lombok.Data;

@Data
public class SerialPortConfig {
    public static final int DATABITS_5 = 5;
    public static final int DATABITS_6 = 6;
    public static final int DATABITS_7 = 7;
    public static final int DATABITS_8 = 8;
    public static final int PARITY_NONE = 0;
    public static final int PARITY_ODD = 1;
    public static final int PARITY_EVEN = 2;
    public static final int PARITY_MARK = 3;
    public static final int PARITY_SPACE = 4;
    public static final int STOPBITS_1 = 1;
    public static final int STOPBITS_2 = 2;
    public static final int STOPBITS_1_5 = 3;
    public static final int FLOWCONTROL_NONE = 0;
    public static final int FLOWCONTROL_RTSCTS_IN = 1;
    public static final int FLOWCONTROL_RTSCTS_OUT = 2;
    public static final int FLOWCONTROL_XONXOFF_IN = 4;
    public static final int FLOWCONTROL_XONXOFF_OUT = 8;

    String portName = "COM1"; // Windows上的串口号（Linux下可能是 /dev/ttyS0）
    int baudRate = 9600;      // 波特率
    int dataBits = DATABITS_8; // 数据位
    int stopBits = STOPBITS_1; // 停止位
    int parity = PARITY_NONE;  // 校验位
}
