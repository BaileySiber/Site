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
            i’m bailey, an arab american technologist and activist dedicated to using tech to create sustainable, place-based social impact.
          </p>
        </div>


        <div className="infoChunk">
          <p>
            right now, i'm leading partnerships at <a href="https://www.thegcodehouse.com/">g&#123;code&#125;</a>, a non profit that empowers young female and non-binary people of color to gain economic mobility by providing housing, community, and technical training. i'm also pursuing a masters in public policy at the <a href="https://www.hks.harvard.edu/"> harvard kennedy school</a> in social and urban policy. finally, i’m excited to be a member of the <a href="https://www.tbf.org/what-we-do/strategic-focus-areas/nonprofit-effectiveness/women-of-color-leadership-circle">anna faith jones & frieda garcia women of color leadership circle</a>.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            in my spare time, you'll find me playing stardew valley, obsessing over plants, running around with my pup summit, or watching vocal coaches react to songs on youtube.
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
