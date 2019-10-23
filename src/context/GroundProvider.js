import React, {Component} from 'react'
const nationalGeographic = (process.env.REACT_APP_NG_KEY)
const axios = require('axios')

const SpaceContext = React.createContext()

class GroundProvider extends Component {
    constructor(){
        super()
        this.state = {
            groundInfoDisplayed: false,
            menuShowing: false,
            newsArray: [],
            selectedArticle: {}
        }
    }
    getGroundData = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=${nationalGeographic}`).then((response) => {
           
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