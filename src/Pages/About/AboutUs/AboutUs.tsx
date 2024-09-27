import React from 'react'
import imageplaceholder from "../../../assets/imageplaceholder.png"
// import "../About.css"
// import "../../../Components/PaymentServices/PaymentServices.css"

const AboutUs:React.FC = () => {
  return (
    <section className='section'>
      <div className="payment-services">
        <div className="img-placeholder">
          <img src={imageplaceholder} alt="" className="placeholder" />
        </div>
        <div>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <p className="about-text">Our Vision</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="about-text">Our Mission</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs
