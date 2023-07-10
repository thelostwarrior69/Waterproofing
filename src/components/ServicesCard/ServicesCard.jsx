import React from 'react'

import './ServicesCard.css'

const ServicesCard = (props) => {
  return (
    <div className='services-card'>

      <div className='services-card-img-container'>
        <a href={props.path}>
        <img src={props.img} alt="" className='services-card-img' />
        <div className='overlay-services-card'>
          <div className='services-card-content'>{props.content}</div>
        </div>
        </a>
      </div>

      <div className='services-card-heading'>
        <h4 >{props.heading}</h4>
      </div>

    </div>
  )
}

export default ServicesCard