import React from 'react'
import { Link } from 'react-router-dom'
import { withSpace } from '../context/GalaxyProvider'

const HiddenMenu = props => {
    const { menuToggler, menuShowing } = props
    return (
        <div className={`nav nav-${menuShowing ? "open" : "closed" }`}>
       
        <button id="menuBtn" onClick={menuToggler}>Menu</button>
        <Link onClick={menuToggler} className="groundLink" to="/ground">Visit Another Part of the World</Link>
        <Link onClick={menuToggler} className="earthLink"  to="/">Back to Earth</Link>
        <Link onClick={menuToggler} className="galaxyLink" to="/galaxy">Explore the Galaxy</Link>
        </div>
    )

        
}
 // <div className="nav"> 
export default withSpace(HiddenMenu)