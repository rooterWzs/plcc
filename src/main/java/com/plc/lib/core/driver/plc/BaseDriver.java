package com.plc.lib.core.driver.plc;

public abstract class BaseDriver<T> {

    //
    private short readMaxLength = 10; // 字节长度

    private T driver;

    private boolean isConnected = false;

    public BaseDriver(){}

    public BaseDriver(T driver) {
        this.driver = driver;
    }

    public T getDriver() {
        return driver;
    }

    public void setDriver(T driver) {
        this.driver = driver;
    }

    public boolean isConnected() {
        return isConnected;
    }

    public void setConnected(boolean connected) {
        isConnected = connected;
    }

    public short getReadMaxLength() {
        return readMaxLength;
    }

    public void setReadMaxLength(short readMaxLength) {
        this.readMaxLength = readMaxLength;
    }

}
