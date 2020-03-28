import React, { Component } from 'react';
import Iframe from 'react-iframe'
import '../css/Resume.css';
import BaileySiberResume from '../BaileySiberResume2020.pdf'

class Resume extends Component {
  render() {
    return (
      <div className="Container">

      <iframe title="resume" width="900" height="700" src={BaileySiberResume} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

      <a className="Button" download href={BaileySiberResume}>download</a>

      </div>
    )
  }
}

export default Resume;
