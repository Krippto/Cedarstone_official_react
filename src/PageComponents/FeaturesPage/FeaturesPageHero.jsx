import Navbar from "../../UI/Navbar"
import "./FeaturesPageHero.css"

const FeaturesPageHero = () => {
    return (
        <div className="hero">
            <Navbar />
            <header className="hero-header">Elevate Your Logistics Game</header>
            <div className="hero-buttons">
                <button className="yellow-button"><a href="#story" className="features-hyperlink">Read more</a></button>
            </div>
        </div>
    )
}

export default FeaturesPageHero