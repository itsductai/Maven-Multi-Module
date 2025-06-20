package com.example.application;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.library.MyService;

@Controller
public class PageController {

    private final MyService myService;

    public PageController(MyService myService) {
        this.myService = myService;
    }

    @GetMapping("/")
    public String welcome(Model model) {
        model.addAttribute("message", myService.getWelcomeMessage());
        return "welcome"; // tìm file templates/welcome.html
    }

    @GetMapping("/webpt1")
    public String webpt1(Model model) {
        model.addAttribute("message", myService.getWelcomeMessage());
        return "webpt1"; // tìm file templates/welcome.html
    }
}
