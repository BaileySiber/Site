import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactResizeDetector from 'react-resize-detector';
import '../css/Media.css';
import ASAP from '../images/ASAP.jpg';
import EV from '../images/ev2.jpg';
import GCode from '../images/gcode.png';



class Media extends Component {
  constructor() {
    super()
    this.state = {
      width: window.innerWidth
    }
  }

  componentWillMount = () => {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    console.log("width is " + window.innerWidth)
    this.setState({ width: window.innerWidth });
  };


  render() {
    const { width } = this.state;
    const isMobile = width <= 750;

    if (isMobile) {

      return (
        <div>
          <div className="container-mobile">

            <div className="mediaBox-mobile">
              <p className="item-mobile"><strong>Action For Sexual Assault Prevention (ASAP)</strong></p>
              <p className="item-mobile"><a className="link" href="https://tuftsdaily.com/news/2018/04/11/happens-projects-voices-of-sexual-assault-survivors/">Tufts Daily: It Happens Here</a></p>
              <p className="item-mobile"><a className="link" href="https://tuftsdaily.com/news/2017/09/21/oeo-monitor-devos-public-notice-process-sexual-misconduct-policy/">Tufts Daily: Betsy DeVos Proposed Policy</a></p>
              <p className="item-mobile"><a className="link" href="https://tuftsdaily.com/features/2017/11/17/sexual-assault-resources-campus/">Tufts Daily: #MeToo Movement</a></p>
            </div>

            <div className="mediaBox-mobile">
              <p className="item-mobile"><strong>The Every Voice Coalition</strong></p>
              <p className="item-mobile"> <a className="link" href="https://medium.com/@baileysiber37/will-massachusetts-step-up-for-survivors-681c116ae591">Op Ed: Will Massachusetts Step Up for Survivors? </a></p>
              <p className="item-mobile"><a className="link" href="https://tuftsdaily.com/news/2018/04/11/students-gather-support-of-two-sexual-assault-prevention-bills/">Tufts Daily: State House Rally</a></p>
              <p className="item-mobile"><a className="link" href="https://www.bostonglobe.com/ideas/2019/03/01/colleges-won-protect-women-need-laws-that-will/nWP2a2a4ohCLTAspRWsvAO/story.html?fbclid=IwAR3ohQVsY_laa9JCEzKs2e5rnrUrE7U74C8aCkTHg_iE6sc7MlNVk8hw0WI">Boston Globe: Every Voice Summit</a></p>
            </div>

            <div className="mediaBox-mobile">
              <p className="item-mobile"><strong>G|Code</strong></p>
              <p className="item-mobile"><a className="link" href="https://www.steamboston.com/gcode-interview-with-rizel-bobb-semple-bailey-siber/">STEAM: G|Code Interview</a></p>
              <p className="item-mobile"><a className="link" href="https://www.curbed.com/2018/3/22/17153194/girls-code-women-of-color-in-tech-boston">Curbed: G|Code House</a></p>
              <p className="item-mobile"><a className="link" href="https://www.fastcompany.com/40531227/this-old-house-is-being-remade-into-a-springboard-for-minority-women-in-tech">Fast Company: G|Code House</a></p>
            </div>

          </div>
        </div>
      )}

      else {
        return (

          <div>
            <div className="container">

              <div className="mediaContainer">
                <img src={ASAP} className="img" />

                <div className="mediaBox">
                  <p className="item"><strong>Action For Sexual Assault Prevention (ASAP)</strong></p>
                  <p className="item"><a className="link" href="https://tuftsdaily.com/news/2018/04/11/happens-projects-voices-of-sexual-assault-survivors/">Tufts Daily: It Happens Here</a></p>
                  <p className="item"><a className="link" href="https://tuftsdaily.com/news/2017/09/21/oeo-monitor-devos-public-notice-process-sexual-misconduct-policy/">Tufts Daily: Betsy DeVos Proposed Policy</a></p>
                  <p className="item"><a className="link" href="https://tuftsdaily.com/features/2017/11/17/sexual-assault-resources-campus/">Tufts Daily: #MeToo Movement</a></p>
                </div>
              </div>

              <div className="mediaContainer">
                <img src={EV} className="img" />
                <div className="mediaBox">
                  <p className="item"><strong>The Every Voice Coalition</strong></p>
                  <p className="item"> <a className="link" href="https://medium.com/@baileysiber37/will-massachusetts-step-up-for-survivors-681c116ae591">Op Ed: Will Massachusetts Step Up for Survivors? </a></p>
                  <p className="item"><a className="link" href="https://tuftsdaily.com/news/2018/04/11/students-gather-support-of-two-sexual-assault-prevention-bills/">Tufts Daily: State House Rally</a></p>
                  <p className="item"><a className="link" href="https://www.bostonglobe.com/ideas/2019/03/01/colleges-won-protect-women-need-laws-that-will/nWP2a2a4ohCLTAspRWsvAO/story.html?fbclid=IwAR3ohQVsY_laa9JCEzKs2e5rnrUrE7U74C8aCkTHg_iE6sc7MlNVk8hw0WI">Boston Globe: Every Voice Summit</a></p>
                </div>
              </div>


              <div className="mediaContainer">
                <img src={GCode} className="img" />
                <div className="mediaBox">
                  <p className="item"><strong>G|Code</strong></p>
                  <p className="item"><a className="link" href="https://www.steamboston.com/gcode-interview-with-rizel-bobb-semple-bailey-siber/">STEAM: G|Code Interview</a></p>
                  <p className="item"><a className="link" href="https://www.curbed.com/2018/3/22/17153194/girls-code-women-of-color-in-tech-boston">Curbed: G|Code House</a></p>
                  <p className="item"><a className="link" href="https://www.fastcompany.com/40531227/this-old-house-is-being-remade-into-a-springboard-for-minority-women-in-tech">Fast Company: G|Code House</a></p>
                </div>
              </div>

            </div>
          </div>

        )
      }

    }

  }

  export default Media;
