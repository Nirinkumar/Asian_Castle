package com.asianCastle.model;

import jakarta.persistence.Entity;
import jakarta.persistence.*;

@Entity
public class UserCredentials {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private int age;
	private String address;
	private String mobileNo;
	private String email;
	
	@Column(unique=true)
	private String username;
	private String password;
	private String role = "ROLE_USER";
	private String gender;
	
	public UserCredentials(Long id, String name, int age, String address, String mobileNo, String email,
			String username, String password, String gender) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.address = address;
		this.mobileNo = mobileNo;
		this.email = email;
		this.username = username;
		this.password = password;
		this.gender = gender;
	}
	public UserCredentials() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	
}
