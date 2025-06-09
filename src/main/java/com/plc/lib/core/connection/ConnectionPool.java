package com.plc.lib.core.connection;

public interface ConnectionPool<T>{

    /**
     * 初始化池资源
     * @param maxActive 池中最大活动连接数
     * @param maxWait 最大等待时间
     */
    void init(Integer maxActive, Long maxWait);

    /**
     * 从池中获取资源
     * @return 连接资源
     */
    T getResource() throws Exception;

    /**
     * 释放连接
     * @param connection 正在使用的连接
     */
    void release(T connection) throws Exception;

    /**
     * 释放连接池资源
     */
    void close();

}
