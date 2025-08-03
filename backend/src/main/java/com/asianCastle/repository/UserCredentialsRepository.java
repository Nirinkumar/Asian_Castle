package com.asianCastle.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asianCastle.model.UserCredentials;
import java.util.Optional;

@Repository
public interface UserCredentialsRepository extends JpaRepository<UserCredentials, Long>{
     public Optional<UserCredentials> findByUsername(String username);
}
