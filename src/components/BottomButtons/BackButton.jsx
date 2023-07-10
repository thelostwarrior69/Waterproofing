import React from 'react'
import {useNavigate} from "react-router-dom"

const BackButton = () => {

    const navigate = useNavigate()

  return (
    <div className='bottom-buttons'>
        <div className='bottom-buttons-container' onClick={()=>{navigate(-1)}}>

            <div className='round-btn back'>
                <i className="fa-solid fa-arrow-left"></i>
            </div>

        </div>
    </div>
  )
}

export default BackButton