import React from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'

export default function Insulation() {
  return (
      <div>
          <Navbar1 />
                     <div className='services-page-service-container' id='insulation'>
                <h3>Insulation</h3>
                <div className='services-page-service'>
                    <div className='service-page-img-container'>
                        <img  className='service-page-img' src='../images/insulation.jfif' alt="" />
                    </div>

                    <div className='service-page-content-container'>
                        <div>We Provide insulation for </div>
                        <ul>
                            <li>Commercial Buildings</li>
                            <li>Residential Buildings</li>
                            <li>Hotels, Hospitals etc</li>
                            <li>Industrial Insulation</li>
                           
                        </ul>
                        
                    </div>
                </div>
          </div>
          <UpButton />
          <BackButton/>
          <Footer/>
    </div>
  )
}
