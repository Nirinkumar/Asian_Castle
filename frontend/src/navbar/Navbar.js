import { Link } from "react-router-dom"
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){

    return(
        <div className="navbar">
            <div className="navbar-container">
                <p>Asian Castle Hotel</p>
            
                <div className="menu">
                    <Link to="/" className="nav-btn">Home</Link>
                    <Link to="/rooms" className="nav-btn">Rooms</Link>
                    <Link to="/login" className="nav-btn">Login</Link>
                    <Link to="/contact" className="nav-btn">Contact Us</Link>
                </div>
                <div className="menu-icon">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className="side-navbar">
                <div className="side-close">
                    <FontAwesomeIcon icon={faX} className="side-bar-close" title="close" />
                </div>
                
                <div className="side-menu">
                    <Link to="/" className="side-nav-btn side-home">Home</Link>
                    <Link to="/rooms" className="side-nav-btn">Rooms</Link>
                    <Link to="/login" className="side-nav-btn">Login</Link>
                    <Link to="/contact" className="side-nav-btn">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}