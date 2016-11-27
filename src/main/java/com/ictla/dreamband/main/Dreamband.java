package com.ictla.dreamband.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.ictla")
@EntityScan(basePackages = "com.ictla.dreamband.domain")
@EnableJpaRepositories(basePackages = "com.ictla.dreamband.repository")
public class Dreamband {

    public static void main(String[] args) {
	SpringApplication.run(Dreamband.class, args);
    }
}