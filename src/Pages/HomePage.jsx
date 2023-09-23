import HomePageHero from "../PageComponents/HomePage/HomePageHero"
import HomePageSection from "../PageComponents/HomePage/HomePageSection"
import HomePageTestimonials from "../PageComponents/HomePage/HomePageTestimonials"
import CTA from "../UI/CTA"
import HomePagePartners from "../PageComponents/HomePage/HomePagePartners"
import Footer from "../UI/Footer"


const HomePage = () => {
    return (
        <>
            <HomePageHero />
            <HomePageSection />
            <HomePageTestimonials />
            <CTA />
            <HomePagePartners />
            <Footer />
        </>
    )
}

export default HomePage