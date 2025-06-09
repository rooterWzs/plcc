package com.plc.lib.core.network;

import com.plc.lib.core.network.constants.ProtocolEnum;
import com.plc.lib.core.network.decode.MessageDecoder;
import com.plc.lib.core.network.decode.MessageEncoder;
import com.plc.lib.core.network.http.HttpServerHandler;
import com.plc.lib.core.network.websocket.WebSocketFrameHandler;
import com.plc.utils.BytesUtil;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.channel.ChannelPipeline;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpRequestDecoder;
import io.netty.handler.codec.http.HttpResponseEncoder;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import io.netty.handler.timeout.IdleStateHandler;
import io.netty.util.CharsetUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class ProtocolSelectorHandler extends ChannelInboundHandlerAdapter {

    private static final Logger logger = LoggerFactory.getLogger(ProtocolSelectorHandler.class);

    private final byte[] POST_HEADER_BYTES = new byte[]{50, (byte) 4f, 53, 54};

    private final byte[] GET_HEADER_BYTES = new byte[]{0X47, 0X45, 0X54, 0X20};

    /**
     * websocket定义请求行前缀
     */
    private static final String WEBSOCKET_LINE_PREFIX = "GET /ws";
    /**
     * websocket的uri
     */
    private static final String WEBSOCKET_PREFIX = "/ws";

    /**
     * 检查10个字节，没有空格就是自定义协议
     */
    private static final int SPACE_LENGTH = 10;

    /**
     * 通过重写msg Reader判断报文特征实现
     * 只要收到数据就会调用该方法
     */
    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        if (msg instanceof ByteBuf) {
            ByteBuf in = (ByteBuf) msg;
            byte[] src = new byte[in.readableBytes()];
            in.copy(0, in.readableBytes()).readBytes(src);

            switch (identifiedPro(src)) {
                case HTTP:
                    addHTTPHandlers(ctx.pipeline());
                    break;
                case RTP_V1:
                    //流媒体RTP协议1
                    break;
                case Iot_Car:

                    break;
                default:
                    logger.error("not identified this protocol");
                    break;
                //// TODO: 2017/2/13 关闭连接
            }
        } else {
            logger.error("channel have error.....");
        }
        ctx.fireChannelActive();//转到下一个handle
    }

//    @Override
//    protected void decode(ChannelHandlerContext ctx, ByteBuf in, List<Object> out) throws Exception {
////        System.out.println("before :" + ctx.pipeline().toString());
//        if (isWebSocketUrl(in)) {
//            System.out.println("addWebSocketHandlers");
//
//            addWebSocketHandlers(ctx.pipeline());
//        } else if (isCustomProcotol(in)) {
//            System.out.println("addTCPProtocolHandlers");
//
//            addTCPProtocolHandlers(ctx.pipeline());
//        } else {
//            System.out.println("addHTTPHandlers");
//            addHTTPHandlers(ctx.pipeline());
//        }
//        ctx.pipeline().remove(this);
////        System.out.println("after :" + ctx.pipeline().toString());
//    }

    private ProtocolEnum identifiedPro(byte[] src) {
        //50 4f 53 54 post
        ProtocolEnum protocolEnum = null;
        if (BytesUtil.startWithsArrays(src, GET_HEADER_BYTES) || BytesUtil.startWithsArrays(src, POST_HEADER_BYTES)) {
            protocolEnum = ProtocolEnum.HTTP;
        } else if (BytesUtil.startWithsArrays(src, ProtocolEnum.RTP_V1.getProPrefix())) {
            protocolEnum = ProtocolEnum.RTP_V1;
        } else if (BytesUtil.startWithsArrays(src, ProtocolEnum.Iot_Car.getProPrefix())) {
            protocolEnum = ProtocolEnum.Iot_Car;//物联网车辆通信协议
        }
        return protocolEnum;
    }

    /**
     * 是否有websocket请求行前缀
     *
     * @param byteBuf
     * @return
     */
    private boolean isWebSocketUrl(ByteBuf byteBuf) {
        if (byteBuf.readableBytes() < WEBSOCKET_LINE_PREFIX.length()) {
            return false;
        }
        byteBuf.markReaderIndex();
        byte[] content = new byte[WEBSOCKET_LINE_PREFIX.length()];
        byteBuf.readBytes(content);
        byteBuf.resetReaderIndex();
        String s = new String(content, CharsetUtil.UTF_8);
        return s.equals(WEBSOCKET_LINE_PREFIX);

    }

    /**
     * 是否是自定义是有协议
     * @param byteBuf
     * @return
     */
    private boolean isCustomProcotol(ByteBuf byteBuf) {
        byteBuf.markReaderIndex();
        int length=Math.min(byteBuf.readableBytes(),SPACE_LENGTH);
        byte[] content = new byte[length];
        byteBuf.readBytes(content);
        byteBuf.resetReaderIndex();
        String s = new String(content, CharsetUtil.UTF_8);
        return s.indexOf(" ") == -1;
    }

    /**
     * 动态添加WebSocket处理器
     * @param pipeline
     */
    private void addWebSocketHandlers(ChannelPipeline pipeline) {
        pipeline.addLast(new HttpServerCodec());
        pipeline.addLast(new HttpObjectAggregator(8192));
        pipeline.addLast(new WebSocketServerProtocolHandler(WEBSOCKET_PREFIX));
        pipeline.addLast(new WebSocketFrameHandler());


    }
    /**
     * 动态添加TCP私有协议处理器
     * @param pipeline
     */
    private void addTCPProtocolHandlers(ChannelPipeline pipeline) {
        pipeline.addLast(new IdleStateHandler(2,0,0));
        pipeline.addLast(new MessageEncoder());
//        pipeline.addLast(new ServerMessageHandler());
        pipeline.addLast(new MessageDecoder());
        pipeline.addLast(new ServerMessageHandler());
    }


    /**
     * 动态添加HTTP处理器
     * @param pipeline
     */
    private void addHTTPHandlers(ChannelPipeline pipeline) {
        pipeline.addLast(new HttpRequestDecoder());
        pipeline.addLast(new HttpResponseEncoder());
        pipeline.addLast("aggregator", new HttpObjectAggregator(512 * 1024));
        pipeline.addLast(new HttpServerHandler());

    }
}
