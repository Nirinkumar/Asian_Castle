import React from "react";
import "./pages.css"
import RoomCard from "./RoomCard";
import allRoomData from "../assets/roomData";
import room1 from "../assets/images/rooms/delux_single_2.jpg"



export default function Rooms(){

    const roomList = allRoomData.map(
        (room)=>{
        return <RoomCard
            key={room.id}
            name={room.name}
            image={room.image}
            address={room.address}
            ratings={room.rating}
            place={room.place}
            ac={room.ac}
            wifi={room.wifi}
            tv={room.tv}
            dth={room.dth}
            powerBackup={room.powerBackup}
            price={room.price}
            offer={room.offer}
            addInfo={room.addInfo}
            />
    }
    ) 
    return(
        <div className="rooms">
            <div className="room-container">
                <div className="side-category">
                    <p>All Locations</p>
                        <ul>
                            <li>Chennai</li>
                            <li>Madurai</li>
                            <li>Mysore</li>
                            <li>Coimbatore</li>
                            <li>Theni</li>
                            <li>Bangalore</li>
                            <li>Thanjavur</li>
                            <li>Pondicherry</li>
                            <li>Salem</li>
                            <li>Kanchipuram</li>
                        </ul>
                </div>
                <div className="room-list-container">
                    {roomList}
                </div>
                

            </div>
        </div>
    )
}