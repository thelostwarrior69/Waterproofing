import React from 'react'
import './SingleImageModal.css'

const SingleImageModal = ({img,desc,setCertificateModal}) => {

  return (
    <div className='single-image-modal'>
        <div className='single-image-modal-container' >
            <i className="fa-solid fa-xmark modal-close" onClick={()=>setCertificateModal(false)}></i>
            
            <div className="single-image-modal-img-container">

                <img src={img} alt="img" className='single-modal-img'/>

            </div>
            <div className='single-image-modal-desc'>{desc}</div>
        </div>
    </div>
  )
}

export default SingleImageModal