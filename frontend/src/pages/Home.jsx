
import "./pages.css"
import home_image1 from "../assets/images/home/room1.jpeg"
import outlook1 from "../assets/images/home/outlook1.jpg"
import room4 from "../assets/images/home/room4.jpg"
import inside_path from "../assets/images/home/inside-path.jpg"
import reception from "../assets/images/home/reception-1.jpg"
import dining from "../assets/images/home/restaurant-dining.png"
import food from "../assets/images/home/food.jpg"
import outlook3 from "../assets/images/home/outlook3.jpg"
import room3 from "../assets/images/home/room3.jpg"




export default function Home(){
    return(
        <div className="home">
            <div className="home-container">
                <div className="home-desc">
                    <p className="text-1">The Best Royal Luxury Hotel</p>
                    <p className="text-2">With Our Proffessional Service</p>
                    <p className="text-3">LUXURY & COMFORT</p>
                    <p>4 star</p>
                    <p>Contact: 044-45674567</p>
                </div>
                <div className="home-image">
                    <img src={home_image1}  />
                </div>
                <div className="home-desc-small">
                    <p className="text-1">The Best Royal Luxury Hotel</p>
                    <p className="text-2">With Our Proffessional Service</p>
                    <p className="text-3">LUXURY & COMFORT</p>
                    <p>4 star</p>
                    <p>Contact: 044-45674567</p>
                </div>
            </div>

            <div className="home-content">
                <div className="side-bar">
                    <div className="locations">
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
                    <div className="services">
                        <p>All Facilities</p>
                        <ul>
                            <li>Food Services</li>
                            <li>Free Parking</li>
                            <li>Free Wifi</li>
                            <li>AC Rooms</li>
                            <li>Professional Staff</li>
                            <li>Dining</li>
                            <li>Room Services</li>
                            <li>Instant Response</li>
                            <li>High Securities</li>
                            <li>International Cusins</li>
                        </ul>
                    </div>
                </div>
                
                <div className="hotel-images">
                    <img src={outlook1}  />
                    <img src={room4}  />
                    <img src={inside_path}  />
                    <img src={reception}  />
                    <img src={dining}  />
                    <img src={food}  />
                    <img src={outlook3}  />
                    <img src={room3}  />
                    
                </div>
            </div>

            <div className="footer">

            </div>  
        </div>
    )
}