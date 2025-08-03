package com.asianCastle.service;

import com.asianCastle.repository.UserCredentialsRepository;
import com.asianCastle.model.UserCredentials;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserCredentialsService {

	@Autowired
	private UserCredentialsRepository userCredentialsRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public UserCredentials registerUser(UserCredentials userCredentials) {
		userCredentials.setPassword(passwordEncoder.encode(userCredentials.getPassword()));
		return userCredentialsRepo.save(userCredentials);
	}
}
