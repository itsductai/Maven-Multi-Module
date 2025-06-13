package com.example.library;

import org.springframework.stereotype.Service;

@Service
public class MyService {
    public String getMessage() {
        return "Hello from MyService (library module)";
    }
}
