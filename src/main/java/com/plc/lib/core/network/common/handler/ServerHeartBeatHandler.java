package com.plc.lib.core.network.common.handler;

import io.netty.channel.ChannelHandlerContext;

public class ServerHeartBeatHandler extends HeartBeatHandler {
    //读空闲累计几次断开连接
    int totalHeart;
    private static final int TOTAL_MAX_HEART = 3;

    @Override
    protected void handleReaderIdle(ChannelHandlerContext ctx) {
        totalHeart++;
        System.out.println("读空闲次数：" + totalHeart);
        if (totalHeart == TOTAL_MAX_HEART) {
            System.out.println("关闭连接");
            ctx.channel().close();
        }
    }

    @Override
    protected void handlePing(ChannelHandlerContext ctx) {
        System.out.println(ctx.channel().id().asLongText()+"服务端发送PONG");
        handleHeart(PONG, ctx);
//        totalHeart = 0;//也可以有PING来了就清零，保证客户端活着就不关闭，但是可能长期不发数据，就心跳了，具体看业务情况
    }


}