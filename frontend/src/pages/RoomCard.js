import React from 'react'
import "./pages.css"

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
        <p className="room-rating">{props.rating} star</p>
        <ul className="amenities">
            <li>AC</li>
            <li>Free Wifi</li>
            <li>TV</li>
            <li>DTH</li>
            <li>Power Backup</li>
        </ul>
        <p className='room-price'>Price: ₹{props.price}/- ({props.offer})</p>
        <p className="add-info">{props.addInfo}</p>
        <button>View Details</button>
        <button>Book Now</button>
      </div>
    </div>
    <hr />
    </div>
  )
}
