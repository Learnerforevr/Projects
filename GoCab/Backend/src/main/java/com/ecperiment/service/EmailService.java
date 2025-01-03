package com.ecperiment.service;

public interface EmailService {
	void sendEmail(String name, String phone, String fromLocation, String toLocation);
}
