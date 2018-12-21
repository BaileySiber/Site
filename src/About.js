import React, { Component } from 'react';
import './About.css';
import bailey from './newb.png'


class About extends Component {


  render() {
    return (
      <div className="Container">
          <hr className="Line"/>
          <p className="Desc"><strong>Hi, it's nice to meet you!</strong></p>
          <p></p>
            <img src={bailey} className="Bailey" />
          <p className="DescOne"><strong>Some things about me...</strong></p>
          <p className="DescTwo"> - I strive to use technology to make higher quality of life more accessible </p>
          <p className="DescTwo"> - I am dedicated to seeking justice for survivors of sexual violence </p>
          <p className="DescTwo"> - I am a proud middle eastern american woman in STEM & care deeply about making the field more inclusive </p>
          <p className="DescTwo"> - I love to volunteer, sing, & hike whenever possible </p>
          <p className="DescTwo"> - I don't like being surprised, but I love surprising others (hint: play with the clouds on my home page!) </p>
          <p></p>
          <hr className="Line"/>
      </div>
    )}
  }

  export default About;
