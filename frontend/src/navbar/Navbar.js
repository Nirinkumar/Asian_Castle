import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar(){

    return(
        <div className="navbar">
            <div className="navbar-container">
                <p>Asian Castle Hotel</p>
            
                <ul>
                    <Link to="/" className="nav-btn">Home</Link>
                    <Link to="/rooms" className="nav-btn">Rooms</Link>
                    <Link to="/login" className="nav-btn">Login</Link>
                    <Link to="/contact" className="nav-btn">Contact Us</Link>
                </ul>
            </div>
        </div>
    )
}