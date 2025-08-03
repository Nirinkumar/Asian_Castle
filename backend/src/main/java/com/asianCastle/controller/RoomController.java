package com.asianCastle.controller;

import com.asianCastle.model.Room;
import com.asianCastle.service.RoomService;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {
	
	@Autowired
	private RoomService roomService;

	@GetMapping("/available")
	public List<Room> getAvailableRooms(){
		return roomService.getAvailableRooms();
	}
	
	@GetMapping("/all")
	public List<Room> getAllRooms(){
		return roomService.getAllRooms();
	}
}
