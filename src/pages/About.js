import React, { Component } from 'react';
import '../css/About.css';
import bailey from '../images/newb.png'



class About extends Component {
  constructor() {
    super()
    this.state = {
      width: window.innerWidth
    }
  }

  componentWillMount = () => {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    console.log("width is " + window.innerWidth)
    this.setState({ width: window.innerWidth });
  };



  render() {

    const { width } = this.state;
    const isMobile = width <= 750;

    if (isMobile) {

      return (

        <div className="aboutContainer-mobile">
          <div className="typewriter"> <h2>it's nice to meet you</h2></div>
          <div className="aboutBox-mobile">
            <img src={bailey} className="Bailey-mobile" />
            <div className="aboutBullets-mobile">
              <p className="desc-mobile"> I am working to reduce disparities in quality of life and health outcomes by working at the intersections of technology, advocacy, and health.
              </p>
              <p className="desc-mobile"> I am dedicated to seeking justice for survivors of sexual violence </p>
              <p className="desc-mobile"> I am a proud middle eastern american woman in STEM & care deeply about diversity, equity, and retention efforts </p>
              <p className="desc-mobile"> I don't like being surprised, but I love surprising others (hint: click on the clouds on my home page for a sunny treat!) </p>
            </div>
          </div>
        </div>

      )}

      else {

        return (
          <div className="aboutContainer">
            <div className="typewriter"> <h2>it's nice to meet you</h2></div>
            <div className="aboutBox">
              <img src={bailey} className="Bailey" />
              <div className="aboutBullets">
                <p className="desc"> I am working to reduce disparities in quality of life and health outcomes by working at the intersections of technology, advocacy, and health.
                </p>
                <p className="desc"> I am dedicated to seeking justice for survivors of sexual violence </p>
                <p className="desc"> I am a proud middle eastern american woman in STEM & care deeply about diversity, equity, and retention efforts </p>
                <p className="desc"> I don't like being surprised, but I love surprising others (hint: click on the clouds on my home page for a sunny treat!) </p>
              </div>
            </div>
          </div>
        )}
      }

    }

    export default About;
