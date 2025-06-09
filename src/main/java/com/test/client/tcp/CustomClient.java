package com.test.client.tcp;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioSocketChannel;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CustomClient {
    /**
     * 断线重连的间隔
     */
    private final static int RECONNECT_TIME_INTERVAL = 5000;
    EventLoopGroup group;
    ExecutorService executor;
    private int reconnectCount;
    /**
     * 重试的最大次数
     */
    private static final int RECONNECT_MAX_COUNT = 3;

    public CustomClient() {
        executor = Executors.newSingleThreadExecutor();
        group = new NioEventLoopGroup();

    }

    public void start(String ip, int port) throws InterruptedException {
        connect(ip, port);
    }

    private void connect(String ip, int port) throws InterruptedException {
        try {
            Bootstrap bootstrap = new Bootstrap();
            bootstrap.group(group).channel(NioSocketChannel.class)
                    .handler(new CustomClientHandlerInitializer());
            ChannelFuture channelFuture = bootstrap.connect(ip, port).sync();
            channelFuture.channel().closeFuture().sync();
        } finally {
            executor.execute(() -> {
                try {
                    Thread.sleep(RECONNECT_TIME_INTERVAL);

                    if (reconnectCount == RECONNECT_MAX_COUNT) {
                        System.out.println("关闭客户端");
                        group.shutdownGracefully();
                        executor.shutdown();
                    } else {
                        reconnectCount++;
                        System.out.println("开始重连，重连次数:" + reconnectCount);
                        connect(ip, port);
                    }

                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });


        }
    }

    public static void main(String[] args) throws InterruptedException {
        CustomClient gameClient = new CustomClient();
        gameClient.start("127.0.0.1", 8080);
    }
}
