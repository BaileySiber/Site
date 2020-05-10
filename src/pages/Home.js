import React, { Component } from 'react';
import '../css/Home.css';
import sun from '../images/sun.png'
import building from '../images/buildings.png'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      x1bool: false,
      x2bool: false,
      x3bool: false,
      x4bool: false,
      x5bool: false,
      sun: true
    }
  }
  render() {
    return (

      <div>
          <div className="Clouds">


          {!this.state.x1bool && !this.state.x2bool && !this.state.x3bool && !this.state.x4bool && !this.state.x5bool  ?

            <div onClick={()=>this.setState({
              x1bool:true, x2bool:true, x3bool:true, x4bool:true, x5bool:true
            })}>
             <img src={sun} className="Sun" /> </div>

            :

            <div>
            {this.state.x1bool ?
              <div onClick={()=> this.setState({x1bool:false})} className="x1">
                <div className="cloud"></div>
              </div>
              : null
            }

            {this.state.x2bool ?
              <div onClick={()=> this.setState({x2bool:false})} className="x2">
                <div className="cloud"></div>
              </div>
              : null
            }

            {this.state.x3bool ?
              <div onClick={()=> this.setState({x3bool:false})} className="x3">
                <div className="cloud"></div>
              </div>
              : null
            }

            {this.state.x4bool ?
              <div onClick={()=> this.setState({x4bool:false})} className="x4">
                <div className="cloud"></div>
              </div>
              : null
            }

            {this.state.x5bool ?
              <div onClick={()=> this.setState({x5bool:false})} className="x5">
                <div className="cloud"></div>
              </div>
              : null
            }
            </div>

          }

            </div>

          <img src={building} className="Buildings" />

          <p className="Tagline">Reducing disparities in quality of life & health outcomes by working at the intersections of technology, advocacy & health.</p>

        </div>
    )}
  }

  export default Home;
