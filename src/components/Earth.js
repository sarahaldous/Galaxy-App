import React, {Component} from 'react'
import { withPlanet} from "../context/EarthProvider"
// import moment from 'moment'

// const formatted = moment(new Date()).format().split("T")[0]

class Earth extends Component {
    constructor(){
        super()
            this.state={
                title:false,
                
            }
    }
    // componentDidMount(){
    //     this.props.getEarthData()
    // }
    render(){
        console.log(this.props)

        
    return (
        <div className="earthContainer" style={{backgroundImage: `url(${(this.props.randomEarthPhoto())})`}} id="earth-div">
        
        </div>
    )
}
}
export default withPlanet(Earth)

// this.props.enhancedToggle ? `url(${this.props.hdurl})` : `url(${this.props.image})`}} 
            // { this.props.infoDisplayed ? 
            // <div>
            // <h3 className="earthTitle">{this.props.caption}</h3>
            
            // <div id="bottomOfImage">
            // <p>{this.props.date}</p>
            // </div>

            // </div>
            // :
            // null
            // }