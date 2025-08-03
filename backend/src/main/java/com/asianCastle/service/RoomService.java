package com.asianCastle.service;

import com.asianCastle.model.Room;
import com.asianCastle.repository.RoomRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;


@Service
public class RoomService {
	
	@Autowired
	private RoomRepository roomRepository;

	public List<Room> getAvailableRooms(){
		return roomRepository.findByIsBookedFalse();
	}
	
	public List<Room> getAllRooms(){
		return (List<Room>) roomRepository.findAll();
	}


}
