package com.plc.lib.core.network.constants;

public enum ProtocolEnum {

    HTTP(new byte[]{0X47, 0X45, 0X54, 0X20}),
    //RTP传输协议
    RTP_V1(new byte[]{0x01,0X50,0X52,0x43}),
    //物联网通信协议
    Iot_Car(new byte[]{0x27,0x27})
    ;

    private byte[] proPrefix ;

    ProtocolEnum(byte[] proPrefix) {
        this.proPrefix = proPrefix;
    }

    public byte[] getProPrefix() {
        return proPrefix;
    }

}
