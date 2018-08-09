import React, { Component, Button } from 'react';
import logo from './logo.svg';
import './Main.css';
import mts from './mts.jpg'
import linkedin from './linkedin.png'
import fb from './fb.svg'
import medium from './medium.png'

class Main extends Component {
  render() {
    return (
      <div className="Background">
        <div className="Main">

          <div className="Main-header">
            <div>
              <p className="Main-nav">resume</p>
              <p className="Main-nav">news</p>
              <p className="Main-nav">projects</p>
              <p className="Main-nav">contact</p>
            </div>
            <div>
              <h1 className="Main-title">bailey siber</h1>
            </div>
            <div>
              <p className="hide">hi</p>
            </div>
          </div>

          <img src={mts} className="Mts" />

          <div className="Main-section">
            <hr className="Line"/>
            <p className="Desc">
              I am a recent Summa Cum Laude graduate of Tufts
              University with a Bachelor's in Clinical Psychology,
              Community Health, and Computer Science.
            </p>
            <p className="Desc">
              My interests
              center around women's health, mental health, and
              disparities in access to care based on gender,
              race/ethnicity, and immigration status.
            </p>
            <hr className="Line"/>
            <button className="Button"> resume </button>
            <button className="Button"> news </button>
            <button className="Button"> projects </button>
            <button className="Button"> contact </button>
          </div>
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
