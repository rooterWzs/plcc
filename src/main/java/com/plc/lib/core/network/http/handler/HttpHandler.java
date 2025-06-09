package com.plc.lib.core.network.http.handler;

import io.netty.channel.*;
import io.netty.handler.codec.http.*;
import io.netty.handler.codec.http.websocketx.WebSocketFrame;

public class HttpHandler extends SimpleChannelInboundHandler<Object> {
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        ctx.close();
    }


    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Object msg) {
        if (msg instanceof FullHttpRequest) {//如果是HTTP请求，进行HTTP操作
            handleHttpRequest(ctx, (FullHttpRequest) msg);
        } else if (msg instanceof WebSocketFrame) {//如果是Websocket请求，则进行websocket操作
            handleWebSocketFrame(ctx, (WebSocketFrame) msg);
        }
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) {
        ctx.flush();
    }
    //处理HTTP的代码
    private void handleHttpRequest(ChannelHandlerContext ctx, FullHttpRequest req) {
        HttpMethod method=req.method();
        String uri=req.uri();
        diapathcer(method,uri);
    }
    private void diapathcer(HttpMethod method,String uri){
        if(method == HttpMethod.GET && "/login".equals(uri)){
            //....处理
            System.out.println(111111111);
        }else if(method == HttpMethod.POST && "/register".equals(uri)){
            //...处理

        }

    }
    //处理Websocket的代码
    private void handleWebSocketFrame(ChannelHandlerContext ctx, WebSocketFrame frame) {
    }

}


