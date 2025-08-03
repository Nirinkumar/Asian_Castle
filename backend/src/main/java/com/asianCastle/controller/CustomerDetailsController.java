package com.asianCastle.controller;

//import com.asianCastle.service.CustomerDetailsService;
import com.asianCastle.model.CustomerDetails;
import com.asianCastle.service.CustomerDetailsService;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;


@RestController
public class CustomerDetailsController {
	
	@Autowired
	private CustomerDetailsService customerDetailsService;
	
	@PostMapping("/customerdetails")
	public CustomerDetails enterCustomerDetails(@RequestBody CustomerDetails customerDetails) {
		return customerDetailsService.enterCustomerDetails(customerDetails);
	}
	
	@GetMapping("/customer/{id}")
	public CustomerDetails getCustomerDetails(@PathVariable int id) {
		return customerDetailsService.getCustomerDetails(id);
	}
	
	@GetMapping("/customerslist")
	public List<CustomerDetails> getAllCustomers(){
		return customerDetailsService.getAllCustomers();
	}

	@PutMapping("/updatecustomer/{id}")
	public CustomerDetails updateCustomer(@PathVariable int id, @RequestBody CustomerDetails customerDetails) {
		return customerDetailsService.updateCustomer(id, customerDetails);
	}
	
	@DeleteMapping("/deletecustomer/{id}")
	public String deleteCustomer(@PathVariable int id) {
		return customerDetailsService.deleteCustomer(id);
	}
}
