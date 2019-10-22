import React, {Component} from 'react'
import { withGround} from "../context/GroundProvider"
import moment from 'moment'



class Ground extends Component {
    constructor(){
        super()
            this.state={
                title:false,
                
            }
    }
    componentDidMount(){
        console.log('ground component mounted')
        this.props.getGroundData()
    }
    

    render(){
        
    console.log(this.props.selectedArticle)
    console.log(this.props)
    return (
        <div className="groundContainer" style={{backgroundImage: `url(${this.props.selectedArticle.urlToImage}` }}>
           { this.props.groundInfoDisplayed ? 
           <div>
           <h1 className="groundTitle">{this.props.selectedArticle.title}</h1>
           <div className="scrollContainer">
           <h6 className="groundDescription">{this.props.selectedArticle.description}</h6>
           </div>
           <div id="bottomOfImage">
           <a className="groundHref" rel="noopener noreferrer" href={this.props.selectedArticle.url} target="_blank">Read Full Article</a>
      
            <p>{moment(this.props.selectedArticle.publishedAt).format("LL")}</p>
            
            <p>Source: National Geographic</p>
            
            </div>
           </div>
            :
            null
           }
        </div>
    )
}
}
export default withGround(Ground)
