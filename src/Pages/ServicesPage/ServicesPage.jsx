import React from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import './ServicesPage.css'

import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'


const  ServicesPage = () => {
  return (
    <div>
        <Navbar1/>
        <div className='services-page-container'>
            <h3>Services we Offer</h3>
            <div className='row'>
                <Link className='services-item col-md-4 col-sm-6' to ='/services/waterproofing'>
                    <div className='services-item-logo'>
                        <i class="fa-solid fa-umbrella"></i>
                    </div>
                    <div className='services-item-heading'>
                        Water Proofing
                    </div>
                </Link >
                <Link className='services-item col-md-4 col-sm-6' to ='/services/epoxyFlooring'>
                    <div className='services-item-logo'>
                        <i class="fa-solid fa-paint-roller"></i>
                    </div>
                    <div className='services-item-heading'>
                        Epoxy Flooring System / Protective Paints
                    </div>
                </Link >
                <Link className='services-item col-md-4 col-sm-6' to ='/services/repair'>
                    <div className='services-item-logo'>
                        <i class="fa-solid fa-wrench"></i>
                    </div>
                      <div className='services-item-heading'>
                        Repair and Rehabilition
                    </div>
                </Link >
                <Link className='services-item col-md-6 last-two' to ='/services/insulation'>
                    <div className='services-item-logo'>
                        <i class="fa-brands fa-connectdevelop"></i>
                    </div>
                    <div className='services-item-heading'>
                        Insulation
                    </div>
                </Link >
                <Link className='services-item col-md-6 col-sm-12 last-two last-one' to ='/services/projectConsultancy'>
                    <div className='services-item-logo'>
                    <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <div className='services-item-heading'>
                        Project Consultation
                    </div>
                </Link >
            </div>
          </div>
          <UpButton />
          <BackButton/>
          <Footer />
          
    </div>
  )
}

export default ServicesPage