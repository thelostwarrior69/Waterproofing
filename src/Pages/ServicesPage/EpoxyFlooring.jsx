import React from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'

export default function EpoxyFlooring() {
  return (
      <div>
          <Navbar1 />
          <div className='services-page-service-container' id='epoxyFlooring'>
                <h3>Epoxy Flooring / Protective Paints</h3>
                <div className='services-page-service'>
                    <div className='service-page-img-container'>
                        <img  className='service-page-img' src='../images/epoxyFlloringHomepage.JPG' alt="" />
                    </div>

                    <div className='service-page-content-container'>
                        
                        <ul>
                            <li>Industrial Flooring</li>
                            
                            <li>Protective Coating</li>
                            <li>Epoxy Floor Coating</li>
                            <li>Anti - Corrosive Paints</li>
                           
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
