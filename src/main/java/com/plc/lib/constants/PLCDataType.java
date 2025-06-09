package com.plc.lib.constants;

public class PLCDataType {
    // "BIT","BYTE","SHORT","USHORT","BCD","LONG","LONGBCD","FLOAT","STRING","DOUBLE","INT64"
    public final static String BIT      = "BIT";
    public final static String BYTE     = "BYTE";
    public final static String SHORT    = "SHORT";
    public final static String USHORT   = "USHORT";

    /**
     * ushort 2 bytes 0 to 9,999
     */
    public final static String BCD      = "BCD";
    public final static String LONG     = "LONG";  //

    /**
     * ulong 4 bytes 0 to 99,999,999
     */
    public final static String LONGBCD  = "LONGBCD";
    public final static String FLOAT    = "FLOAT";
    public final static String STRING   = "STRING";
    public final static String DOUBLE   = "DOUBLE";
    public final static String INT64    = "INT64";

    /**
     * "BIT","BYTE","SHORT","USHORT","BCD","LONG","LONGBCD","FLOAT","STRING","DOUBLE","INT64"
     * 将 Object 转换为由字符串类型名指定的目标类型。
     *
     * @param obj       要转换的对象
     * @param dateType  目标类型的类名（如 "java.lang.String"）
     * @param <T>       目标类型
     * @return 转换后的目标类型对象
     * @throws ClassCastException 如果对象不能转换为目标类型
     * @throws ClassNotFoundException 如果类名无法找到
     */
    public static <T> T convertToType(Object obj, String dateType) {
        // 使用反射加载目标类型的 Class 对象
        Class<T> clazz = null;
        switch (dateType){
            case BIT:
                clazz = (Class<T>) Boolean.class;
                break;
            case BYTE:
                clazz = (Class<T>) Byte.class;
                break;
            case SHORT:
                clazz = (Class<T>) Integer.class;
                break;
            case USHORT:
                clazz = (Class<T>) Integer.class;
                break;
            case BCD:
                clazz = (Class<T>) Integer.class;
                break;
            case LONG:
                clazz = (Class<T>) Integer.class;
                break;
            case LONGBCD:
                clazz = (Class<T>) Integer.class;
                break;
            case FLOAT:
                clazz = (Class<T>) Float.class;
                break;
            case STRING:
                clazz = (Class<T>) String.class;
                break;
            case DOUBLE:
                clazz = (Class<T>) Double.class;
                break;
            case INT64:
                clazz = (Class<T>) Long.class;
                break;
        }

        try{
            if (clazz.isInstance(obj)) {
                return clazz.cast(obj);  // 安全地转换为目标类型
            }else {
                throw new ClassCastException("1无法将对象转换为 " + dateType);
            }
        }catch (Exception ex){
            throw new ClassCastException("无法将对象转换为 " + dateType);
        }
    }

    public static void main(String[] args) {
        Object obj1 = "Hello, Generics!";
        Object obj2 = 123;

        try {
            // 将 obj1 转换为 String 类型
            String str = convertToType(obj1, "STRING");
            System.out.println("String 值: " + str);

            // 将 obj2 转换为 Integer 类型
            Integer integer = convertToType(obj2, "USHORT");
            System.out.println("SHORT 值: " + integer);

            // 尝试错误的类型转换（会抛出异常）
//            String errorConversion = convertToType(obj2, "java.lang.String");
        } catch (Exception e) {
            System.out.println("转换失败: " + e.getMessage());
        }
    }

}
