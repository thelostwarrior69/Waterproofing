import React from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'

export default function PolyureaCoating() {
  return (
      <>
          <Navbar1 />
          <div className='products-page-product-container' id='PolyureaCoating'>
                <h3>Polyurea Coating </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/7.jpg' alt="" />
                    </div>

                <div className='product-page-content-container'>
                  <p>The latest coating technology is polyurea. Developed in the late 1980s for the automotive industry, this material is now used in a wide array of applications. Use of this material as industrial waterproofing has skyrocketed in popularity in the past decade due to its fast-curing, corrosion- and abrasion-resistant characteristics.</p>
                </div>
            </div>
      </div>
      <UpButton />
      <BackButton/>
          <Footer/>
      </>
  )
}
