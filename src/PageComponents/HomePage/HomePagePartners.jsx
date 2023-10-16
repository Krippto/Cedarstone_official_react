import "./HomePagePartners.css"
import adani from "../../assets/adani.jpg"
// import glovo from "../../assets/glovo.png"
// import takealot from "../../assets/takealot.png"
// import zipline from "../../assets/zipline.png"

const HomePagePartners = () => {
    return (
        <section>
            <header className="partner-header">Our Partners</header>
            <p className="partner-text">Powering Progress Together</p>
            <p className="partner-text">Our Trusted Collaborations in Logistics innovation</p>
            <div className="partner-container">
                {/* <div className="partner-pic"></div> */}
                {/* <div className="partner-pic"></div> */}
                <img src={adani} alt="adani company logo" loading="lazy" className="partner-pic"/>
                <img src={adani} alt="adani company logo" loading="lazy" className="partner-pic"/>
                <img src={adani} alt="adani company logo" loading="lazy" className="partner-pic"/>
                <img src={adani} alt="adani company logo" loading="lazy" className="partner-pic"/>
            </div>
        </section>
    )
}

export default HomePagePartners