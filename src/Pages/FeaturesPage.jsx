import FeaturesPageHero from "../PageComponents/FeaturesPage/FeaturesPageHero"
import FeaturesPageStory from "../PageComponents/FeaturesPage/FeaturesPageStory"
import FeaturesPageTiles from "../PageComponents/FeaturesPage/FeaturesPageTiles"
import FeaturesPageDiscount from "../PageComponents/FeaturesPage/FeaturesPageDiscount"
import CTA from "../UI/CTA"
import Footer from "../UI/Footer"


const FeaturesPage = () => {
    return (
        <>
            <FeaturesPageHero />
            <FeaturesPageStory />
            <FeaturesPageTiles />
            <FeaturesPageDiscount />
            <CTA />
            <Footer />
        </>
    )
}

export default FeaturesPage