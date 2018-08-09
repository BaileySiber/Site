import React, { Component } from 'react';
import './Projects.css';


class Projects extends Component {

  render() {
    return (
      <div>
        <div className="Home-section">
          <hr className="Line"/>
          <p></p>
          <a href="https://github.com/BaileySiber/HeadSmart-Frontend">
          <p className="Desc">
            Mental Health App: HeadSmart
          </p>
        </a>
          <p></p>
          <a href="https://github.com/BaileySiber/SassySlacky">
          <p className="Desc">
            Slack Bot: Sassy
          </p>
          </a>
          <p></p>
          <a href="https://github.com/BaileySiber/CouldntShareLess">
          <p className="Desc">
            Google Docs Clone: Couldn't Share Less
          </p>
          </a>
          <p></p>
          <hr className="Line"/>
        </div>
      </div>
    )}
  }

  export default Projects;
