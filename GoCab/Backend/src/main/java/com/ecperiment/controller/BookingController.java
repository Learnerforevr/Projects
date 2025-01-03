package com.ecperiment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecperiment.model.BookingRequest;
import com.ecperiment.service.EmailService;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin(origins = "http://localhost:3000") 
public class BookingController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public String sendBookingEmail(@RequestBody BookingRequest bookingRequest) {
        emailService.sendEmail(
            bookingRequest.getName(),
            bookingRequest.getPhone(),
            bookingRequest.getFromLocation(),
            bookingRequest.getToLocation()
        );
        return "Request has sent successfully! Wait for 3 Minutes.";
    }
}