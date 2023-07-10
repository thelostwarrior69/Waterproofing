import React from 'react'
import { useState } from 'react'
import './Features.css'

import {data} from './featuresContent' 


const Features = () => {

    const [key,setKey] = useState(1);

  return (
    <div className='features-container'>

        <div className='features-left'>
            <b>Why Choose us?</b>

            <h1>We Provide The Best Waterproofing Services</h1>

            <p> We understand the importance of protecting your property from water damage, and we have the skills and expertise necessary to deliver effective and long-lasting waterproofing solutions.</p>

            <div className='features-left-box'>
                <div className='f-tick tick-first'>
                    <i class="fa-regular fa-circle-check"></i>
                  <span>  Experienced Workers </span>
                </div>

                <div className='f-tick tick-second'>
                    <i class="fa-regular fa-circle-check"></i>
                 <span> High Quality Product</span>
                </div>

                <div className='f-tick tick-third'>
                    <i class="fa-regular fa-circle-check"></i>
                   <span> Latest Technology</span>
                </div>

                <div className='f-tick tick-fourth'>
                    <i class="fa-regular fa-circle-check"></i>
                    <span> Client Satisfaction</span>
                </div>
                
            </div>
        </div>
        
        <div className='features-right'>

            <div className='f-left-img-container'>
                <img src="./images/workers.avif" alt="" className='f-img-left'/>
            </div>
            <div className='f-right-img-container'>
                <img src="./images/worker_working2.jpg" alt="" className='f-img-right' />
            </div>
            <div className='f-card'>
                <i class="fa-solid fa-helmet-safety"></i>

                <h3><b>10 +</b></h3>
                <p>years of Experience</p>
            </div>
        </div>

    </div>
  )
}

export default Features