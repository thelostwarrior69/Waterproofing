import React from 'react'
import Footer from '../../components/Footer/Footer'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'
import Navbar1 from '../../components/Navbar/Navbar1'

export default function SelectProducts() {
    return (
        <>
        <Navbar1/>
        <div id="selectProduct" className='ConceptCard'>
          <h2 style={{ textAlign: "center"  }}> HOW TO SELECT RIGHT PRODUCT?</h2>
        <p >All manufacturer recommonds their products for various applications. The designer and project consultant are refering to product selection based on design speculations, climate, temerature etc. The product slection shall consider the following;
        </p>
        <p>
            <ol >
            <li>Climate</li>
            <li>Exterior Temperature  Humidity</li>
            <li>Building Size, functional purpose</li>
            <li>Basements: Single/Double Basements</li>
            <li>Underground structure as per design loads</li>
            <li>Environmental Conditions</li>
            <li>Thermal Requirements</li>
            <li>Building Type/ Car Parking/Landscaping areas</li>
            <li>Bridge Deck</li>
            <li>Terrace Gardens</li>
            </ol>
        </p>
            <p><strong>Installation of Waterproofing Products:</strong></p>
        <p >Before waterproofing pre-installation meeting of installer with consultant and contractor is required. They should discuss shedule of construction, waterproofing activities, system and specifications. It Installation need following:
        </p>
        <p>
          <ol>
            <li>Roofing Contractor: Authorized  Experienced</li>
            <li>Pre-Installation Meetings with Client/Main Contractor</li>
            <li>Specification as per manufacturer/ outline specification</li>
            <li>Site Clearance</li>
            <li>Sound surface as per recommendations</li>
            <li>Installation procedure</li>
          </ol>
        </p>
            </div>
            <Footer />
            <UpButton />
            <BackButton/>
      </>
  )
}
