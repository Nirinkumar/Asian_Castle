package com.asianCastle.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.asianCastle.model.Feedback;
import com.asianCastle.service.FeedbackService;

@RestController
@CrossOrigin("http://localhost:3000")
public class FeedbackController {
	
	@Autowired
	private FeedbackService feedbackService;
	
	@CrossOrigin("http://localhost:3000/contact")
	@PostMapping("/feedback")
	public Feedback enterFeedback(@RequestBody Feedback feedback) {
		return feedbackService.enterFeedback(feedback);
	}

}
