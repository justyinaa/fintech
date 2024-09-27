import React from "react";
import imageplaceholder from "../../../assets/imageplaceholder.png";
import "../../../Components/PaymentServices/PaymentServices.css";

const SendMoney: React.FC = () => {
  return (
    <>
      <section className="section">
        <div className="payment-services">
          <div className="img-placeholder">
            <img src={imageplaceholder} alt="" className="placeholder" />
          </div>
          <div>
            <p className="payment-services-header">
              Send & Recieve Money to Other
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos eaque mollitia et quidem consectetur ea minima omnis,
              ratione voluptate, harum perferendis modi dolorem! A, cum? Quo
              saepe reiciendis ducimus nam?
            </p>
            <button className="button learnMore">Learn More</button>
          </div>
        </div>
        <div className="payment-services">
          <div>
            <p className="payment-services-header">
              Get Easy on Online Payment with Us
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos eaque mollitia et quidem consectetur ea minima omnis,
              ratione voluptate, harum perferendis modi dolorem! A, cum? Quo
              saepe reiciendis ducimus nam?
            </p>
            <button className="button learnMore">Learn More</button>
          </div>
          <div className="img-placeholder">
            <img src={imageplaceholder} alt="" className="placeholder" />
          </div>
        </div>
        <div className="payment-services">
          <div className="img-placeholder">
            <img src={imageplaceholder} alt="" className="placeholder" />
          </div>
          <div>
            <p className="payment-services-header">
              No Need Open Your Wallet in Stores
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos eaque mollitia et quidem consectetur ea minima omnis,
              ratione voluptate, harum perferendis modi dolorem! A, cum? Quo
              saepe reiciendis ducimus nam?
            </p>
            <button className="button learnMore">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SendMoney;
