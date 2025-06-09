package com.plc.utils;

/**
 * Created by pingxin on 2017/2/8.
 */
public class BytesUtil {
    /**
     * 查看数组的开头是否为目标数组
     */
    public static boolean startWithsArrays(byte[] src ,byte[] featureBytes) {
        int r = 0;
        int i =0;
        for (; i < featureBytes.length; i++) {
            r += src[i] ==featureBytes[i] ? 1 : 0;
        }
        return r!=0 && i==r;
    }
}
