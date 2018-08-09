import React, { Component } from 'react';
import Home from './Home'
import Resume from './Resume'
import logo from './logo.svg';
import linkedin from './linkedin.png'
import fb from './fb.svg'
import medium from './medium.png'
import me from './me.jpg'

class Main extends Component {
  constructor(props) {
  super(props);
  this.state = {
    home: true,
    resume: false
  }
}

toResume(){
  this.setState({home: false, resume: true})
}

toHome(){
  this.setState({home: true, resume: false})
}


  render() {
    return (
      <div className="Background">
        <div className="Main">

          <div className="Main-header">
            <div className="Nav-bar">
              <p className="Main-nav" onClick={() => this.toResume()}>resume</p>
              <p className="Main-nav">news</p>
              <p className="Main-nav">projects</p>
              <p className="Main-nav">contact</p>
            </div>
            <div>
              <h1 className="Main-title" onClick={() => this.toHome()}>bailey siber</h1>
            </div>
            <div>
              <p className="hide">hi</p>
            </div>
          </div>

          {this.state.home ?
            <Home resume={this.toResume.bind(this)}/>
            :
            null
          }

          {this.state.resume ?
            <Resume />
            :
            null
          }


          <div className="Main-section">
            <a href="https://www.linkedin.com/in/bailey-siber-a0b63abb/">
            <img src={linkedin} className="Icon" />
          </a>
          <a href="https://medium.com/@baileysiber37">
          <img src={medium} className="Icon" />
        </a>
          <a href="https://www.facebook.com/bailey.siber.5">
          <img src={fb} className="Icon" />
        </a>
      </div>
    </div>
  </div>
);
}
}

export default Main;
