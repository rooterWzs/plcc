package com.plc.lib.core.network;

import com.plc.lib.core.network.decode.Message;
import com.plc.lib.core.network.resolver.*;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;

// 服务端消息处理器
public class ServerMessageHandler extends SimpleChannelInboundHandler<Message> {

    // 获取一个消息处理器工厂类实例
    private MessageResolverFactory resolverFactory = MessageResolverFactory.getInstance();

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Message message) throws Exception {
        Resolver resolver = resolverFactory.getMessageResolver(message); // 获取消息处理器
        Message result = resolver.resolve(message); // 对消息进行处理并获取响应数据
        ctx.writeAndFlush(result); // 将响应数据写入到处理器中
    }

    @Override
    public void channelRegistered(ChannelHandlerContext ctx) throws Exception {
        resolverFactory.registerResolver(new RequestMessageResolver()); // 注册request消息处理器
        resolverFactory.registerResolver(new ResponseMessageResolver());// 注册response消息处理器
        resolverFactory.registerResolver(new PingMessageResolver()); // 注册ping消息处理器
        resolverFactory.registerResolver(new PongMessageResolver()); // 注册pong消息处理器

    }
}