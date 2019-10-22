import React, {Component} from 'react'
// import axios from 'axios'
const nationalGeographic = (process.env.REACT_APP_NG_KEY)
const axios = require('axios')

const SpaceContext = React.createContext()

class GroundProvider extends Component {
    constructor(){
        super()
        this.state = {
            // author: '',
            // title: '',
            // description: '',
            // url: '',
            // urlToImage: '',
            // publishedAt: '',
            groundInfoDisplayed: false,
            menuShowing: false,
            newsArray: [],
            selectedArticle: {}
        }
    }
    getGroundData = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=${nationalGeographic}`).then((response) => {
        console.log(response.data.articles)    
        this.setState({
                
                newsArray: response.data.articles
            },() => this.randomArticle())
            
        }).catch(function(error){
            console.log(error)
        })
    }

    randomArticle = () => {
        const selectedArticle = this.state.newsArray[Math.floor(Math.random() * this.state.newsArray.length)];
        this.setState ({selectedArticle})
    }
   
    // newsArrayContent = newsArray.map(selectedArticle => {
    //     return {
    //         sourceName: selectedArticle.source.name,
    //         author: selectedArticle.author,
    //         title: selectedArticle.title,
    //         description: selectedArticle.description,
    //         url: selectedArticle.url,
    //         urlToImage: selectedArticle.urlToImage,
    //         publishedAt: selectedArticle.publishedAt
    //     }
    
    // })
    
    groundInfoToggler = () => {
        this.setState({groundInfoDisplayed: !this.state.groundInfoDisplayed})
    }
  
    menuToggler = () => {
        this.setState(prevState => ({
            menuShowing: !prevState.menuShowing
        }))
    }

    render(){
       
        return (
            <SpaceContext.Provider
                value={{
                    ...this.state,
                    getGroundData:this.getGroundData,
                    groundInfoToggler:this.groundInfoToggler,
                    menuToggler:this.menuToggler
                }}>
                {this.props.children}
                </SpaceContext.Provider>
        )
    }
}     
export const withGround = C => props => (
    <SpaceContext.Consumer>
        {value => <C {...props} {...value} />}
    </SpaceContext.Consumer>
)
export default GroundProvider