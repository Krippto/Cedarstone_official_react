import { Link } from "react-router-dom"
import logo from "../assets/Cedarstone_Logo_compressed-2-removebg-preview.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="hero-navbar">
                <div className="hero-navbar-item">
                    <img src={logo} alt="CedarStone logo" loading="lazy"
                        width="110%" />
                </div>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about">About Us</Link></div>
                <div><Link to="/features">Features</Link></div>
                <div>Blog</div>
                <div><button className="yellow-button"><Link to="/contact">Get in Touch</Link></button></div>
            </nav>
        </>
    )
}

export default Navbar