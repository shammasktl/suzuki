import React from 'react'
import "./Content.css"
import { assets } from '../../assets/assets'

const Content = () => {
  return (
    <div className='content'>
      <h2>Ready to <span>Race</span></h2>
      <a href="#" className='btn'>Ride Now</a>
      <img src={assets.bike} className='bike' alt="" />
    </div>
  )
}

export default Content
