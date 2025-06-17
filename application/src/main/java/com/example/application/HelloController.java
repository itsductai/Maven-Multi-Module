//package com.example.application;
//
//import com.example.library.MyService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//public class HelloController {
//
//    @Autowired
//    private MyService myService;
//
//    @GetMapping("/hello")
//    public String hello() {
//        return myService.getMessage();
//    }
//}

package com.example.application;

import com.example.library.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Autowired
    private MyService myService;

    @GetMapping("/hello")
    public String hello() {
        return myService.getMessage();  // Lấy message từ application.properties
    }
}

