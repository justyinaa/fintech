import React from "react";
import call from "../../assets/call.png"
import message from "../../assets/email@2x.png"
import location from "../../assets/Location-2.png"
import "./Form.css"

interface Column {
  cols: number;
  rows: number;
}

const columns: Column[] = [
  {
    cols: 47,
    rows: 10,
  },
];

const ContactForm: React.FC = () => {
  return (
    <section className="section">
      <div className="contact-us">
        <div className="form">
          <form action="">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className="form-input"
            />

            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              className="form-input"
            />

            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="form-input"
            />

            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Send message"
              cols={columns[0].cols}
              rows={columns[0].rows}
              className="form-textarea"
            />

            <button className="button form-button">Send Message</button>
          </form>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </p>
          <div className="contact-flex">
            <div>
              <img src={location} alt="location" className="contact-img" />
            </div>
            <div>
              <h4>Heade Office</h4>
              <p>8819 Ohio St. South Gate, </p>
              <p>California 90280</p>
            </div>
          </div>
          <div className="contact-flex">
            <div>
              <img src={message} alt="message" className="contact-img" />
            </div>
            <div>
              <h4>Our Email</h4>
              <p>hello@finteku.com </p>
            </div>
          </div>
          <div className="contact-flex">
            <div>
              <img src={call} alt="call" className="contact-img" />
            </div>
            <div>
              <h4>Call Center</h4>
              <p>+271 386-647-3637 </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
