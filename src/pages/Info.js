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
            i’m bailey, an arab american technologist focused on addressing spatial, economic, and racial inequities in cities through innovative community and economic development as well as placemaking initiatives.
          </p>
        </div>


        <div className="infoChunk">
          <p>
            right now, i'm pursuing a masters in public policy as a <a href="https://rappaportfoundation.org/initiatives/publicpolicy/> rappaport fellow </a> at the <a href="https://www.hks.harvard.edu/"> harvard kennedy school</a>, focusing on social and urban policy. i also serve as an advisor at <a href="https://www.thegcodehouse.com/">g&#123;code&#125;</a>, a non profit that empowers Black, brown, and Indigenous women and non-binary folks to gain economic mobility by providing technical training and wraparound supports. i’m also a happy alum of the <a href="https://www.tbf.org/what-we-do/strategic-focus-areas/nonprofit-effectiveness/women-of-color-leadership-circle">the boston foundation's women of color leadership circle</a> and the <a href="https://www.boston.gov/departments/new-urban-mechanics"> MONUM </a> civic innovation fellowship.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            in my spare time, you'll find me playing stardew valley, obsessing over plants, or watching vocal coaches react to songs on youtube.
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
