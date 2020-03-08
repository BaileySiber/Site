import React, { Component } from 'react';
import '../css/About.css';
import bailey from '../images/newb.png'


class About extends Component {


  render() {
    return (
      <div className="Container">
          <br/>
          <div className="typewriter"> <h2>it's nice to meet you</h2> </div>
          <div className="aboutBox">
          <img src={bailey} className="Bailey" />
          <div className="aboutBullets">
          <p className="Desc"> I am working to reduce disparities in quality of life and health outcomes by working at the intersections of technology, advocacy, and health.
 </p>
          <p className="Desc"> I am dedicated to seeking justice for survivors of sexual violence </p>
          <p className="Desc"> I am a proud middle eastern american woman in STEM & care deeply about diversity, equity, and retention efforts </p>
          <p className="Desc"> I don't like being surprised, but I love surprising others (hint: click on the clouds on my home page for a sunny treat!) </p>
          </div>
          </div>
      </div>
    )}
  }

  export default About;
