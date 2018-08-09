import React, { Component } from 'react';
import './Home.css';
import building from './buildings.png'


class Home extends Component {
  render() {
    return (
      <div>
        <img src={building} className="Mts" />
        <div className="Home-section">
          <hr className="Line"/>
          <p className="Welcome">
            i'm passionate about the infrastructures of health systems and communities...click around to learn more!
          </p>
          <hr className="Line"/>
        </div>
      </div>
    )}
  }

  export default Home;
