package com.asianCastle.repository;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;

import com.asianCastle.model.CustomerDetails;


public interface CustomerDetailsRepository extends JpaRepository<CustomerDetails, Integer> {

}
