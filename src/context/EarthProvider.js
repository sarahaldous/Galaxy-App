import React, {Component} from 'react'


const SpaceContext = React.createContext()

class EarthProvider extends Component {
    constructor(){
        super()
        this.state = {
            images: ['https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60', 
            'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80', 
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 
            'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60', 
            'https://images.unsplash.com/photo-1483699862560-f524a8c11c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1429&q=80', 
            'https://images.unsplash.com/photo-1528834379234-2de7f8328fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80', 
            'https://images.unsplash.com/photo-1483651646696-c1b5fe39fc0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 
            'https://images.unsplash.com/photo-1520113412646-04fc68c0bc21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80', 
            'https://images.unsplash.com/photo-1540198163009-7afda7da2945?ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80', '' ],
            // date:'',
            // caption:'',
            infoDisplayed: false,
            // hdToggle:false,
            menuShowing: false,
            
        }
    }
    randomEarthPhoto = () => {
        const selectedImage = this.state.images[Math.floor(Math.random() * this.state.images.length)];
        return selectedImage
    }
    
    // getEarthData = () => {
    //     axios.get(`https://api.nasa.gov/EPIC/api/enhanced/all?api_key=${nasa}`).then((response) => {
    //         console.log(response.data)
    //         const {
    //             caption,
    //             image,
    //             date
    //         } = response.data
    //         this.setState({
    //             caption,
    //             image,
    //             date,
    //         })
            
    //     }).catch(function(error){
    //         console.log(error)
    //     })
    // }
   
    infoToggler = () => {
        this.setState({infoDisplayed: !this.state.infoDisplayed})
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
                    getEarthData:this.getEarthData,
                    infoToggler:this.infoToggler,
                    // hdToggler:this.hdToggler,
                    menuToggler:this.menuToggler,
                    randomEarthPhoto:this.randomEarthPhoto
                }}>
                {this.props.children}
                </SpaceContext.Provider>
        )
    }
}
   
export const withPlanet = C => props => (
    <SpaceContext.Consumer>
        {value => <C {...props} {...value} />}
    </SpaceContext.Consumer>
)

export default EarthProvider