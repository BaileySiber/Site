import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import '../css/Info.css';

class Info extends Component {
  constructor() {
    super();
  }

  render() {
    return (

      <div className="infoContainer">

        <div className="infoChunk">
          <p>
            hi! i’m bailey, a technologist and researcher focused on economic mobility and empowerment, racial justice, and state and local governments. 
          </p>
        </div>


        <div className="infoChunk">
          <p>
            right now, i'm serving as a two year <a href="https://www.cityleadership.harvard.edu/city-hall-fellowships"> bloomberg harvard city leadership fellow </a>, supporting oklahoma city as they launch their civic innovation team. i recently completed my masters in public policy as a <a href="https://rappaportfoundation.org/initiatives/publicpolicy/"> rappaport fellow</a> at the <a href="https://www.hks.harvard.edu/"> harvard kennedy school</a>, concentrating in social and urban policy. additionally, i serve as an advisor at <a href="https://www.thegcodehouse.com/">g&#123;code&#125;</a>, a non profit that empowers black, latine, and indigenous women and non-binary folks to gain economic mobility by providing technical training and wraparound supports. i’m also a happy alum of the boston foundation's <a href="https://www.tbf.org/what-we-do/strategic-focus-areas/nonprofit-effectiveness/women-of-color-leadership-circle">women of color leadership circle</a> and the <a href="https://www.boston.gov/departments/new-urban-mechanics"> monum</a> civic innovation fellowship.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            in my spare time, you'll find me playing stardew valley, sewing, or watching vocal coaches react to songs on youtube.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            please feel free to reach out to learn more about g&#123;code&#125;, brainstorm new ideas, share great music, or anything else!
          </p>
        </div>


      </div>

    )}
  }

  export default Info;
