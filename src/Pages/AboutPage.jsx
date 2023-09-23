import AboutPageHero from "../PageComponents/AboutPage/AboutPageHero"
import AboutPageStory from "../PageComponents/AboutPage/AboutPageStory"
import AboutPageLegacy from "../PageComponents/AboutPage/AboutPageLegacy"
import AboutPageSection from "../PageComponents/AboutPage/AboutPageSection"
import CTA from "../UI/CTA"
import Footer from "../UI/Footer"


const AboutPage = () => {
    return (
        <>
            <AboutPageHero />
            <AboutPageStory />
            <AboutPageLegacy />
            <AboutPageSection />
            <CTA />
            <Footer />
        </>
    )
}

export default AboutPage