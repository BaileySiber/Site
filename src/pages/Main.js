import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import Cityscape from './Cityscape'
import Info from './Info'
import linkedin from '../images/linkedinlogo.png'
import sig from '../images/signature.png'
import newb from '../images/fifi.png'
import '../css/Main.css';
import gmail from '../images/gmail.png'

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Main">

        <div className="mainTop">
        <img src={newb} className='B'/>
        </div>

        <Info />


     <div className="Icons">
          <a href="https://www.linkedin.com/in/bailey-siber-a0b63abb/">
          <img src={linkedin} className="Link" />
        </a>
        <a href="mailto:baileysiber37@gmail.​com">
        <img src={gmail} className="Gmail" />
      </a>
    </div>

  </div>
);
}
}

export default Main;
