package com.asianCastle.controller;

import com.asianCastle.service.UserCredentialsService;
import com.asianCastle.model.UserCredentials;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@CrossOrigin("http://localhost:3000")
public class UserCredentialsController {
	
	@Autowired
	private UserCredentialsService userCredentialsService;
	
	@CrossOrigin("http://localhost:3000/signup")
	@PostMapping("/user/register")
	public UserCredentials registerUser(@RequestBody UserCredentials userCredentials) {
		return userCredentialsService.registerUser(userCredentials);
	}

}
