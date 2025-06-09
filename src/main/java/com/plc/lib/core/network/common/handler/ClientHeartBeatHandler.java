package com.plc.lib.core.network.common.handler;

import io.netty.channel.ChannelHandlerContext;

public  class ClientHeartBeatHandler extends HeartBeatHandler {

    @Override
    protected void handleAllIdle(ChannelHandlerContext ctx) {
        super.handleAllIdle(ctx);
        handleHeart(PING,ctx);
        System.out.println("客户端发送PING");
    }

    @Override
    protected void handlePong(ChannelHandlerContext ctx) {
        System.out.println("收到服务端PONG");
    }
}