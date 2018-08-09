import React, { Component } from 'react';
import './Media.css';


class Media extends Component {

  render() {
    return (
      <div>
        <div className="Home-section">
          <hr className="Line"/>
          <p></p>
          <p></p>
          <div>
          <p className="Desc"><strong>In the News</strong></p>
          <p className="DescOne">Sexual Assault Prevention/Response Activism</p>
            <ul>
              <li className="item"> Boston Globe: <a className="link" href="https://www.bostonglobe.com/metro/2018/04/10/college-students-rally-for-tougher-policies-prevent-campus-sexual-assaults/Cy70GFzss6QgYQ5RxtmnTM/story.html">State House Rally</a> (member of Every Voice Coalition)</li>
              <li className="item"> Medium Op-Ed: <a className="link" href="https://medium.com/@baileysiber37/will-massachusetts-step-up-for-survivors-681c116ae591">Will Massachusetts Step Up for Survivors? </a></li>
              <li className="item"> Tufts Daily: <a className="link" href="https://tuftsdaily.com/news/2018/04/11/happens-projects-voices-of-sexual-assault-survivors/">It Happens Here</a></li>
              <li className="item"> Tufts Daily: <a className="link" href="https://tuftsdaily.com/news/2018/04/11/students-gather-support-of-two-sexual-assault-prevention-bills/">State House Rally</a></li>
              <li className="item"> Tufts Daily: <a className="link" href="https://tuftsdaily.com/news/2017/09/21/oeo-monitor-devos-public-notice-process-sexual-misconduct-policy/">Betsy DeVos Sexual Misconduct Policy</a></li>
              <li className="item"> Tufts Daily: <a className="link" href="https://tuftsdaily.com/features/2017/11/17/sexual-assault-resources-campus/">#MeToo</a></li>
            </ul>

          </div>
          <p></p>
          <hr className="Line"/>
        </div>
      </div>
    )}
  }

  export default Media;
