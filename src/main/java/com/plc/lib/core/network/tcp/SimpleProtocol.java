package com.plc.lib.core.network.tcp;

import lombok.Data;

/**
 * Author: wangwei
 */
@Data
public class SimpleProtocol {
    /**
     * 协议类型
     */
    private byte protocolType;

    /**
     * 消息体长度
     */
    private int bodyLength;
    /**
     * 消息内容
     */
    private byte[] body;
}
