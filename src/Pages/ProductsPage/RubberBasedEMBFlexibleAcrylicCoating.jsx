import React from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'

export default function RubberBasedEMBFlexibleAcrylicCoating() {
  return (
      <>
          <Navbar1 />
              <div className='products-page-product-container' id='RubberBasedEMB&FlexibleAcrylicCoating'>
                <h3>Rubber Based EMB & Flexible Acrylic Coating </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/10.jpeg' alt="" />
                    </div>
                    <div className='product-page-content-container'>
                        <strong>1. Rubber Based:</strong>
                        <p>Liquid applied bituminous coatings are highly flexible, high elongation and low permeability to water. The products are widely used in waterproofing of foundations, balconies,wet area and re-coat over the APP/SBS bituminous membrane.</p>
                        <strong>2. Acrylic Based Flexible Coating:</strong>     
                        <p>Liquid applied acrylic coatings are highly flexible, high elongation, heat resistance, UV protective and low permeability to water. The products are widely used in waterproofing of terrace, slopping roofs, top coat over EMB coating, balconies,wet area etc.</p>
                    </div>
                </div>
          </div>
          <UpButton />
          <BackButton/>
          <Footer/>
      </>
  )
}
