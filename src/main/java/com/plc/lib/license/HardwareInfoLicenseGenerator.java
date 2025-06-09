package com.plc.lib.license;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.security.MessageDigest;

public class HardwareInfoLicenseGenerator {

    // 执行系统命令并返回结果
    private static String executeCommand(String command) throws Exception {
        Process process = Runtime.getRuntime().exec(command);
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        StringBuilder result = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            result.append(line).append("\n");
        }
        reader.close();
        return result.toString().trim();
    }

    // 获取CPU序列号（Windows示例，Linux/Mac需要替换命令）
    public static String getCPUSerial() throws Exception {
        String command = "";
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win")) {
            command = "wmic cpu get ProcessorId";  // Windows 命令
        } else if (os.contains("nix") || os.contains("nux")) {
            command = "dmidecode -t processor | grep ID";  // Linux 命令
        } else if (os.contains("mac")) {
            command = "sysctl -n machdep.cpu.brand_string";  // MacOS 命令
        }
        return executeCommand(command);
    }

    // 获取硬盘序列号（Windows示例，Linux/Mac需要替换命令）
    public static String getHardDiskSerial() throws Exception {
        String command = "";
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win")) {
            command = "wmic diskdrive get SerialNumber";  // Windows 命令
        } else if (os.contains("nix") || os.contains("nux")) {
            command = "lsblk -o SERIAL";  // Linux 命令
        } else if (os.contains("mac")) {
            command = "system_profiler SPSerialATADataType | grep 'Serial Number'";  // MacOS 命令
        }
        return executeCommand(command);
    }

    // 获取主板序列号（Windows示例，Linux/Mac需要替换命令）
    public static String getMotherboardSerial() throws Exception {
        String command = "";
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win")) {
            command = "wmic baseboard get SerialNumber";  // Windows 命令
        } else if (os.contains("nix") || os.contains("nux")) {
            command = "dmidecode -t baseboard | grep 'Serial Number'";  // Linux 命令
        } else if (os.contains("mac")) {
            command = "system_profiler SPHardwareDataType | grep 'Serial Number'";  // MacOS 命令
        }
        return executeCommand(command);
    }

    // 生成授权码
    public static String generateLicenseKey(String cpuSerial, String diskSerial, String motherboardSerial) throws Exception {
        String combined = cpuSerial + diskSerial + motherboardSerial;
        // 使用SHA-256来对硬件信息进行哈希
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hash = digest.digest(combined.getBytes("UTF-8"));

        // 将哈希值转换为十六进制格式
        StringBuilder hexString = new StringBuilder();
        for (byte b : hash) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) hexString.append('0');
            hexString.append(hex);
        }
        return hexString.toString();
    }

    public static void main(String[] args) {
        try {
            // 获取CPU、硬盘和主板的序列号
            String cpuSerial = getCPUSerial();
            System.out.println("CPU序列号: " + cpuSerial);

            String diskSerial = getHardDiskSerial();
            System.out.println("硬盘序列号: " + diskSerial);

            String motherboardSerial = getMotherboardSerial();
            System.out.println("主板序列号: " + motherboardSerial);

            // 生成授权码
            String licenseKey = generateLicenseKey(cpuSerial, diskSerial, motherboardSerial);
            System.out.println("生成的授权码: " + licenseKey);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
