package com.plc.lib.license;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.security.MessageDigest;

public class LicenseKeyGenerator {

    // 获取本机的MAC地址
    public static String getMacAddress() throws Exception {
        InetAddress localHost = InetAddress.getLocalHost();
        NetworkInterface networkInterface = NetworkInterface.getByInetAddress(localHost);
        byte[] macAddressBytes = networkInterface.getHardwareAddress();

        StringBuilder macAddress = new StringBuilder();
        for (int i = 0; i < macAddressBytes.length; i++) {
            macAddress.append(String.format("%02X%s", macAddressBytes[i], (i < macAddressBytes.length - 1) ? "-" : ""));
        }

        return macAddress.toString();
    }

    // 根据MAC地址生成唯一的授权码
    public static String generateLicenseKey(String macAddress) throws Exception {
        // 使用SHA-256来对MAC地址进行哈希
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hash = digest.digest(macAddress.getBytes("UTF-8"));

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
            // 获取本机MAC地址
            String macAddress = getMacAddress();
            System.out.println("MAC地址: " + macAddress);

            // 生成授权码
            String licenseKey = generateLicenseKey(macAddress);
            System.out.println("生成的授权码: " + licenseKey);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
