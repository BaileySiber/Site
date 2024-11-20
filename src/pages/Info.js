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
            hi, i’m bailey! 
          </p>
        </div>


        <div className="infoChunk">
          <p>
            i am currently working in the city of oklahoma city's <a href="https://www.okc.gov/government/office-of-innovation"> office of innovation</a> as a <a href="https://www.cityleadership.harvard.edu/city-hall-fellowships"> bloomberg harvard city hall fellow</a>, working on initiatives ranging from data governance to homelessness. i recently completed my masters in public policy as a <a href="https://rappaportfoundation.org/initiatives/publicpolicy/"> rappaport fellow</a> at the <a href="https://www.hks.harvard.edu/"> harvard kennedy school</a>, concentrating in social and urban policy. i was a founding team member at <a href="https://www.thegcodehouse.com/">g&#123;code&#125;</a> and am a happy alum of the boston foundation's <a href="https://www.tbf.org/what-we-do/strategic-focus-areas/nonprofit-effectiveness/women-of-color-leadership-circle">women of color leadership circle </a> and the city of boston's <a href="https://www.boston.gov/departments/new-urban-mechanics"> civic innovation fellowship</a>.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            in my spare time, you'll find me exploring public libraries and parks, sewing, or making pottery.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            please feel free to reach out to brainstorm new ideas, share great music, or anything else!
          </p>
        </div>


      </div>

    )}
  }

  export default Info;
