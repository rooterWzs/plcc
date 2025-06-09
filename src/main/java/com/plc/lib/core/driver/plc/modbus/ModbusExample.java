package com.plc.lib.core.driver.plc.modbus;

import com.plc.utils.StringUtils;
import org.apache.plc4x.java.api.PlcConnection;
import org.apache.plc4x.java.api.PlcDriverManager;
import org.apache.plc4x.java.api.messages.PlcReadRequest;
import org.apache.plc4x.java.api.messages.PlcReadResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * apache PLX modbus测试用例
 *
 * @author guzt
 */
public class ModbusExample {

    protected static final Logger logger = LoggerFactory.getLogger(ModbusExample.class);

    public static void main(String[] args) {
        // 获取操作系统名称
        String osName = System.getProperty("os.name");

        // 打印操作系统信息
        System.out.println("操作系统名称: " + osName);

        String ip = "127.0.0.1";
        String port = "503";
        // 单元标识符：相当于设备的地址
        String unitIdentifier = "3";
        String timeout = "5000";
        String urlFormat = "modbus-tcp:tcp://{}:{}?unit-identifier={}&request-timeout={}";

        System.out.println(StringUtils.format(urlFormat, ip, port, unitIdentifier, timeout));

        String connectionString = "modbus-tcp:tcp://127.0.0.1:503";

        // try里面会自动关闭连接
        try (PlcConnection plcConnection = PlcDriverManager
                .getDefault()
                .getConnectionManager()
                .getConnection(connectionString)) {
            // Check if this connection support reading of data.
            if (!plcConnection.getMetadata().isReadSupported()) {
                logger.info(">>>>>>>>>>>>>>This connection doesn't support reading.");
                return;
            }
            // Check if this connection support writing of data.
            if (!plcConnection.getMetadata().isWriteSupported()) {
                logger.info(">>>>>>>>>>>>>>This connection doesn't support writing.");
                return;
            }

            if (plcConnection.isConnected()) {
                logger.info(">>>>>>>>>>>>>>Modbus已经连上..............");
            }
            // Create a new read request:
            // You will need to pass the reference you are asking for
            PlcReadRequest.Builder builder = plcConnection.readRequestBuilder();
            // 一次性读取几个寄存器里面的内容
            int count = 8;
            // 这里面的起始地址为实际为 32，传递参数时候加1
            int startAddress = 1;
            for (int i = 0; i < count; i++) {
                // 功能码 (tagAddress) Modbus 的操作对象有四种：线圈、离散输入、输入寄存器、保持寄存器。
                // 1. 线圈：相当于开关，在 Modbus 中可读可写，数据只有 00 和 01。
                // 2. 离散量：输入位，开关量，在 Modbus 中只读。
                // 3. 输入寄存器：只能从模拟量输入端改变的寄存器，在 Modbus 中只读。
                // 4. 保持寄存器：用于输出模拟量信号的寄存器，在 Modbus 中可读可写。
                // 查看参考：https://neugates.io/docs/zh/latest/appendix/protocol/modbus_tcp.html
                // 不同功能码对应不同的地址格式：参看 org.apache.plc4x.java.modbus.base.tag.ModbusTagHandler
                builder.addTagAddress("第" + (i + 1) + "个光电信号：", "holding-register:" + (startAddress + i) + ":INT");
            }

            // 这种方式一次性读取8个：builder.addTagAddress("DI-count8N", "discrete-input:33:BOOL[8]")
            PlcReadRequest readRequest = builder.build();
            logger.info(">>>>>>>>>>>>>>开始读取");

            // Execute the request
            PlcReadResponse response = readRequest.execute().get();
            // Handle the response
            // 创建了一个写请求，尝试将地址1的线圈设置为true
            for (String fieldName : response.getTagNames()) {
                if (response.getObject(fieldName) instanceof Boolean) {
                    logger.info(">>>>>>>>>>>>>>Boolean[" + fieldName + "]: " + response.getBoolean(fieldName));
                }
                else if (StringUtils.isArray(response.getObject(fieldName))) {
                    logger.info(">>>>>>>>>>>>>>Array[" + fieldName + "]: " + response.getObject(fieldName));
                } else {
                    logger.info(">>>>>>>>>>>>>>Object[" + fieldName + "]: " + response.getObject(fieldName));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
