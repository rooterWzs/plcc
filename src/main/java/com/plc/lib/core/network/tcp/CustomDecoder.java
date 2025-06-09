package com.plc.lib.core.network.tcp;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.ByteToMessageDecoder;

import java.util.List;

public class CustomDecoder extends ByteToMessageDecoder {
    /**
     * 头信息5个字节 协议类型 消息体长度
     */
    private final static int HEAD_LENGTH = 5;

    @Override
    protected void decode(ChannelHandlerContext ctx, ByteBuf in, List<Object> out) {
        //没读完头就返回，说明没收到足够数据，下次再读
        if (in.readableBytes() < HEAD_LENGTH) {
            return;
        }

        // 标记一下当前的readIndex的位置
        in.markReaderIndex();

        byte protocolType = in.readByte();

        int bodyLength = in.readInt();
        // 异常情况，关闭连接。只有心跳检测是0
        if (bodyLength <= 0) {
            System.out.println("消息长度为0，关闭");
            ctx.close();
            return;
        }
        //长度不够，也返回，等待足够长度
        if (in.readableBytes() < bodyLength) {
            in.resetReaderIndex();
            return;
        }
        //协议解析
        SimpleProtocol simpleProtocol = new SimpleProtocol();
        simpleProtocol.setProtocolType(protocolType);
        simpleProtocol.setBodyLength(bodyLength);
        if (simpleProtocol.getBodyLength() > 0) {
            byte[] body = new byte[bodyLength];
            in.readBytes(body);
            simpleProtocol.setBody(body);
        }
        out.add(simpleProtocol);
    }

}