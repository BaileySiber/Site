import React, { Component } from 'react';
import './Projects.css';
import git from './git.png';
import ev from './EV.jpg';
import ergbot from './Ergbot.jpg';
import siber from './SiberConsulting.jpg';


class Projects extends Component {

  render() {
    return (
      <div>
        <div className="Home-section">
          <hr className="Line"/>

          <div className="header">
            <p className="Desc">
              Freelance Web Design and Development
            </p>
          </div>

          <br/>

          <p className="DescLittle">
            I love to make personal and business sites - shoot me a message if you are interested - charges are sliding scale!
          </p>

          <br/>

          <div className="imageRow">
            <img src={ev} className="site" />
            <img src={ergbot} className="site" />
            <img src={siber} className="site" />
          </div>

          <br/>

          <p></p>

          <hr className="LineTwo"/>

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

        <br/>

        <p></p>

        <hr className="LineTwo"/>

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


      <iframe title="slackbot" width="560" height="315" src="https://www.youtube.com/embed/acwEWRaiVmE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


      <p></p>

      <hr className="LineTwo"/>



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

    <iframe width="560" height="315" src="https://www.youtube.com/embed/gnjY_px-JF4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    <p></p>


    <hr className="Line"/>
  </div>
</div>
)}
}

export default Projects;
