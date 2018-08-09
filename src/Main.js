import React, { Component } from 'react';
import Home from './Home'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'
import linkedin from './linkedin.png'
import fb from './fb.svg'
import './Main.css';
import medium from './medium.png'


class Main extends Component {
  constructor(props) {
  super(props);
  this.state = {
    home: true,
    resume: false,
    projects: false,
    contact: false
  }
}


toResume(){
  this.setState({home: false, resume: true, contact: false, projects: false})
}

toHome(){
  this.setState({home: true, resume: false, contact: false, projects: false})
}

toContact(){
  this.setState({home: false, resume: false, contact: true, projects: false})
}

toProjects(){
  this.setState({home: false, resume: false, contact: false, projects: true})
}


  render() {
    return (
      <div className="Background">
        <div className="Main">
          <div className="Main-section-top">
            <p className="Main-title" onClick={() => this.toHome()}>bailey siber</p>
            <div className="Nav-bar">
            <p className="Main-nav">about me</p>
            <p className="Main-nav" onClick={() => this.toResume()}>resume</p>
            <p className="Main-nav" onClick={() => this.toProjects()}>projects</p>
            <p className="Main-nav">news</p>
            <p className="Main-nav" onClick={() => this.toContact()}>contact</p>
            </div>
          </div>

          {this.state.home ?
            <Home/>
            :
            null
          }
          {this.state.resume ?
            <Resume />
            :
            null
          }
          {this.state.contact ?
            <Contact />
            :
            null
          }
          {this.state.projects ?
            <Projects />
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
