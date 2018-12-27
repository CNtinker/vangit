package com.van;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@MapperScan("com.van.dao")
@SpringBootApplication
public class VanApplication {

    public static void main(String[] args) {
        SpringApplication.run(VanApplication.class, args);
    }


}


