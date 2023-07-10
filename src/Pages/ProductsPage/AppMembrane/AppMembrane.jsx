import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Navbar1 from '../../../components/Navbar/Navbar1'
import UpButton from '../../../components/BottomButtons/UpButton'
import BackButton from '../../../components/BottomButtons/BackButton'

export default function AppMembrane() {
  return (
    <>
      <Navbar1/>
     <div className='products-page-product-container' id='appMembrane'>
                <h3>APP Membrane</h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/2.jpeg' alt="" />
                    </div>

                    <div className='product-page-content-container'>                        
                  <p>
                    APP membranes are formulated with special distilled bitumen modified with Attactic Polypropylene (APP) for greater elasticity, flexibility, and further enhanced with a blend of&nbsp; Thermoplastic Polymer (TP) and Elastoplastic Copolymer (EPC) for high heat resistance, greater elongation and low temperature flexibility. The compound is then stabilized with opaque Mineral Stabilizers (MS) for impact resistance, UV resistance and durability.
              </p>
              <strong><span>FEATURES:</span></strong> 
              <ul>
                  <li>Total impermeability for total waterproofing</li>
                  <li>Excellent resistance to aging and weathering.</li>
                  <li> Outstanding bondability and seam integrity.</li>
                  <li>Flexibility at low temperature.</li>
                  <li>Stability at high temperature</li>
                  <li>Very high resistance to impact</li>
                  <li>Variety of finishes for exposed and covered applications</li>
                  <li> High tensile strength and tear resistance</li>
                  <li>Excellent for mechanical anchorage</li>
                  <li>Isotropic properties</li>
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
