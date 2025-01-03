package com.ecperiment.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

	@Autowired
    private JavaMailSender mailSender;
	
	@Override
	public void sendEmail(String name, String phone, String fromLocation, String toLocation) {
		SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("ucanreachnag@gmail.com"); // Replace with the recipient's email address
        message.setSubject("New Booking Request");
        message.setText("Booking Details:\n" +
                "Name: " + name + "\n" +
                "Phone: " + phone + "\n" +
                "From: " + fromLocation + "\n" +
                "To: " + toLocation);

        mailSender.send(message);
		
	}

}
