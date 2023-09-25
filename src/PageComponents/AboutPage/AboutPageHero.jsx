import Navbar from "../../UI/Navbar"
import "./AboutPageHero.css"

const AboutPageHero = () => {
    return (
        <div className="hero">
            <Navbar />
            <header className="hero-header">Driving Logistics <br />Transformation</header>
            <div className="hero-buttons">
                <button className="yellow-button"><a href="#story" className="about-hyperlink">Read more</a></button>
            </div>
        </div>
    )
}

export default AboutPageHero