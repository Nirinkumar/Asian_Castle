package com.asianCastle.service;
import com.asianCastle.model.UserCredentials;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.asianCastle.repository.UserCredentialsRepository;

public class CustomUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserCredentialsRepository userCredentialsRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserCredentials user = userCredentialsRepo.findByUsername(username)
								.orElseThrow(()-> new UsernameNotFoundException("User not found"));
		
		return new User(user.getUsername(), user.getPassword(), Collections.singleton(new SimpleGrantedAuthority("USER_ROLE")));
	}

}
