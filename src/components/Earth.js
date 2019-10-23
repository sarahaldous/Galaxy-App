import React, {Component} from 'react'
import { withPlanet} from "../context/EarthProvider"


class Earth extends Component {
    constructor(){
        super()
            this.state={
                title:true,
                
            }
    }

    render(){
        
        return (
            <div className="earthContainer" style={{backgroundImage: `url(${(this.props.randomEarthPhoto())})`}} id="earth-div">
            
                
                    <div className="mainText">
                
                        <h1 align="center">Welcome!</h1>
                        <h2>This site provides an easy way to explore the planet and the universe from wherever you are!</h2>
                        <h2>This app allows you to escape the everyday and see pictures of different parts of the world and universe. When you click Menu, you can either Visit Another Part of the World (National Geographic), Explore the Galaxy (Nasa), or come Back to Earth (this page). You can just enjoy the pictures, or click "More Info" in the upper left corner of the page to display additional information from either the National Geographic or Nasa API.</h2>
                    </div>
                    
            </div>
        )
    }
}
export default withPlanet(Earth)

