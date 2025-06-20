package com.example.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

//public class Application {
//	public static void main(String[] args) {
//		SpringApplication.run(Application.class, args);
//	}
//}

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.library.MyService;

@ComponentScan(basePackages = { "com.example.application", "com.example.library" })
@SpringBootApplication
@RestController
public class Application {

  private final MyService myService;

  public Application(MyService myService) {
    this.myService = myService;
  }

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }
}