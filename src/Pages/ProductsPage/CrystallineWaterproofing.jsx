import React from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'

export default function CrystallineWaterproofing() {
  return (
      <>
          <Navbar1 />
          <div className='products-page-product-container' id='CrystallineWaterproofing'>
                <h3>Crystalline Waterproofing </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/8.jpg' alt="" />
                    </div>

            <div className='product-page-content-container'>
              <p>Vandex invented crystalline waterproofing technology in 1943 &ndash; founding a whole new industry and gaining Worldwide recognition for its performance and unparalleled high quality in waterproofing and protection.In 1943 the Danish chemist Lauritz Jensen patented the new crystalline active concrete waterproofing method. In 1946 he founded his first company and called it VANDEX ("water out"). </p>
              <p>Chemical reaction between hydration product of cement and crystalline active ingredients with resulting crystal formation in concrete. The crystalline system includes :</p>
              <ul>
                <li>Crystalline Coating: Cementitious crystalline slurry applied with brush/broom/spray system on concrete masonary.</li>
                <li>Crystalline Admix: Crystalline active reagent added during the concrete mixing plant or during the pouring.</li>
                <li>Crystalline Mortar: Crystalline active reagent added in cement mortar mix.</li>
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
