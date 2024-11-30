import React from 'react'
import { assets } from '../../assets/assets'
import "./Navbar.css"
import { Fade as Hamburger } from 'hamburger-react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={assets.logo} alt="" />
      </div>
      <div className="links">
        <ul className='navigation'>
            <li><a href="#">Top Features</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="toggles">
        <Hamburger color='white'/>
      </div>
    </div>
  )
}

export default Navbar
