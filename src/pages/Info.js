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
            i am currently working as the deputy chief of staff to the <a href="https://www.okc.gov/government/mayor"> mayor of oklahoma city</a>. before that, i was working in oklahoma city's <a href="https://www.okc.gov/government/office-of-innovation"> office of innovation</a> as a <a href="https://www.cityleadership.harvard.edu/city-hall-fellowships"> bloomberg harvard city hall fellow</a>, working on a wide range of initiatves, from formalizing city-wide data governance to supporting the <a href="https://www.okc.gov/government/key-to-home"> Key to Home Partnership</a>. prior to okc, i completed my masters in public policy as a <a href="https://rappaportfoundation.org/initiatives/publicpolicy/"> rappaport fellow</a> at the <a href="https://www.hks.harvard.edu/"> harvard kennedy school</a>, worked with the city of boston's <a href="https://www.boston.gov/departments/new-urban-mechanics"> civic innovation team</a>, helped launch the nonprofit <a href="https://www.thegcodehouse.com/">g&#123;code&#125;</a>, and held various technologist roles at several startups. my throughline has always been leveraging innovation to drive economic mobility and empowerment, particularly for minoritized populations.   
          </p>
        </div>

        <div className="infoChunk">
          <p>
            prior to okc, i completed my masters in public policy as a <a href="https://rappaportfoundation.org/initiatives/publicpolicy/"> rappaport fellow</a> at the <a href="https://www.hks.harvard.edu/"> harvard kennedy school</a>, worked with the city of boston's <a href="https://www.boston.gov/departments/new-urban-mechanics"> civic innovation team</a>, helped launch the nonprofit <a href="https://www.thegcodehouse.com/">g&#123;code&#125;</a>, and held various technologist roles at several startups. my throughline has always been leveraging innovation to drive economic mobility and empowerment, particularly for minoritized populations.   
          </p>
        </div>

        <div className="infoChunk">
          <p>
            in my spare time, you'll find me making pottery, enjoying live music, or exploring okc with my pup summit.
          </p>
        </div>

        <div className="infoChunk">
          <p>
            please feel free to reach out to chat local gov, share great music, or anything else!
          </p>
        </div>


      </div>

    )}
  }

  export default Info;
