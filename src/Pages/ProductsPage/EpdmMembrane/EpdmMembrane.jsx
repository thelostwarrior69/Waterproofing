import React from 'react'
import Navbar1 from '../../../components/Navbar/Navbar1'
import Footer from '../../../components/Footer/Footer'
import UpButton from '../../../components/BottomButtons/UpButton'
import BackButton from '../../../components/BottomButtons/BackButton'

export default function EpdmMembrane() {
  return (
      <>
          <Navbar1 />
          <div className='products-page-product-container' id='epdmMembrane'>
                <h3>EPDM Membrane</h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/4.jpg' alt="" />
                    </div>

            <div className='product-page-content-container'>
              <p>Ethylene Propylene Diene Monomer, commonly known, as EPDM was earlier developed as a substitute of natural rubber. But due to its superior performance in certain specific conditions like resistant to weather, climate, ageing, ozone, temperature &amp; ageing, it is now being preferred over natural rubber at areas which are more prone to such conditions. They are widely used all over the world for waterproofing application.</p>
              <p>EPDM Sheets are highly recommended for both indoor and outdoor use. it has an operating temperature range -30&deg;C to +120&deg;C. It is also suitable for insulation purposes and offers resistance to corrosive chemicals like acids, bases &amp; mild solvents.</p>
              <strong>Applications :</strong>
              <ul>
                  <li>Linings for Tanks &amp; Vessels</li>
                  <li>Sealing &amp; Jointing</li>
                  <li>Water Proofing Membrane</li>
                  <li>Insulation Sheets in Construction Industry</li>
                  <li>Electrical Insulation</li>
                  <li>Gaskets for Automotive and Industrial Use</li>
              </ul>
                        
                    </div>
                </div>
          </div>
          <UpButton />
          <BackButton/>
          <Footer/>
      </>
  )
}
