import React from "react";
import Services from "../../Components/Services/Services";
import PaymentServices from "../../Components/PaymentServices/PaymentServices";
import WhyUs from "../../Components/WhyUs/WhyUs";
import Advantages from "../../Components/Advantages/Advantages";
import Testimonials from "../../Components/Testimonials/Testimonials";
import GetApp from "../../Components/GetApp/GetApp";
import BlogHeader from "../../Components/Blog/BlogHeader";

const Home: React.FC = () => {
  return (
    <>
      <Services />
      <PaymentServices />
      <WhyUs />
      <Advantages />
      <Testimonials />
      <GetApp />
      <BlogHeader />
    </>
  );
};

export default Home;
