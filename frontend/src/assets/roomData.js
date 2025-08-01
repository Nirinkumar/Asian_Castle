import deluxe_single_1 from "./images/rooms/delux_single_2.jpg"
import ordinary_single_1 from "./images/rooms/single_normal_room.jpg"
import ordinary_triple_1 from "./images/rooms/triple_cot2.jpg"
import deluxe_single_2 from "./images/rooms/deluxe-single4.jpg"
import luxury_single_1 from "./images/rooms/luxury_high_room1.jpg"
import deluxe_double_1 from "./images/rooms/double_cot_high2.jpg"
import luxury_single_2 from "./images/rooms/single_cot_large.jpeg"
import ordinary_double_1 from "./images/rooms/double_cot_normal1.jpg"
import deluxe_single_3 from "./images/rooms/double_cot7.jpg"
import luxury_single_3 from "./images/rooms/bedroom-five-star-hotel1.jpg"
import deluxe_single_4 from "./images/rooms/deluxe-single3.jpg"
import ordinary_single_2 from "./images/rooms/double_cot6.jpg"
import ordinary_double_2 from "./images/rooms/double_cot5.jpg"
import luxury_single_4 from "./images/rooms/double_cot8.jpg"
import ordinary_single_3 from "./images/rooms/double_cot1.jpg"
import luxury_single_5 from "./images/rooms/bedroom-five-star-hotel.jpg"
import deluxe_single_5 from "./images/rooms/Deluxe-2.jpg"
import deluxe_single_6 from "./images/rooms/deluxe-single5.jpg"
import ordinary_single_4 from "./images/rooms/normal_single_cot_room.jpg"
import deluxe_double_2 from "./images/rooms/Deluxe-rooms-double8.jpg"
import luxury_single_6 from "./images/rooms/luxury_high_room2.jpeg"
import ordinary_single_5 from "./images/rooms/normal_single.jpg"
import luxury_single_9 from "./images/rooms/luxury_room3.jpg"
import deluxe_single_7 from "./images/rooms/room2.jpg"
import ordinary_single_6 from "./images/rooms/normal_single_cot.jpeg"
import luxury_single_7 from "./images/rooms/luxury_room1.jpg"
import ordinary_single_7 from "./images/rooms/single_cot_mini.jpeg"
import luxury_single_11 from "./images/rooms/luxury_single.jpg"
import deluxe_single_8 from "./images/rooms/single_cot1.jpg"
import deluxe_single_9 from "./images/rooms/single_cot2.jpg"
import luxury_single_8 from "./images/rooms/luxury_room2.jpg"
import deluxe_double_3 from "./images/rooms/triple_cot1.jpg"
import luxury_single_10 from "./images/rooms/luxury_room4.jpg"



 
 const allRoomData = [
    {
        "id" : 1,
        "name" : "Deluxe room",
        "image" : deluxe_single_1,
        "address" : "No.133, Wall tax main road, Near Central railway station, Chennai",
        "rating" : 3.2,
        "place" : "chennai",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 2,
        "name" : "Compact Deluxe room",
        "image" : ordinary_single_1,
        "address" : "No.111, Vivekanandar main road, Chamrajpura, Mysore",
        "rating" : 3.7,
        "place" : "mysore",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 649,
        "offer" : null,
        "addInfo" : "+₹76 taxes & fees per room per night"
    },
    {
        "id" : 3,
        "name" : "Ordinary Room",
        "image" : ordinary_triple_1,
        "address" : "No.74, Kamarajar salai, Madurai",
        "rating" : 4.0,
        "place" : "madurai",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 479,
        "offer" : 0,
        "addInfo" : "+₹59 taxes & fees per room per night"
    },
    {
        "id" : 4,
        "name" : "Deluxe room",
        "image" : deluxe_single_2,
        "address" : "No.42, Near Coimbatore railway station, Coimbatore",
        "rating" : 3.8,
        "place" : "coimbatore",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 5,
        "name" : "Luxury Room",
        "image" : luxury_single_1,
        "address" : "No.805, KH main road, Gandhi puram, Theni",
        "rating" : 4.3,
        "place" : "theni",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 999,
        "offer" : 0,
        "addInfo" : "+₹126 taxes & fees per room per night"
    },
    {
        "id" : 6,
        "name" : "Deluxe room",
        "image" : deluxe_double_1,
        "address" : "No.133, Rajaji nagar , Bangalore",
        "rating" : 4.7,
        "place" : "bangalore",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 7,
        "name" : "Luxury Room",
        "image" : luxury_single_2,
        "address" : "No.63, Near pragadeeshwara temple, Balaganapathy nagar, Thanjavur",
        "rating" : 4.2,
        "place" : "thanjavur",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 999,
        "offer" : 0,
        "addInfo" : "+₹126 taxes & fees per room per night"
    },
    {
        "id" : 8,
        "name" : "Ordinary Room",
        "image" : ordinary_double_1,
        "address" : "No.221, White town, Near Rock beach, Pondicherry",
        "rating" : 4.8,
        "place" : "pondicherry",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 479,
        "offer" : 0,
        "addInfo" : "+₹59 taxes & fees per room per night"
    },
    {
        "id" : 9,
        "name" : "Deluxe room",
        "image" : deluxe_single_3,
        "address" : "No.559, VR high road, Tharamangalam, Salem",
        "rating" : 4.1,
        "place" : "salem",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 10,
        "name" : "Luxury Room",
        "image" : luxury_single_3,
        "address" : "No.951, Near Kamachi amman temple, Kanchipuram",
        "rating" : 4.4,
        "place" : "kanchipuram",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 999,
        "offer" : 0,
        "addInfo" : "+₹126 taxes & fees per room per night"
    },
    {
        "id" : 11,
        "name" : "Deluxe room",
        "image" : deluxe_single_4,
        "address" : "No.133, Wall tax main road, Near Central railway station, Chennai",
        "rating" : 3.2,
        "place" : "chennai",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 12,
        "name" : "Ordinary Room",
        "image" : ordinary_single_2,
        "address" : "No.221, White town, Near Rock beach, Pondicherry",
        "rating" : 4.8,
        "place" : "pondicherry",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 479,
        "offer" : 0,
        "addInfo" : "+₹59 taxes & fees per room per night"
    },
    {
        "id" : 13,
        "name" : "Ordinary Room",
        "image" : ordinary_double_2,
        "address" : "No.111, Vivekanandar main road, Chamrajpura, Mysore",
        "rating" : 3.7,
        "place" : "mysore",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 479,
        "offer" : 0,
        "addInfo" : "+₹59 taxes & fees per room per night"
    },
    {
        "id" : 14,
        "name" : "Luxury Room",
        "image" : luxury_single_4,
        "address" : "No.42, Near Coimbatore railway station, Coimbatore",
        "rating" : 3.8,
        "place" : "coimbatore",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 999,
        "offer" : 0,
        "addInfo" : "+₹126 taxes & fees per room per night"
    },
    {
        "id" : 15,
        "name" : "Ordinary Room",
        "image" : ordinary_single_3,
        "address" : "No.133, Rajaji nagar , Bangalore",
        "rating" : 4.7,
        "place" : "bangalore",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 479,
        "offer" : 0,
        "addInfo" : "+₹59 taxes & fees per room per night"
    },
        {
        "id" : 16,
        "name" : "Luxury Room",
        "image" : luxury_single_5,
        "address" : "No.805, KH main road, Gandhi puram, Theni",
        "rating" : 4.3,
        "place" : "theni",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 999,
        "offer" : 0,
        "addInfo" : "+₹126 taxes & fees per room per night"
    },
    {
        "id" : 17,
        "name" : "Deluxe room",
        "image" : deluxe_single_5,
        "address" : "No.63, Near pragadeeshwara temple, Balaganapathy nagar, Thanjavur",
        "rating" : 4.2,
        "place" : "thanjavur",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 18,
        "name" : "Deluxe room",
        "image" : deluxe_single_6,
        "address" : "No.951, Near Kamachi amman temple, Kanchipuram",
        "rating" : 4.4,
        "place" : "kanchipuram",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 19,
        "name" : "Ordinary Room",
        "image" : ordinary_single_4,
        "address" : "No.111, Vivekanandar main road, Chamrajpura, Mysore",
        "rating" : 3.7,
        "place" : "mysore",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 479,
        "offer" : 0,
        "addInfo" : "+₹59 taxes & fees per room per night"
    },
    {
        "id" : 20,
        "name" : "Deluxe room",
        "image" : deluxe_double_2,
        "address" : "No.559, VR high road, Tharamangalam, Salem",
        "rating" : 4.1,
        "place" : "salem",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 21,
        "name" : "Luxury Room",
        "image" : luxury_single_6,
        "address" : "No.133, Wall tax main road, Near Central railway station, Chennai",
        "rating" : 3.2,
        "place" : "chennai",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 999,
        "offer" : null,
        "addInfo" : "+₹126 taxes & fees per room per night"
    },
    {
        "id" : 22,
        "name" : "Ordinary Room",
        "image" : ordinary_single_5,
        "address" : "No.42, Near Coimbatore railway station, Coimbatore",
        "rating" : 3.8,
        "place" : "coimbatore",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 479,
        "offer" : 0,
        "addInfo" : "+₹59 taxes & fees per room per night"
    },
    {
        "id" : 23,
        "name" : "Luxury Room",
        "image" : luxury_single_9,
        "address" : "No.805, KH main road, Gandhi puram, Theni",
        "rating" : 4.3,
        "place" : "theni",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 999,
        "offer" : 0,
        "addInfo" : "+₹126 taxes & fees per room per night"
    },
    {
        "id" : 24,
        "name" : "Deluxe room",
        "image" : deluxe_single_7,
        "address" : "No.133, Rajaji nagar , Bangalore",
        "rating" : 4.7,
        "place" : "bangalore",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 25,
        "name" : "Ordinary Room",
        "image" : ordinary_single_6,
        "address" : "No.559, VR high road, Tharamangalam, Salem",
        "rating" : 4.1,
        "place" : "salem",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 479,
        "offer" : 0,
        "addInfo" : "+₹59 taxes & fees per room per night"
    },
    {
        "id" : 26,
        "name" : "Luxury Room",
        "image" : luxury_single_7,
        "address" : "No.74, Kamarajar salai, Madurai",
        "rating" : 4.0,
        "place" : "madurai",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 999,
        "offer" : 0,
        "addInfo" : "+₹126 taxes & fees per room per night"
    },
    {
        "id" : 27,
        "name" : "Ordinary Room",
        "image" : ordinary_single_7,
        "address" : "No.221, White town, Near Rock beach, Pondicherry",
        "rating" : 4.8,
        "place" : "pondicherry",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 479,
        "offer" : 0,
        "addInfo" : "+₹59 taxes & fees per room per night"
    },
    {
        "id" : 28,
        "name" : "Luxury Room",
        "image" : luxury_single_11,
        "address" : "No.63, Near pragadeeshwara temple, Balaganapathy nagar, Thanjavur",
        "rating" : 4.2,
        "place" : "thanjavur",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 999,
        "offer" : 0,
        "addInfo" : "+₹126 taxes & fees per room per night"
    },
    {
        "id" : 29,
        "name" : "Deluxe room",
        "image" : deluxe_single_8,
        "address" : "No.951, Near Kamachi amman temple, Kanchipuram",
        "rating" : 4.4,
        "place" : "kanchipuram",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 30,
        "name" : "Deluxe room",
        "image" : deluxe_single_9,
        "address" : "No.74, Kamarajar salai, Madurai",
        "rating" : 4.0,
        "place" : "madurai",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 31,
        "name" : "Luxury Room",
        "image" : luxury_single_8,
        "address" : "No.133, Wall tax main road, Near Central railway station, Chennai",
        "rating" : 3.2,
        "place" : "chennai",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 999,
        "offer" : null,
        "addInfo" : "+₹126 taxes & fees per room per night"
    },
    {
        "id" : 32,
        "name" : "Deluxe room",
        "image" : deluxe_double_3,
        "address" : "No.221, White town, Near Rock beach, Pondicherry",
        "rating" : 4.8,
        "place" : "pondicherry",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 789,
        "offer" : null,
        "addInfo" : "+₹83 taxes & fees per room per night"
    },
    {
        "id" : 33,
        "name" : "Luxury Room",
        "image" : luxury_single_10,
        "address" : "No.133, Rajaji nagar , Bangalore",
        "rating" : 4.7,
        "place" : "bangalore",
        "ac" : true,
        "wifi" : true,
        "tv" : true,
        "dth" : true,
        "powerBackup" : true,
        "price" : 999,
        "offer" : 0,
        "addInfo" : "+₹126 taxes & fees per room per night"
    }
]

export default allRoomData