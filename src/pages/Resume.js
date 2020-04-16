import React, { Component } from 'react';
import Iframe from 'react-iframe'
import '../css/Resume.css';
import BaileySiberResume from '../BaileySiberResume2020.pdf'

class Resume extends Component {

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
        <div className="resumeContainer">

          <iframe title="resume" width="400" height="600" src={BaileySiberResume} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

          <a className="Button" download href={BaileySiberResume}>download</a>

        </div>
      )
    }

    else {
      return (
        <div className="resumeContainer">

          <iframe title="resume" width="800" height="700" src={BaileySiberResume} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

          <a className="Button" download href={BaileySiberResume}>download</a>

        </div>
      )
    }
  }
}

export default Resume;
