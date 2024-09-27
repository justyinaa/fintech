import React from "react";
import iphone from "../../assets/iphone.png";
import services from "../../assets/services.png";
import "./Advantages.css"

interface Items {
  image: string;
  header: string;
  text: string;
}

const advantagesItems: Items[] = [
  {
    image: services,
    header: "Fast",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.",
  },
  {
    image: services,
    header: "Secure",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.",
  },
  {
    image: services,
    header: "User-Friendly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.",
  },
  {
    image: services,
    header: "24/7 Support",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.",
  },
];

const Advantages: React.FC = () => {
  return (
    <section className="section">
      <div className="advantages-div">
        <div className="phone-div">
          <img src={iphone} alt="phone-img" />
        </div>
        <div className="all-advantages">
          <h3>All Advantages in One</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {advantagesItems.map((item, index) => (
            <div className="advantages">
              <div className="services-img-div">
                <img
                  src={item.image}
                  key={index}
                  alt="services-img"
                  className="services-img"
                />
              </div>
              <div>
                <p className="advantages-header">{item.header}</p>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
