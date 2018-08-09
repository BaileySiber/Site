import React, { Component } from 'react';
import './Home.css';
import mts from './mts.jpg'


class Home extends Component {
  render() {
    return (

      <div>

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
            <button className="Button" onClick={this.props.resume}> resume </button>
            <button className="Button"> news </button>
            <button className="Button"> projects </button>
            <button className="Button"> contact </button>
          </div>

      </div>

    )}
  }

  export default Home;
