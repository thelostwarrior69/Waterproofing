import React from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'

export default function Tpomembrane() {
  return (
      <>
          <Navbar1 />
               <div className='products-page-product-container' id='TPOMembranes'>
                <h3>TPO Membranes </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/9.jpg' alt="" />
                    </div>

            <div className='product-page-content-container'>
             <p>There are many choices for TPO membranes. Only TPO offers excellent performance over &ldquo;standard&rdquo; TPO membranes and the industry&#39;s best guarantee: up to 35 years! Specifically, this patent-pending technology delivers next-generation performance against heat aging and UV degradation (the two key performance characteristics directly related to roof system longevity),and also exceeds all key ASTM standards for TPO membranes. Don't settle for standard TPO when you can get the advanced protection of TPO for your property.</p>
                    </div>
                </div>
          </div>
          <UpButton />
          <BackButton/>
          <Footer/>
      </>
  )
}
