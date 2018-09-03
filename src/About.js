import React, { Component } from 'react';
import './About.css';
import bailey from './newb.png'


class About extends Component {


  render() {
    return (
      <div className="Container">
          <hr className="Line"/>
          <p className="Desc"><strong>hi, it's nice to meet you!</strong></p>
          <p></p>
            <img src={bailey} className="Bailey" />
          <p className="DescOne"><strong>some things about me...</strong></p>
          <p className="DescTwo"> - i strive to use technology to improve mental health care in a sustainable & accessible manner </p>
          <p className="DescTwo"> - i am dedicated to seeking justice for survivors of sexual violence </p>
          <p className="DescTwo"> - i am a proud middle eastern american woman in STEM & care deeply about making the field more inclusive </p>
          <p className="DescTwo"> - my home city is boston, massachusetts & there is nowhere better in the world</p>
          <p className="DescTwo"> - i love to volunteer, sing, & hike whenever possible </p>
          <p className="DescTwo"> - i don't like being surprised, but i love surprising others (hint: play with the clouds on my home page!) </p>
          <p></p>
          <hr className="Line"/>
      </div>
    )}
  }

  export default About;
