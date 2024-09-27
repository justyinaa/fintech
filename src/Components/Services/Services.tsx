import React from "react";
import services from "../../assets/services.png";
import "./Services.css";
const Services: React.FC = () => {
  return (
    <>
      <section className="section services">
        <div className="card service-card">
          <div className="service-img-div">
            <img src={services} alt="" className="services-img" />
          </div>
          <div className="services-text-div">
            <p className="services-text-bold">Payment in Store</p>
            <p className="services-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
              veniam!{" "}
            </p>
          </div>
        </div>
        <div className="card service-card">
          <div className="service-img-div">
            <img src={services} alt="" className="services-img" />
          </div>
          <div className="services-text-div">
            <p className="services-text-bold">Payment in Store</p>
            <p className="services-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
              veniam!{" "}
            </p>
          </div>
        </div>
        <div className="card service-card">
          <div className="service-img-div">
            <img src={services} alt="" className="services-img" />
          </div>
          <div className="services-text-div">
            <p className="services-text-bold">Payment in Store</p>
            <p className="services-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
              veniam!{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
