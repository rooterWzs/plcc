package com.plc.lib.core.operation.handler;

import com.plc.lib.core.operation.Operator;

public interface OperationHandler {
    boolean handle(Operator operator);
}