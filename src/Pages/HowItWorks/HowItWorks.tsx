import React from "react";
import video from "../../assets/Video Placeholder.png";
import phone from "../../assets/iphone.png";
import numberone from "../../assets/Number.png";
import numbertwo from "../../assets/Number (1).png"
import numberthree from "../../assets/Number (2).png"
import "./HowItWorks.css"


const HowItWorks: React.FC = () => {
  return (
    <section className="section">
      <div>
        <img src={video} alt="video" />
      </div>
      <div className="how-it-works">
        <div>
          <img src={phone} alt="iphone" />
        </div>
        <div className="how-div">
          <img src={numberone} alt="numberone" className="number" />
          <h3>Open app</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
      <div className="how-it-works">
        <div className="how-div">
          <img src={numbertwo} alt="numberone" className="number" />
          <h3>Pick a Person to Pay</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div>
          <img src={phone} alt="iphone" />
        </div>
      </div>
      <div className="how-it-works">
        <div>
          <img src={phone} alt="iphone" />
        </div>
        <div className="how-div">
          <img src={numberthree} alt="numberone" className="number" />
          <h3>Choose the Amount</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
