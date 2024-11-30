import React from 'react'
import "./Content.css"
import { assets } from '../../assets/assets'
import { IoArrowForward } from 'react-icons/io5'

const Content = () => {
  return (
    <div className='content'>
      <h2>Ready to <span>Race</span></h2>
      <a href="#" className='btn'>Ride Now <span><IoArrowForward /></span></a>
      <img src={assets.bike} className='bike' alt="" />
    </div>
  )
}

export default Content
