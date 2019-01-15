import React, { Component } from 'react';
import '../css/About.css';
import bailey from '../images/newb.png'


class About extends Component {


  render() {
    return (
      <div className="Container">
          <hr className="Line"/>
          <br/>
          <div className="typewriter"> <h1>Hi, it's nice to meet you!</h1> </div>
          <br/>
          <br/>
          <div className="aboutBox">
          <img src={bailey} className="Bailey" />
          <div className="aboutBullets">
          <p className="DescOne"><strong>Here's what you need to know about me:</strong></p>
          <p className="DescTwo"> - I strive to make a higher quality of life more accessible by working at the intersections of technology, advocacy, and health </p>
          <p className="DescTwo"> - I am dedicated to seeking justice for survivors of sexual violence </p>
          <p className="DescTwo"> - I am a proud middle eastern american woman in STEM & care deeply about making the field more inclusive </p>
          <p className="DescTwo"> - I love to volunteer, sing, & hike whenever possible </p>
          <p className="DescTwo"> - I don't like being surprised, but I love surprising others (hint: click on the clouds on my home page for a sunny treat!) </p>
          </div>
          </div>
          <br/>
          <hr className="Line"/>
      </div>
    )}
  }

  export default About;
