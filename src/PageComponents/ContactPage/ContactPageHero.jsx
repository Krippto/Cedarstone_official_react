import Navbar from "../../UI/Navbar"
import "./ContactPageHero.css"

const ContactPageHero = () => {
    return (
        <div className="hero">
            <Navbar />
            <p className="hero-text">
                Have questions or interested in our services? Reach out to us!
            </p>
            <div className="hero-buttons">
                <button className="yellow-button"><a href="#contact" className="contact-hyperlink">Get in Touch</a></button>
                <button className="cyan-button">Book a call</button>
            </div>
        </div>
    )
}

export default ContactPageHero