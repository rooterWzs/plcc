package com.plc.lib.core.network.tcp;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.util.CharsetUtil;

public class CustomServerHandler extends SimpleChannelInboundHandler<SimpleProtocol> {

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, SimpleProtocol msg) throws Exception {
        System.out.println(String.format("收到TCP私有协议客户端[%s]消息:", ctx.channel().remoteAddress())+":"+new String(msg.getBody(), CharsetUtil.UTF_8));
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        cause.printStackTrace();
        ctx.close();
    }

}
