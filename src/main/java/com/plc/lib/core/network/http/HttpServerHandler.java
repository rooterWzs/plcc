package com.plc.lib.core.network.http;

import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.*;
import io.netty.util.AsciiString;
import io.netty.util.CharsetUtil;


public class HttpServerHandler extends SimpleChannelInboundHandler<FullHttpRequest> {

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, FullHttpRequest request) throws Exception {
        String uri = request.uri();

        // Check if the URI is "/hello"
        if ("/hello".equals(uri)) {
            // Create a response content
            String content = "Hello, World!";

            // Build the response
            FullHttpResponse response = new DefaultFullHttpResponse(
                    HttpVersion.HTTP_1_1, HttpResponseStatus.OK, Unpooled.copiedBuffer(content, CharsetUtil.UTF_8));

            // Set the content type
            response.headers().set(HttpHeaderNames.CONTENT_TYPE, "text/plain; charset=UTF-8");

            // Write and flush the response
            ctx.writeAndFlush(response);
        } else {
            // Handle other URIs or respond with 404 Not Found
            // ...
        }

//        String content = String.format("NettyHttpServerHandler Received http request, uri: %s, method: %s, content: %s%n", msg.uri(), msg.method(), msg.content().toString(CharsetUtil.UTF_8));
//        FullHttpResponse response = new DefaultFullHttpResponse(
//                HttpVersion.HTTP_1_1,
//                HttpResponseStatus.OK,
//                Unpooled.wrappedBuffer(content.getBytes()));
//
//        ctx.writeAndFlush(response).addListener(ChannelFutureListener.CLOSE);

    }

//    private AsciiString contentType = HttpHeaderValues.APPLICATION_JSON;

//    @Override
//    protected void channelRead0(ChannelHandlerContext ctx, FullHttpRequest msg) throws Exception {
//        System.out.println("class:" + msg.getClass().getName());
//        DefaultFullHttpResponse response = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1,
//                HttpResponseStatus.OK,
//                Unpooled.wrappedBuffer("test".getBytes())); // 2
//
//        HttpHeaders heads = response.headers();
//        heads.add(HttpHeaderNames.CONTENT_TYPE, contentType + "; charset=UTF-8");
//        heads.add(HttpHeaderNames.CONTENT_LENGTH, response.content().readableBytes()); // 3
//        heads.add(HttpHeaderNames.CONNECTION, HttpHeaderValues.KEEP_ALIVE);
//
//        ctx.write(response);
//    }
//
//    @Override
//    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
//        System.out.println("channelReadComplete");
//        super.channelReadComplete(ctx);
//        ctx.flush(); // 4
//    }
//
//    @Override
//    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
//        System.out.println("exceptionCaught");
//        if(null != cause) cause.printStackTrace();
//        if(null != ctx) ctx.close();
//    }

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

}
