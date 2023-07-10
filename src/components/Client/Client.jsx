import React from 'react'
import "./Client.css"

export default function Client({name,img}) {
  return (
      <div className='Client' >
          <img src={img} alt = "" className='client-img' />
          <div className='client-heading' >{name}</div>
      </div>
  )
}
