import React, { Component } from 'react';
import '../css/Projects.css';
import git from '../images/git.png';
import ev from '../images/EV.jpg';
import ergbot from '../images/Ergbot.jpg';
import siber from '../images/SiberConsulting.jpg';


class Projects extends Component {

  render() {
    return (
      <div>
        <div className="Home-section">
          <hr className="Line"/>

          <div className="projectBox">
            <div className="header">
              <p className="Desc">
                Freelance Web Design and Development
              </p>
            </div>
            <p className="DescLittle">
              Shoot me a message if you need a personal or business website - charges are sliding scale!
            </p>
          </div>

          <div className="imageRow">
            <img src={ev} className="site" />
            <img src={ergbot} className="site" />
            <img src={siber} className="site" />
          </div>
          <br/>
          <p></p>

          <hr className="LineTwo"/>

          <div className="flexBox">

            <div className="projectBox">
              <div className="header">
                <p className="Desc">
                  Sassy Bot
                </p>
                <a href="https://github.com/BaileySiber/SassySlacky">
                <img src={git} className="git" />
              </a>
            </div>
            <p className="DescMedium">
              A slack bot to schedule reminders and meetings
            </p>
            <p></p>
            <iframe title="slackbot" width="300" height="180" src="https://www.youtube.com/embed/acwEWRaiVmE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p></p>
          </div>


          <div className="projectBox">
            <div className="header">
              <p className="Desc">
                Couldn't Share Less
              </p>
              <a href="https://github.com/BaileySiber/CouldntShareLess">
              <img src={git} className="git" />
            </a>
          </div>
          <p className="DescMedium">
            A clone of Google Docs used for collaborating on documents
          </p>
          <p></p>
          <p></p>
          <iframe width="300" height="180" src="https://www.youtube.com/embed/gnjY_px-JF4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <p></p>
        </div>

      </div>

      <br></br>

      <hr className="Line"/>


      <div className="projectBox">
        <div className="header">
          <p className="Desc">
            Head Smart
          </p>
          <a href="https://github.com/BaileySiber/HeadSmart-Frontend">
          <img src={git} className="git" />
        </a>
      </div>
      <p className="DescMedium">
        Mental health app to help users track and improve their mood overtime
      </p>
      <p className="DescLittle">
        Coming soon - look for us on the app store in 2019!
      </p>
      <p className="DescLittle">
        Please contact me if you are interested in beta testing :)
      </p>
      <br></br>
    </div>

  </div>
</div>
)}
}

export default Projects;