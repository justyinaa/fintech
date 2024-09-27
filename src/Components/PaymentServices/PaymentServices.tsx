import React from "react";
import imageplaceholder from "../../assets/imageplaceholder.png";
import "./PaymentServices.css"

const PaymentServices: React.FC = () => {
  return (
    <>
      <section className="section">
        <div className="payment-services">
          <div className="img-placeholder">
            <img src={imageplaceholder} alt="" className="placeholder" />
          </div>
          <div className="payment-text">
            <p className="payment-services-header">
              We Have Fast and Secure Payment Method
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

export default PaymentServices;
