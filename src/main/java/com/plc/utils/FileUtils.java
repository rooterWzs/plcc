package com.plc.utils;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.support.ExcelTypeEnum;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class FileUtils {

    public static String PATH = "";

    private final static String SAVE_SUFFIX = "-LAST";
    private final static String BACK_UP_SUFFIX = "-BACKUP";

    public static void main(String[] args) {
        try {
            // 使用 Paths 获取路径，避免 URI 层次结构问题
            Path jarPath = Paths.get(FileUtils.class.getProtectionDomain().getCodeSource().getLocation().toURI());
            Path jarDir = jarPath.getParent();

            System.out.println("JAR 文件路径: " + jarPath.toAbsolutePath());
            System.out.println("JAR 所在目录: " + jarDir.toAbsolutePath().toString());

            // 获取当前工作目录
            String currentDir = System.getProperty("user.dir");
            System.out.println("当前工作目录: " + currentDir);

        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
    }

    public static String jarFilePath(){
        String currentDir = System.getProperty("user.dir");
        return currentDir;
//        try {
            // 获取当前类所在的 JAR 文件路径
//            File jarFile = new File(FileUtils.class.getProtectionDomain().getCodeSource().getLocation().toURI());

            // 获取 JAR 文件所在的目录
//            String jarDir = jarFile.getParent();
//            System.out.println("JAR 文件路径: " + jarFile.getAbsolutePath());
//            System.out.println("JAR 所在目录: " + jarDir);
//            return jarDir;
//            Path jarPath = Paths.get(FileUtils.class.getProtectionDomain().getCodeSource().getLocation().toURI());
//            Path jarDir = jarPath.getParent();
//            return jarDir.toAbsolutePath().toString();

//        } catch (URISyntaxException e) {
//            return "";
//        }
    }


    public static String fileNameWithPath(String name){
        String path = FileUtils.jarFilePath() + "/config";
        String fileName = path + "/" + name + SAVE_SUFFIX + ".csv";
        return fileName;
    }

    private static void saveExcel(Class clz, List<?> list,String name) throws IOException {
        if(list.size() == 0) return;

        String path = FileUtils.jarFilePath() + "/config";
        File directory = new File(path);
        if(!directory.exists()) directory.mkdirs();

        String fileName = path + "/" + name + ".csv";
        File file = new File(fileName);
        if (!file.exists()) file.createNewFile();

        EasyExcel.write(fileName, clz).sheet().doWrite(list);
    }

    public static void backup(Class clz, List<?> list,String name) throws IOException {
        name += BACK_UP_SUFFIX;
        saveExcel(clz,list,name);
    }

    public static void save(Class clz, List<?> list,String name) throws IOException {
        name += SAVE_SUFFIX;
        saveExcel(clz,list,name);
    }

    public static void backUpAndSave(Class clz, List<?> list,String name) throws IOException {
        String n = name + BACK_UP_SUFFIX;
        saveExcel(clz,list,n);

        String n2 = name + SAVE_SUFFIX;
        saveExcel(clz,list,n2);
    }

    public static boolean delete(String name){
        String path = FileUtils.jarFilePath() + "/config";
        String fileName = path + "/" + name + ".csv";
        File file = new File(fileName);
        if (file.exists()) {
            file.delete();
        }
        return true;
    }

}
