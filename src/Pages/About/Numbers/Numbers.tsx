import React from 'react'
import imageplaceholder from "../../../assets/imageplaceholder.png"
// import "../About.css";
// import "../../../Components/PaymentServices/PaymentServices.css";

const Numbers:React.FC = () => {
  return (
    <section className='section'>
      <div className="payment-services about-div">
        <div className="about-text">
          <div className="about-text-flex">
            <div className="numbers-flex">
              <p className="numbers">5</p>
              <p>Years Experience</p>
            </div>
            <div className="numbers-flex">
              <p className="numbers">50M</p>
              <p>Apps Download</p>
            </div>
          </div>
          <div className="about-text-flex">
            <div className="numbers-flex">
              <p className="numbers">50</p>
              <p>Trusted Partners</p>
            </div>
            <div className="numbers-flex">
              <p className="numbers">10k</p>
              <p>Powered Merchants</p>
            </div>
          </div>
        </div>
        <div className="img-placeholder">
          <img src={imageplaceholder} alt="" className="placeholder" />
        </div>
      </div>
    </section>
  );
}

export default Numbers;
