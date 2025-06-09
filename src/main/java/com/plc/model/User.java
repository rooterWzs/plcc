package com.plc.model;

import java.io.Serializable;

/**
 * @author intent
 * @version 1.0
 * @date 2020/3/25 4:47 下午
 * @email zzy.main@gmail.com
 */
public class User implements Serializable {
    private static final long serialVersionUID = 6157464317866745830L;
    private String username;
    private String email;
    private Boolean sex;
    private short year;

    public User() {
    }

    public User(String username, String email, Boolean sex, short year) {
        this.username = username;
        this.email = email;
        this.sex = sex;
        this.year = year;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getSex() {
        return sex;
    }

    public void setSex(Boolean sex) {
        this.sex = sex;
    }

    public short getYear() {
        return year;
    }

    public void setYear(short year) {
        this.year = year;
    }
}
