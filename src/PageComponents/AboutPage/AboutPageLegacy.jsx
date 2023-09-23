import "./AboutPageLegacy.css"
import logisticRoom from "../../assets/pic4.jpg"

const AboutPageLegacy = () => {
  return (
    <section className="legacy-container">
        <img src={logisticRoom} alt="Stock organized logistics room" className="legacy-image" />
        <div className="legacy-content">
            <header className="legacy-header">Our Legacy and Impact</header>
            <p className="legacy-text">At Cedarstone, we pride ourselves on our rich history and the legacy we've built over
                20 years. Our expertise has been instrumental in reshaping logistics and management practices, making a
                significant impact on businesses and industries.
            </p>
            <p className="legacy-text">From the bustling markets of the African continent to the dynamic economies of the UK
                and India,
                our footprint is evident in the countless success stories we've been a part of.
            </p>
        </div>
    </section>
  )
}

export default AboutPageLegacy