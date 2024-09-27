import React from 'react'
import "../../Components/PaymentServices/PaymentServices.css"
import "./About.css"
import AboutUs from './AboutUs/AboutUs'
import Numbers from './Numbers/Numbers'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Achievements from './Achievements/Achievements'

const About:React.FC = () => {
  return (
    <>
      <AboutUs />
      <Numbers />
      <Testimonials />
      <Achievements />
    </>
  );
}

export default About
