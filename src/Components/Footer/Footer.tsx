import React from "react";
import footerlogo from "../../assets/footerlogo.png";
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <section className="section footer">
      <div className="footer-div">
        <div className="footer-div1">
          <img src={footerlogo} alt="" className="logo" />
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p>Made Remotely By Justina Ominisan. Copyright 2024</p>
        </div>
        <div className="footer-div2">
          <div>
            <h4>Product</h4>
            <p>Android Version</p>
            <p>IOS Version</p>
            <p>Web Service</p>
          </div>
          <div>
            <h4>About</h4>
            <p>Blog</p>
            <p>News Letter</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h4>Company</h4>
            <p>Career</p>
            <p>FAQ</p>
            <p>Support</p>
            <p>Terms of Service</p>
          </div>
          <div>
            <h4>Social Media</h4>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
