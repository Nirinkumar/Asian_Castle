import React from 'react'
import "./pages.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCarBattery, faSatelliteDish, faSnowflake, faStar, faTv, faWifi } from '@fortawesome/free-solid-svg-icons'

export default function RoomCard(props) {
  return (
    <div className='room-div'>
    <div className='room-card'>

      <div className='image-container'>
        <img src={props.image} alt='' />
      </div>
 
      <div className='room-details'>
        <p className='room-name'>{props.name}</p>
        <p className='room-address'>{props.address}</p>
        <p className="room-rating">{props.rating}<FontAwesomeIcon icon={faStar} className="star-icon-room"/></p>
        <ul className="amenities">
            <li><FontAwesomeIcon icon={faSnowflake} /> AC</li>
            <li><FontAwesomeIcon icon={faWifi} /> Free Wifi</li>
            <li><FontAwesomeIcon icon={faTv} /> TV</li>
            <li><FontAwesomeIcon icon={faSatelliteDish} /> DTH</li>
            <li><FontAwesomeIcon icon={faCarBattery} /> Power Backup</li>
        </ul>
        <p className='room-price'>Price: ₹{props.price}/- {props.offer}</p>
        <p className="add-info">{props.addInfo}</p>
        <button>View Details</button>
        <button>Book Now</button>
      </div>
    </div>
    <hr />
    </div>
  )
}
