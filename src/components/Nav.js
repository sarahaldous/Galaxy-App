import React from 'react'
import { withSpace } from '../context/GalaxyProvider'
import { withGround } from '../context/GroundProvider'
import {withRouter} from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Nav = props => {
    // const { navToggle, toggler } = props
    console.log(props.location)
    return (
        <div className="navContainer">
            <button id="menuBtn" onClick={props.menuToggler}>Menu</button>
           
            { props.location.pathname === '/galaxy' && <button onClick={props.infoToggler} className="HDImgBtn">More Info</button> }
            { props.location.pathname === '/' && <button onClick={props.infoToggler} className="HDImgBtn">More Info</button> }
            { props.location.pathname === '/ground' && <button onClick={props.groundInfoToggler} className="HDImgBtn">More Info</button> }
        </div>
    )

        
}

export default withRouter(withGround(withSpace(Nav)))