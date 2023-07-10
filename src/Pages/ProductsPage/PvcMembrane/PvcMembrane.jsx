import React from 'react'
import Navbar1 from '../../../components/Navbar/Navbar1'
import Footer from '../../../components/Footer/Footer'
import UpButton from '../../../components/BottomButtons/UpButton'
import BackButton from '../../../components/BottomButtons/BackButton'

export default function PvcMembrane() {
    return (
        <>
            <Navbar1/>  
          <div className='products-page-product-container' id='pvcMembrane'>
                <h3>PVC membrane</h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='../images/products/1.jpg' alt="" />
                    </div>
                    <div className='product-page-content-container'>
                        <p>PVC membrane is used mainly for waterproofing of tunnels, water reservoirs., residential and commercial buildings and industrial roofs. Since this material is quite easy to install, strong enough (is of great tensile strength), has long service life, all this puts the PVC membrane to a higher level comparing to bituminous roofing materials, especially considering that such materials need constant maintenance and repair.</p>
                        <p>Due to its structure, the PVC membrane is very strong and simultaneously flexible material which is resistant to precipitation, ultra-violet radiation, capable to withstand heavy surface and tensile loads.</p>
                    </div>
                </div>
            </div>
            <UpButton />
            <BackButton/>
            <Footer/>
      </>
  )
}
