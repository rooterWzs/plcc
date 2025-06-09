package com.plc.service.impl;

import com.plc.lib.core.memory.DeviceInfoMap;
import com.plc.lib.exception.ServiceException;
import com.plc.lib.core.operation.Operator;
import com.plc.lib.core.operation.OperatorEnum;
import com.plc.lib.core.operation.OperatorManager;
import com.plc.service.PlcService;
import com.plc.model.PlcModel;
import com.plc.model.ioserver.input.Device;
import com.plc.utils.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PlcServiceImpl implements PlcService {

    private static final Logger logger = LoggerFactory.getLogger(PlcServiceImpl.class);

    @Override
    public boolean add(PlcModel plc) {
        plc.setDeviceId(UUID.randomUUID().toString());
        if(DeviceInfoMap.isExist(plc.getDeviceId())){
            String msg = "ERROR: 设备名称【" + plc.getDeviceName() + "】重复,请重新填写";
            logger.error(msg);
            throw new ServiceException(msg);
        }

        // PlcModel.ChannelType.Ethernet.getChannel()
        if(StringUtils.isEmpty(plc.getChannelType())){
            throw new ServiceException("请选择接入方式");
        }
        if(PlcModel.ChannelType.Ethernet.getChannel().equals(plc.getChannelType())){
            if(StringUtils.isEmpty(plc.getAddr()) || StringUtils.isNull(plc.getPort())){
                throw new ServiceException("请输入ip或端口");
            }
        } else if (PlcModel.ChannelType.SerialPort.getChannel().equals(plc.getChannelType())) {
            if(StringUtils.isEmpty(plc.getAddr())){
                throw new ServiceException("请配置串口信息");
            }
        }


        OperatorManager operatorManager = new OperatorManager();
        Operator init = new Operator(OperatorEnum.ADD, plc);
        operatorManager.triggerOperation(init);
//
//        // todo 进行链接操作
//        ConnectionInit.Connect connect = new ConnectionInit.Connect(plc);
//        new Thread(connect).start();
        return true;
    }

    @Override
    public boolean importPlc(List<Device> plcList) {
        String msg = "";
        for (Device device : plcList) {
            // todo getDeviceId
            if(StringUtils.isNotNull(DeviceInfoMap.getByDeviceName(device.getDeviceName()))){
                logger.error("ERROR: 设备名称【" + device.getDeviceName() + "】重复,请重新填写");
                msg += device.getDeviceName() + ";";
                continue;
            }
            PlcModel plc = new PlcModel(device);
            OperatorManager operatorManager = new OperatorManager();
            Operator addOp = new Operator(OperatorEnum.ADD, plc);
            operatorManager.triggerOperation(addOp);

//            DeviceInfoMap.put(plc.getDeviceId(), plc);
//            // todo 进行链接操作
//            ConnectionInit.Connect connect = new ConnectionInit.Connect(plc);
//            new Thread(connect).start();
        }

        if(StringUtils.isNotEmpty(msg)){
            throw new ServiceException("添加失败的设备【" + msg + "】；原因：该设备名称已存在！");
        }
        return true;
    }

    @Override
    public boolean edit(PlcModel plc) {
        if(!DeviceInfoMap.isExist(plc.getDeviceId())){
            String msg = "ERROR: 设备名称【" + plc.getDeviceName() + "】不存在";
            logger.error(msg);
            throw new ServiceException(msg);
        }

        OperatorManager operatorManager = new OperatorManager();
        Operator init = new Operator(OperatorEnum.UPDATE, plc);
        operatorManager.triggerOperation(init);

//        // todo 进行链接操作
//        ConnectionInit.Connect connect = new ConnectionInit.Connect(plc);
//        new Thread(connect).start();
//        DeviceVarsMap.refresh();
//        backUpAndSave();

        return true;
    }

    @Override
    public boolean remove(PlcModel plc) {
        if(!DeviceInfoMap.isExist(plc.getDeviceId())){
            String msg = "ERROR: 设备名称【" + plc.getDeviceName() + "】不存在";
            logger.error(msg);
            throw new ServiceException(msg);
        }

        OperatorManager operatorManager = new OperatorManager();
        Operator init = new Operator(OperatorEnum.DELETE, plc);
        operatorManager.triggerOperation(init);

//        VarInfoMap.removeByPlc(plc.getDeviceId());
//        DeviceInfoMap.remove(plc.getDeviceId());
//        DeviceVarsMap.refresh();
//        // todo 进行链接操作
//        DeviceConnection.CONNECTION_MAP.remove(plc.getDeviceId());
//        DeviceConnection.CONNECTION_FAILED_MAP.remove(plc.getDeviceId());

//        try {
//            FileUtils.backUpAndSave(PlcModel.class,DeviceInfoMap.getList(),DeviceInfoMap.CSV_FILE_NAME);
//            FileUtils.backUpAndSave(VarModel.class,VarInfoMap.getList(),VarInfoMap.CSV_FILE_NAME);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }

        return true;
    }

}
