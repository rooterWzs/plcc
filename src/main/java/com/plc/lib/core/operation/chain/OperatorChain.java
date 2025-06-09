package com.plc.lib.core.operation.chain;

import com.plc.lib.core.operation.Operator;
import com.plc.lib.core.operation.handler.OperationHandler;

import java.util.ArrayList;
import java.util.List;

public class OperatorChain {

    private List<OperationHandler> handlers = new ArrayList<>();

    // 添加处理器到链条
    public void addHandler(OperationHandler handler) {
        handlers.add(handler);
    }

    // 执行链条中的处理器
    // 执行链条中的处理器
    public void handleOperation(Operator operator) {
        for (OperationHandler handler : handlers) {
            System.out.println(": " + operator.getOp() + " | " + operator.getPlcId());
            if(!handler.handle(operator)){
                break;
            }
        }
    }

}
