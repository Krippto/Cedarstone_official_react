import { Link } from "react-router-dom"
import logo from "../assets/Cedarstone_Logo_compressed-2-removebg-preview.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar-container">
                <div className="nav-item">
                    <img src={logo} alt="CedarStone logo" loading="lazy" className="navbar-image"/>
                </div>
                <div className="inner-navbar-container">
                    <div><Link to="/" className="nav-list-item">Home</Link></div>
                    <div><Link to="/about" className="nav-list-item">About Us</Link></div>
                    <div><Link to="/features" className="nav-list-item">Features</Link></div>
                    <div className="navbar-blog">Blog</div>
                </div>
                <div >
                    <button className="navbar-button"><Link to="/contact" className="nav-list-item">Get in Touch</Link></button>
                </div>
            </nav>
        </>
    )
}

export default Navbar