import React, {Component} from 'react'
import { withSpace} from "../context/GalaxyProvider"

class Galaxy extends Component {
    constructor(){
        super()
            this.state={
                title:false,
                
            }
    }
    componentDidMount(){
        this.props.getGalaxyData()
    }
    render(){
    return (
        <div className="galaxyContainer" style={{backgroundImage: this.props.hdToggle ? `url(${this.props.hdurl})` : `url(${this.props.url})`}} id="galaxy-div">
           { this.props.infoDisplayed ? 
           <div>
           <h3 className="galaxyTitle">{this.props.title}</h3>
           <div className="scrollContainer galaxyDescription">
           {this.props.explanation}
           </div>
           <div id="bottomOfGalaxyImage">
            
            {/* <p>{this.props.date}</p> */}
            {/* <p>{this.props.copyright}</p> */}
            
            </div>
           </div>
            :
            null
           }
        </div>
    )
}
}
export default withSpace(Galaxy)