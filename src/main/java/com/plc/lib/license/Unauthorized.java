package com.plc.lib.license;


import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class Unauthorized {

    @Scheduled(fixedDelay = 1 * 60 * 1000) // 30 分钟（30 * 60 * 1000 毫秒）
    public void shutdown() {
        System.out.println("程序即将退出...");
//        System.exit(0); // 退出程序
    }

}
