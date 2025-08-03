package com.asianCastle.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asianCastle.model.CustomerDetails;
import com.asianCastle.repository.CustomerDetailsRepository;

@Service
public class CustomerDetailsService {

	@Autowired
	private CustomerDetailsRepository customerDetailsRepository;
	
	public CustomerDetails enterCustomerDetails(CustomerDetails customerDetails) {
		
		return customerDetailsRepository.save(customerDetails);
	}
	
	
	public CustomerDetails getCustomerDetails(int id) {
		return customerDetailsRepository.findById(id).get();
	}
	
	
	public List<CustomerDetails> getAllCustomers(){
		return (List<CustomerDetails>) customerDetailsRepository.findAll();
	}

	public CustomerDetails updateCustomer(int id, CustomerDetails customerDetails) {
		
		CustomerDetails retrivedDetails = customerDetailsRepository.findById(id).get();
		
		retrivedDetails.setId(customerDetails.getId());
		retrivedDetails.setName(customerDetails.getName());
		retrivedDetails.setAge(customerDetails.getAge());
		retrivedDetails.setAddress(customerDetails.getAddress());
		retrivedDetails.setProofType(customerDetails.getProofType());
		retrivedDetails.setProofUniqueValue(customerDetails.getProofUniqueValue());
		retrivedDetails.setBookedRoomNo(customerDetails.getBookedRoomNo());
		retrivedDetails.setCheckInDate(customerDetails.getCheckInDate());
		retrivedDetails.setCheckOutDate(customerDetails.getCheckOutDate());
		
		return customerDetailsRepository.save(retrivedDetails);
	}
	
	public String deleteCustomer(int id) {
		customerDetailsRepository.deleteById(id);
		return "Customer Details of Id: " + id + " deleted Successfully";
	}
}
