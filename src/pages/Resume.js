import React, { Component } from 'react';
import Iframe from 'react-iframe'
import '../css/Resume.css';
import BaileySiberResume from '../BaileySiberResume.pdf'

class Resume extends Component {
  render() {
    return (
      <div>
        <div>
      

<iframe title="resume" width="700" height="600" src={BaileySiberResume} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

</div>

<br></br>

<a className="Button" download href={BaileySiberResume}>download</a>

</div>
)
}
}

export default Resume;
