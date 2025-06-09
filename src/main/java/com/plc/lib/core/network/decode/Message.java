package com.plc.lib.core.network.decode;

import lombok.Data;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Data
public class Message {
    private int magicNumber;
    private byte mainVersion;
    private byte subVersion;

    private MessageTypeEnum messageType;
    private Map<String, String> attachments = new HashMap<>();

    private String body;

    public Map<String, String> getAttachments() {
        return Collections.unmodifiableMap(attachments);
    }

    public void setAttachments(Map<String, String> attachments) {
        this.attachments.clear();
        if (null != attachments) {
            this.attachments.putAll(attachments);
        }
    }

    public void addAttachment(String key, String value) {
        attachments.put(key, value);
    }

    // getter and setter...
}
