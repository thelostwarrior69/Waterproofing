import React from 'react'
import Navbar1 from '../../../components/Navbar/Navbar1'
import Footer from '../../../components/Footer/Footer'
import UpButton from '../../../components/BottomButtons/UpButton'
import BackButton from '../../../components/BottomButtons/BackButton'
export default function CementiousWp() {
  return (
      <>
          <Navbar1 />
             <div className='products-page-product-container' id='CementitiousWPCoating'>
                <h3>Cementitious WP Coating </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/6.jpg' alt="" />
                    </div>

                <div className='product-page-content-container'>
                    <ul>
                        <li>Acrylic/SBR polymer modified cementitious waterproofing slurry coating.</li>
                        <li>Two component flexible modified waterproofing coating.</li>    
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
