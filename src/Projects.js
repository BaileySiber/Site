import React, { Component } from 'react';
import './Projects.css';


class Projects extends Component {

  render() {
    return (
      <div>
        <div className="Home-section">
          <hr className="Line"/>
          <p></p>
          <p></p>
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
          <p></p>


<iframe title="slackbot" width="560" height="315" src="https://www.youtube.com/embed/acwEWRaiVmE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


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
