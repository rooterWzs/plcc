package com.plc.lib.core.collection;

import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.model.PlcModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.*;

public class CollectionManager {
    
    private static final Logger logger = LoggerFactory.getLogger(CollectionManager.class);

    private static ExecutorService EXECUTOR_SERVICE = new ThreadPoolExecutor(8, 20, 60, TimeUnit.SECONDS, new LinkedBlockingQueue<>());;  // 线程池管理任务
    private static Map<String, Future<?>> TASK_FUTURE_MAP = new HashMap<>();   // 存储PLC_ID与对应任务的Future对象


    // 增加任务：启动一个新线程
    public static void addTask(PlcModel plcModel, Runnable task) {
        if (TASK_FUTURE_MAP.containsKey(plcModel.getDeviceId())) {
            logger.info("TASK_FUTURE " + plcModel.getDeviceId() + " already exists!");
            return;
        }

        Future<?> future = EXECUTOR_SERVICE.submit(task);  // 提交任务到线程池
        TASK_FUTURE_MAP.put(plcModel.getDeviceId(), future);  // 将任务ID和Future对象映射
        logger.info("TASK_FUTURE " + plcModel.getDeviceId() + " added and started.");
    }

    // 删除任务：停止并移除任务
    public static void removeTask(String deviceId){
        PlcModel plcModel = DeviceInfoMap.getByDeviceId(deviceId);
        removeTask(plcModel);
    }
    public static void removeTask(PlcModel plcModel) {
        Future<?> future = TASK_FUTURE_MAP.get(plcModel.getDeviceId());
        if (future != null) {
            future.cancel(true);  // 取消任务（通过标记任务为中断状态来停止任务）
            TASK_FUTURE_MAP.remove(plcModel.getDeviceId());  // 从任务映射中移除
            logger.info("TASK_FUTURE " + plcModel.getDeviceId() + " removed and stopped.");
        } else {
            logger.info("TASK_FUTURE " + plcModel.getDeviceId() + " not found.");
        }
    }

    // 修改任务：停止原有任务并替换为新任务
    public static void updateTask(PlcModel plcModel, Runnable newTask) {
        removeTask(plcModel);  // 先删除旧任务
        addTask(plcModel, newTask);  // 添加新任务
        logger.info("TASK_FUTURE " + plcModel.getDeviceId() + " updated.");
    }

    // 关闭线程池
    public static void shutdown() {
        EXECUTOR_SERVICE.shutdown();
        logger.info("ExecutorService shutdown.");
    }

    // 检查是否有任务在运行
    public static boolean isTaskRunning(PlcModel plcModel) {
        return TASK_FUTURE_MAP.containsKey(plcModel.getDeviceId());
    }

}
