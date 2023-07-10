import React from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'

export default function Repair() {
  return (
      <div>
          <Navbar1 />
                <div className='services-page-service-container' id='repair'>
                <h3>Repair and Rehabilitation</h3>
                <div className='services-page-service'>
                    <div className='service-page-img-container'>
                        <img  className='service-page-img' src='../images/RepairHomepage.jpg' alt="" />
                    </div>

                    <div className='service-page-content-container'>
                        
                        Repairing and rehab of structures
                        
                    </div>
                </div>
          </div>
          <UpButton />
          <BackButton/>
          <Footer/>
    </div>
  )
}
