package com.plc.lib;

import com.plc.lib.core.LoadLocalData;
import com.plc.lib.core.connection.Reconnect;
import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.core.memory.DeviceVarsMap;
import com.plc.lib.core.operation.Operator;
import com.plc.lib.core.operation.OperatorEnum;
import com.plc.lib.core.operation.OperatorManager;
import com.plc.model.PlcModel;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SystemInitialization implements ApplicationListener<ApplicationReadyEvent> {


    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        // 应用程序启动后执行的逻辑
        System.out.println("Spring Boot 应用启动完成！");
        this.init();
        // 可以在这里执行其他初始化代码
    }

    private void init(){
        // 加载
        LoadLocalData loadLocalData = new LoadLocalData();
        loadLocalData.loadDevice();
        loadLocalData.loadVars();

        DeviceVarsMap.refresh();

        // 创建事件管理器
        OperatorManager operatorManager = new OperatorManager();
        List<PlcModel> PlcModelList = DeviceInfoMap.getList();
        for (int i = 0; i < PlcModelList.size(); i++) {
            PlcModel plcModel = PlcModelList.get(i);
            Operator init = new Operator(OperatorEnum.INIT, plcModel.getDeviceId());
            operatorManager.triggerOperation(init);
        }

        /**
         * 重新连接设备
         */
        Thread reconnectThread = new Thread(new Reconnect());
        reconnectThread.setName("重新连接设备");
        reconnectThread.start();

    }


}
