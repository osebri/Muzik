import React from 'react'
import "./About.css"
import myImage from '../files/omar.jpg'
import Header from '../components/Header'
function About() {
  return (
    <><Header /><div class="about-container">
          <img src={myImage} alt="Your Picture" class="about-image" />
          <div class="about-text">
              <h2>About Me</h2>
              <p>Hi! My name is Omar, I created this website to sharpen my web development skills and also
                show my love for music, this site is still under development, for features like making the website
                responsive, workking on design and also the search bar, the backend is still currently fragile however
                if executed properly this site can work for you on your computer.
                The tools for front end include ReactJS and CSS while the tools for the backend include node, express
                mongoDB, mongoose, cors and nodemon.
              </p>
          </div>
      </div></>
  )
}

export default About