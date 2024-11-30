import React from 'react'
import "./SliderContent.css"

const SliderContent = () => {
    return (
        <div className='slider'>
            <div className='slides active'>
                <h2><span>Engine</span><br />599 cc</h2>
                <h2><span>Max Speed</span><br />240 Km/h</h2>
            </div>
            <div className='slides'>
                <h2><span>Mileage</span><br />14 Km/L</h2>
                <h2><span>0 - 100 Km/H</span><br />4 Seconds</h2>
            </div>
            <div className='slides'>
                <h2><span>Wheels</span><br />17-Inch Alloy</h2>
                <h2><span>Tyre Type</span><br />260 Km/H</h2>
            </div>
        </div>
    )
}

export default SliderContent
