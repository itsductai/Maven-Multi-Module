//package com.example.library;
//
//import org.springframework.stereotype.Service;
//
//@Service
//public class MyService {
//    public String getMessage() {
//        return "Hello from MyService (library module)";
//    }
//}
package com.example.library;

import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.Locale;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Service;

@Service
@EnableConfigurationProperties(ServiceProperties.class)
public class MyService {

    private final ServiceProperties properties;

    public MyService(ServiceProperties properties) {
        this.properties = properties;
    }

    public String getMessage() {
        return properties.getMessage();
    }
    
    public String getWelcomeMessage() {
        String day = LocalDate.now().getDayOfWeek()
                              .getDisplayName(TextStyle.FULL, Locale.ENGLISH);
        return "Today is " + day + " - " + properties.getMessage();
    }
}
