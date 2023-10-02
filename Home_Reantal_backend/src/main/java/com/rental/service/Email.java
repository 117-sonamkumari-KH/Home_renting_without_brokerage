package com.rental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class Email {

	
		
		@Autowired
		private JavaMailSender javaMailSender;
		

			
		public void simpleEmail(String toEmail,String body,String subject) {
			
				SimpleMailMessage message=new SimpleMailMessage();
				
				message.setFrom("jaybediskar@gmail.com");
				message.setTo(toEmail);
				message.setText(body);
				message.setSubject(subject);
			
			javaMailSender.send(message);
			System.out.println("email is being sent");
		 
			
		}

	
}
