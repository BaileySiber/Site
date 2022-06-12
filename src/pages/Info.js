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
            i’m bailey, an arab american technologist focused on addressing racial inequities in cities through innovative economic development and placemaking initiatives.
          </p>
        </div>


        <div className="infoChunk">
          <p>
            right now, i'm pursuing a masters in public policy as a rappaport fellow at the <a href="https://www.hks.harvard.edu/"> harvard kennedy school</a>, focusing on social and urban policy. i also serve as an advisor (and was a founding team member) at <a href="https://www.thegcodehouse.com/">g&#123;code&#125;</a>, a non profit that empowers Black, brown, and Indigenous women and non-binary folks to gain economic mobility by providing housing, community, and technical training. i’m also a happy alum of the <a href="https://www.tbf.org/what-we-do/strategic-focus-areas/nonprofit-effectiveness/women-of-color-leadership-circle">anna faith jones & frieda garcia women of color leadership circle</a>.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            in my spare time, you'll find me playing stardew valley, obsessing over plants, or watching vocal coaches react to songs on youtube.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            please feel free to reach out to learn more about g&#123;code&#125;, talk civic innovation, brainstorm new ideas, share great music, or anything else!
          </p>
        </div>


      </div>

    )}
  }

  export default Info;
