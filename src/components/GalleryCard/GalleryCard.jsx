import React, { useState } from 'react'
import './GalleryCard.css'

import { Link } from 'react-router-dom';

const GalleryCard = ({img,title,images}) => {

  return (
   
        <Link to='/gallery/project' state={{images}} className='gallery-card-container'>
 
                <div className='gallery-card-img-container'> 
                    <img src={img} alt='img' className='gallery-card-img'></img>
                </div>

                <div className='overlay-gallery-card'>
                    <div className='gallery-card-content'>See All Images</div>
                </div>

                <div className='gallery-card-title'>{title}</div>

        </Link>
  )
}

export default GalleryCard