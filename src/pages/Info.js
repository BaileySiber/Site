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
            hi! <span role="img" aria-label="wave">👋🏼 </span>i’m bailey, a project analyst/engineer/innovator that cares a whole lot about place based initiatives, using technology for social impact, & addressing the structural inequities that disproportionately impact marginalized communities.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            right now, i’m helping to scale data integrations at <a href="https://www.devoted.com/">devoted health</a>, a health tech startup bringing compassion back to healthcare. i’m also <a href="https://www.steamboston.com/gcode-interview-with-rizel-bobb-semple-bailey-siber/">leading partnerships/programming/misc things</a> at <a href="https://www.thegcodehouse.com/">g|code</a>, a non profit providing housing, community, & technical training to womxn of color in boston. i’m humbled to additionally be partaking in the <a href="https://www.tbf.org/what-we-do/strategic-focus-areas/nonprofit-effectiveness/women-of-color-leadership-circle">anna faith jones & frieda garcia womxn of color leadership circle</a>.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            in 2018 i graduated from tufts university <span role="img" aria-label="elephant"> 🐘 </span> where i studied clinical psychology, community health, & a bit of computer science. i learned some more computer science post grad in a software engineering & entrepreneurship fellowship. while at tufts, I advocated for <a href="https://tuftsdaily.com/features/2017/11/17/sexual-assault-resources-campus/">better sexual violence prevention practices</a> & <a href="https://tuftsdaily.com/news/2018/04/11/happens-projects-voices-of-sexual-assault-survivors/">support for survivors</a> as president of a student led org - <a href="https://www.instagram.com/asapattufts/">asap</a>. I also <a href="https://medium.com/@baileysiber37/will-massachusetts-step-up-for-survivors-681c116ae591">championed improved legislation at the state level </a> while helping to lead at <a href="https://www.everyvoicecoalition.org/">the every voice coalition</a>.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            outside of all this, I have a healthy obsession with plants <span role="img" aria-label="plant"> 🌱 </span>& you'll likely find me hiking in the white mountains, singing, relearning arabic for the tenth time, or generally exploring.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            <a href="mailto:baileysiber37@gmail.com">reach out to me</a> if you so please. also, click the sun!
          </p>
        </div>


      </div>

    )}
  }

  export default Info;
