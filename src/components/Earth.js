import React, {Component} from 'react'
import { withPlanet} from "../context/EarthProvider"


class Earth extends Component {
    constructor(){
        super()
            this.state={
                title:false,
                
            }
    }

    render(){
        console.log(this.props)

        
    return (
        <div className="earthContainer" style={{backgroundImage: `url(${(this.props.randomEarthPhoto())})`}} id="earth-div">
        
        { this.props.groundInfoDisplayed ? 
           <div className="mainText">
           
           <h3>Welcome to the Galaxy!</h3>
            <h3>This site provides an easy way to explore the planet and the galaxy from wherever you are!</h3>
            </div>
          
            :
            null
           }
            
        </div>
        
    )
}
}
export default withPlanet(Earth)

