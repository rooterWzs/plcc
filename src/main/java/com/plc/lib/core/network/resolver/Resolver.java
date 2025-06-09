package com.plc.lib.core.network.resolver;

import com.plc.lib.core.network.decode.Message;

public interface Resolver {

    public boolean support(Message message);

    public Message resolve(Message message);

}
