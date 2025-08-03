package com.asianCastle.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asianCastle.model.Feedback;


@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long>{

}
