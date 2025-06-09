package com.plc.lib.core.operation;


import com.plc.lib.core.operation.chain.OperatorChain;
import com.plc.lib.core.operation.handler.AddListeningThreadHandler;
import com.plc.lib.core.operation.handler.CancelListeningThreadHandler;
import com.plc.lib.core.operation.handler.DelMemoryPLCDataHandler;
import com.plc.lib.core.operation.handler.UpdateMemoryPLCDataHandler;

import java.util.HashMap;
import java.util.Map;

public class OperatorManager {

    private static Map<String, OperatorChain> OperationChains = new HashMap<>();
    {
        AddListeningThreadHandler addListeningThreadHandler = new AddListeningThreadHandler();
        CancelListeningThreadHandler cancelListeningThreadHandler = new CancelListeningThreadHandler();
        DelMemoryPLCDataHandler delMemoryPLCDataHandler = new DelMemoryPLCDataHandler();
        UpdateMemoryPLCDataHandler upMemoryPLCDataHandler = new UpdateMemoryPLCDataHandler();

        OperatorChain chain0 = new OperatorChain();
        chain0.addHandler(addListeningThreadHandler);
        OperationChains.put(OperatorEnum.INIT, chain0);

        // 为事件A创建责任链：HandlerA -> HandlerB -> HandlerC
        OperatorChain chainA = new OperatorChain();
        chainA.addHandler(upMemoryPLCDataHandler);
        chainA.addHandler(addListeningThreadHandler);
        OperationChains.put(OperatorEnum.ADD, chainA);

        // 为事件B创建责任链：HandlerB -> HandlerC -> HandlerD
        OperatorChain chainB = new OperatorChain();
        chainB.addHandler(cancelListeningThreadHandler);
        chainB.addHandler(upMemoryPLCDataHandler);
        chainB.addHandler(addListeningThreadHandler);
        OperationChains.put(OperatorEnum.UPDATE, chainB);

        // 为事件C创建责任链：HandlerA -> HandlerC -> HandlerD
        OperatorChain chainC = new OperatorChain();
        chainC.addHandler(cancelListeningThreadHandler);
        chainC.addHandler(delMemoryPLCDataHandler);
        OperationChains.put(OperatorEnum.DELETE, chainC);

        OperatorChain chainD = new OperatorChain();
        chainD.addHandler(cancelListeningThreadHandler);
        OperationChains.put(OperatorEnum.CANCEL_TASK, chainD);
    }


    // 为事件类型注册责任链
    public static void registerChain(String op, OperatorChain chain) {
        OperationChains.put(op, chain);
    }


    // 触发事件并按顺序处理
    public void triggerOperation(Operator operator) {
        OperatorChain chain = OperationChains.get(operator.getOp());
        if (chain != null) {
            chain.handleOperation(operator);
        } else {
            System.out.println("No chain found for event: " + operator.getOp());
        }
    }
}
