import "./ContactPageForm.css"

const ContactPageForm = () => {
    return (
        <section className="contact-container" id="contact">
            <header className="contact-header">We'ed love to hear from you.</header>
            <div>
                <form>
                    <div className="contact-div">
                        <input type="text" name="fname" placeholder="First Name" className="contact-input" />
                        <input type="text" name="lname" placeholder="Last Name" className="contact-input" />
                    </div>
                    <div className="contact-div">
                        <input type="email" name="email" id="email" placeholder="Email Address" className="contact-input" />
                    </div>
                    <div className="contact-div">
                        <input type="tel" name="tel" id="tel" placeholder="Phone Number" className="contact-input" />
                    </div>
                    <div className="contact-div">
                        <input type="text" name="bname" placeholder="Business Name" className="contact-input" />
                    </div>
                    <div className="contact-div">
                        <input type="text" name="message" placeholder="Message" className="contact-input" />
                    </div>
                    <div className="contact-inline-container">
                        <input type="checkbox" name="ppolicy" id="ppolicy" />
                        <p>I agree to Cedarstone Ltd. processing my data in accordance with the <a href="">Privacy Poicy</a></p>
                    </div>
                    <button type="submit" className="contact-button">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default ContactPageForm