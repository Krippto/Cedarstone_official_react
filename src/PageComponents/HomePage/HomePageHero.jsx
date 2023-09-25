import Navbar from "../../UI/Navbar"
import "./HomePageHero.css"

const HomePageHero = () => {
    return (
        <div class="home-hero">
            <Navbar />
            <div className="home-hero-container">
                <header class="home-hero-header">Unlocking Logistics Excellence</header>
                <p class="home-hero-text">At Cedarstone, we bring innovation and efficiency to logistics
                    consultancy, serving businesses across Mauritius, Indian Ocean, and East
                    Africa.</p>
                <div class="home-hero-buttons">
                    <button class="home-hero-yellow">Explore our Services</button>
                    <button class="home-hero-cyan">Book a call</button>
                </div>
            </div>
        </div>
    )
}

export default HomePageHero