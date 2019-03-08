import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import Home from './Home'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'
import Media from './Media'
import About from './About'
import linkedin from '../images/linkedin.png'
import fb from '../images/fb.svg'
import '../css/Main.css';
import medium from '../images/medium.png'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      resume: false,
      projects: false,
      contact: false,
      media: false,
      about: false
    }
  }

  toResume(){
    this.setState({home: false, resume: true, contact: false, projects: false, media: false, about: false})
  }

  toHome(){
    this.setState({home: true, resume: false, contact: false, projects: false, media: false, about: false})
  }

  toContact(){
    this.setState({home: false, resume: false, contact: true, projects: false, media: false, about: false})
  }

  toProjects(){
    this.setState({home: false, resume: false, contact: false, projects: true, media: false, about: false})
  }

  toMedia(){
    this.setState({home: false, resume: false, contact: false, projects: false, media: true, about: false})
  }

  toAbout(){
    this.setState({home: false, resume: false, contact: false, projects: false, media: false, about: true})
  }


  render() {
    return (
      <div className="Background">
        <div className="Main">
          <div className="Main-section-top">
            <p className="Main-title" onClick={() => this.toHome()}>Bailey Siber</p>
            <div className="Nav-bar">
              <p className="Main-nav" onClick={() => this.toAbout()}>About Me</p>
              <p className="Main-nav" onClick={() => this.toResume()}>Resume</p>
              <p className="Main-nav" onClick={() => this.toProjects()}>Projects</p>
              <p className="Main-nav" onClick={() => this.toMedia()}>Media</p>
              <p className="Main-nav" onClick={() => this.toContact()}>Contact</p>
            </div>
          </div>

            {this.state.home ?
              <div>
                <Home />
              </div>
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
            {this.state.media ?
              <Media />
              :
              null
            }
            {this.state.about ?
              <About />
              :
              null
            }
            </div>

          <div className="Icons">
            <a href="https://www.linkedin.com/in/bailey-siber-a0b63abb/">
            <img src={linkedin} className="Link" />
          </a>
          <a href="https://medium.com/@baileysiber37">
          <img src={medium} className="Med" />
        </a>
        <a href="https://www.facebook.com/bailey.siber.5">
        <img src={fb} className="Fb" />
      </a>
    </div>

    <div>
      <p className="bottomTwo">(c) Bailey Siber 2019</p>
    </div>

  </div>
);
}
}

export default Main;
