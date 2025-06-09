package com.test.client.tcp;

import com.plc.lib.core.network.common.handler.ClientHeartBeatHandler;
import com.plc.lib.core.network.tcp.CustomDecoder;
import com.plc.lib.core.network.tcp.CustomEncoder;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;
import io.netty.handler.timeout.IdleStateHandler;

/**
 * 初始化处理器
 */
public class CustomClientHandlerInitializer extends ChannelInitializer<SocketChannel> {
    @Override
    protected void initChannel(SocketChannel ch) throws Exception {

        ChannelPipeline pipeline = ch.pipeline();
        pipeline.addLast(new IdleStateHandler(0, 0, 5));
        pipeline.addLast(new CustomEncoder());
        pipeline.addLast(new ClientHeartBeatHandler());
//        pipeline.addLast(new CustomDecoderV1(1024, 1, 4));
        pipeline.addLast(new CustomDecoder());
        pipeline.addLast(new CustomClientHandler());

    }
}
