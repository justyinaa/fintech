import React from "react";
import services from "../../assets/services.png";
import "./WhyUs.css"

const WhyUs: React.FC = () => {
  return (
    <section className="section why-us">
      <h3 className="why-choose-us">Why Choose Us</h3>
      <div className="why-us-div">
        <div className="card">
          <div className="why-us-img">
            <img src={services} alt="" className="services-img" />
          </div>
          <div className="text-div">
            <p className="why-us-text">Be Radically Transparent</p>
            <p className="why-us-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
              veniam!{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <div className="why-us-img">
            <img src={services} alt="" className="services-img" />
          </div>
          <div className="text-div">
            <p className="why-us-text">Be Radically Transparent</p>
            <p className="why-us-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
              veniam!{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <div className="why-us-img">
            <img src={services} alt="" className="services-img" />
          </div>
          <div className="text-div">
            <p className="why-us-text">Be Radically Transparent</p>
            <p className="why-us-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
              veniam!{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
