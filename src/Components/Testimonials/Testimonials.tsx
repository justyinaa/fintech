import React from "react";
import placeholder from "../../assets/placeholder.png";
import imgplaceholder from "../../assets/imageplaceholder.png";
import "./Testimonials.css";

const Testimonials: React.FC = () => {
  return (
    <section className="section testimonial-section">
      <div className="testimonials-container">
        <h3>What They Say About Our App</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          architecto odit nostrum sequi, qui eum exercitationem, fuga culpa
          voluptatibus libero similique modi quam quaerat facere illum, corporis
          et est quod!
        </p>
        <div className="testimonials">
          <div>
            <img src={placeholder} alt="placeholder" className="testimonials-img" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              maxime?
            </p>
            <p className="name">Jack Anderson</p>
            <p>Business Owner</p>
          </div>
        </div>
        <div className="testimonials">
          <div>
            <img src={placeholder} alt="placeholder" className="testimonials-img" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              maxime?
            </p>
            <p className="name">Jack Anderson</p>
            <p>Business Owner</p>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src={imgplaceholder} alt="" className="placeholder" />
      </div>
    </section>
  );
};

export default Testimonials;
