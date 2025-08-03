package com.asianCastle.model;

import jakarta.persistence.GenerationType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;


@Entity
public class CustomerDetails {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private int age;
	private String address;
	private String proofType;
	private String proofUniqueValue;
	private int bookedRoomNo;
	private String checkInDate;
	private String checkOutDate;
	public int getId() {
		return id;
	}
	public void setId(int id) {
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
	public String getProofType() {
		return proofType;
	}
	public void setProofType(String proofType) {
		this.proofType = proofType;
	}
	public String getProofUniqueValue() {
		return proofUniqueValue;
	}
	public void setProofUniqueValue(String proofUniqueValue) {
		this.proofUniqueValue = proofUniqueValue;
	}
	public int getBookedRoomNo() {
		return bookedRoomNo;
	}
	public void setBookedRoomNo(int bookedRoomNo) {
		this.bookedRoomNo = bookedRoomNo;
	}
	public String getCheckInDate() {
		return checkInDate;
	}
	public void setCheckInDate(String checkInDate) {
		this.checkInDate = checkInDate;
	}
	public String getCheckOutDate() {
		return checkOutDate;
	}
	public void setCheckOutDate(String checkOutDate) {
		this.checkOutDate = checkOutDate;
	}	
}
