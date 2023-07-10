import React from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'

export default function ProjectConsultaion() {
  return (
      <div>
          <Navbar1 /> 
            <div className='services-page-service-container' id='projectConsultancy'>
                <h3>Project Consultancy</h3>
                <div className='services-page-service'>
                    <div className='service-page-img-container'>
                        <img  className='service-page-img' src='../images/consultancy.jfif' alt="" />
                    </div>

                    <div className='service-page-content-container'>
                        <div>We Provide Project Consultancy for </div>
                        <ul style={{listStyleType:"disc"}}>
                            <li>Water Proofing</li>
                            <li>Repairing and Rehab</li>
                            <li>Epoxy Flooring</li>
                            <li>Protecitive Coatings</li>
                            <li>Insulation</li>
                           
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
