import Navbar from "../../UI/Navbar"
import "./HomePageHero.css"

const HomePageHero = () => {
    return (
        <div class="hero">
            <Navbar />
            <header class="hero-header">Unlocking Logistics Excellence</header>
            <p class="hero-text">At Cedarstone, we bring innovation and efficiency to logistics
                consultancy, serving businesses across Mauritius, Indian Ocean, and East
                Africa</p>
            <div class="hero-buttons">
                <button class="yellow-button">Explore our Services</button>
                <button class="cyan-button">Book a call</button>
            </div>
        </div>
    )
}

export default HomePageHero