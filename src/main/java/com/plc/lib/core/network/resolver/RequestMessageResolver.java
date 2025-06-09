package com.plc.lib.core.network.resolver;

import com.alibaba.fastjson2.JSONObject;
import com.plc.lib.core.network.decode.Message;
import com.plc.lib.core.network.decode.MessageTypeEnum;
import com.plc.model.Result;


import java.util.concurrent.atomic.AtomicInteger;

// request类型的消息
public class RequestMessageResolver implements Resolver {

    private static final AtomicInteger counter = new AtomicInteger(1);

    @Override
    public boolean support(Message message) {
        return message.getMessageType() == MessageTypeEnum.REQUEST;
    }

    @Override
    public Message resolve(Message message) {
        // 接收到request消息之后，对消息进行处理，这里主要是将其打印出来
        int index = counter.getAndIncrement();
        System.out.println("" + index + ". receive request: " + message.getBody());
        System.out.println("[]" + index + ". attachments: " + message.getAttachments());

        // 处理完成后，生成一个响应消息返回
        Message response = new Message();
        response.setMessageType(MessageTypeEnum.RESPONSE);


        response.setBody(JSONObject.toJSONString(Result.error("error")));
//        response.addAttachment("name", "xufeng");
//        response.addAttachment("hometown", "wuhan");
        return response;
    }
}