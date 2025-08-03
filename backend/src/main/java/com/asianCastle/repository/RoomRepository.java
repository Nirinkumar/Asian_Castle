package com.asianCastle.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.asianCastle.model.Room;

public interface RoomRepository extends JpaRepository<Room, Integer>{

	List<Room> findByIsBookedFalse();
}
