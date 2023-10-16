import Navbar from "../../UI/Navbar"
import "./HomePageHero.css"

const HomePageHero = () => {
    return (
        <div className="home-hero">
            <Navbar />
            <div className="home-hero-container">
                <header className="home-hero-header">Unlocking<br />Logistics Excellence</header>
                <p className="home-hero-text">At Cedarstone, we bring innovation and efficiency to logistics
                    consultancy,<br />serving businesses across Mauritius, Indian Ocean, and East
                    Africa.</p>
                <div className="home-hero-buttons">
                    <button className="home-hero-yellow">Explore our Services</button>
                    <button className="home-hero-cyan">Book a call</button>
                </div>
            </div>
        </div>
    )
}

export default HomePageHero