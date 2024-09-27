// components/Hero.tsx

import "./Hero.css";
import iphone from "../../assets/iphone.png";
import companylogo from "../../assets/companylogo.png";
import { useLocation } from "react-router-dom";

interface CompanyLogo {
  image: string;
}

const companyLogo: CompanyLogo[] = [
  { image: companylogo },
  { image: companylogo },
  { image: companylogo },
  { image: companylogo },
  { image: companylogo },
  { image: companylogo },
  { image: companylogo },
  { image: companylogo },
];

const Hero: React.FC = () => {
  const location = useLocation();
  const url = location.pathname;



  const getTitleAndText = () => {
    console.log("Current URL:", url);

    if (url === "/") {
      return {
        title: "New way to do",
        subtitle: "Payment Method",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        isTitlePurple: true,
        isSubtitlePurple: false,
      };
    } else if (url === "/service") {
      console.log("Rendering for /service");
      return {
        title: "Easy Payment",
        subtitle: "In One App",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        isTitlePurple: false,
        isSubtitlePurple: true,
      };
    } else if (url === "/about") {
      console.log("Rendering for /about");
      return {
        title: "We Have Secure",
        subtitle: "Payment Method",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        isTitlePurple: true,
        isSubtitlePurple: false,
      };
    } else if (url === "/contact") {
      return {
        title: "Get in Touch",
        subtitle: "With Us",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        isTitlePurple: false,
        isSubtitlePurple: true,
      };
    } else {
      console.log("Rendering for default case");
      return {
        title: "New way to do",
        subtitle: "Payment Services",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        isTitlePurple: true,
        isSubtitlePurple: false,
      };
    }
  };

  const { title, subtitle, text, isTitlePurple, isSubtitlePurple } =
    getTitleAndText();
  console.log("isTitlePurple:", isTitlePurple);
  console.log("isSubtitlePurple:", isSubtitlePurple);

  return (
    <section className="section hero">
      <div className="hero-content">
        <h1
          className={`hero-title ${
            isTitlePurple ? "black-text" : "purple-text"
          }`}
        >
          {title}{" "}
          <br />
          <span
            className={`payment-method ${
              isSubtitlePurple ? "black-text" : "purple-text"
            }`}
          >
            {subtitle}
          </span>
        </h1>
        <p className="hero-text">{text}</p>

        {url === "/" && (
          <>
            <div className="hero-buttons">
              <button className="button download-button">Download</button>
              <button className="button learn-more-button">Learn More</button>
            </div>
            <div className="company-logos">
              {companyLogo.map((item, index) => (
                <img
                  src={item.image}
                  key={index}
                  alt="Company logo"
                  className="company-logo"
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="hero-image">
        <img src={iphone} alt="Phone" />
      </div>
    </section>
  );
};

export default Hero;
