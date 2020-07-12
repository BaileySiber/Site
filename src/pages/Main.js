import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import Cityscape from './Cityscape'
import Info from './Info'
import linkedin from '../images/linkedin.png'
import sig from '../images/signature.png'
import newb from '../images/b.png'
import '../css/Main.css';
import medium from '../images/medium.png'

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Main">

        <div className="mainTop">
        <img className="mainTitle" src={sig} />
        <img src={newb} className='B'/>
        </div>

        <Info />

        <Cityscape />


        {/* <div className="Icons">
          <a href="https://www.linkedin.com/in/bailey-siber-a0b63abb/">
          <img src={linkedin} className="Link" />
        </a>
        <a href="https://medium.com/@baileysiber37">
        <img src={medium} className="Med" />
      </a>
    </div> */}

    {/* <div>
      <p className="Bottom">(c) bailey siber 2020</p>
    </div> */}

  </div>
);
}
}

export default Main;
