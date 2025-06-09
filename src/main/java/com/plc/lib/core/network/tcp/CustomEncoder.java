package com.plc.lib.core.network.tcp;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToByteEncoder;

public class CustomEncoder extends MessageToByteEncoder<SimpleProtocol> {

    @Override
    protected void encode(ChannelHandlerContext ctx, SimpleProtocol simpleProtocol, ByteBuf out) throws Exception {
        byte protocolType = simpleProtocol.getProtocolType();
        int length = simpleProtocol.getBodyLength();
        byte[] body = simpleProtocol.getBody();
        out.writeByte(protocolType);
        out.writeInt(length);
        if(length>0){
            out.writeBytes(body);
        }
    }
}
