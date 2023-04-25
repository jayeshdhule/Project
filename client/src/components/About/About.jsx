import React from 'react';

import Img1 from "../About/About_img/AkshaThamke.jpg"
import Img2 from "../About/About_img/JayeshDhule.jpeg"
// import Img3 from "../About/About_img/MayurWaghmare.jpeg"
import "./About.scss";

const About = () => {
  
    return(
        <div className='about'>
        <header>
      <h1>About Us</h1>
    </header>
    <main>
      <section>
        <h2>Our Story</h2>
        <p>We are a platform designed to connect people from all over the world. Our goal is to create a space where individuals can express themselves freely and connect with others who share similar interests.

          We believe that Quotify should be a place where people feel safe and supported, which is why we have implemented strict policies to ensure that our community is free from hate speech, discrimination, and other harmful content.
          
          Our team is made up of dedicated individuals who are passionate about creating a positive social media experience. We work tirelessly to develop new features and improve our platform to make it the best it can be.
          
          We value transparency and are committed to keeping our users informed about any updates or changes to our policies. We believe that by working together, we can create a welcoming and inclusive community for all.
          
          Thank you for joining us on this journey, and we look forward to connecting with you!</p>
      </section>
      <section>
        <h2>Our Team</h2>
        <ul>
          <li>
            <img src={Img1} alt="Team Member 1"/>
            <h3>Akasha A. Thamke</h3>
            <p>Group Leader</p>
          </li>
          <li>
            <img src={Img2} alt="Team Member 2"/>
            <h3>Jayesh R. Dhule</h3>
            <p>Member</p>
          </li>
          <li>
            {/* <img src={Img3} alt="Team Member 3"/> */}
            <h3>Mayur Waghmare</h3>
            <p>Member</p>
          </li>
        </ul>
      </section>
    </main>
    <p style={{color:"grey"}}>&copy; 2023, Quotify</p>
    
  </div>
  
    )
    };



export default About;