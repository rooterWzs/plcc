package com.plc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class KillIOServer {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(KillIOServer.class, args);
    }

}