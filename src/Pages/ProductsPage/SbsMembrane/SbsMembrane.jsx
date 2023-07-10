import React from 'react'
import Navbar1 from '../../../components/Navbar/Navbar1'
import Footer from '../../../components/Footer/Footer'
import UpButton from '../../../components/BottomButtons/UpButton'
import BackButton from '../../../components/BottomButtons/BackButton'

export default function SbsMembrane() {
  return (
      <>
          <Navbar1 />
          <div className='products-page-product-container' id='sbsMembrane'>
                <h3>SBS Membrane</h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/3.jpg' alt="" />
                    </div>

                    <div className='product-page-content-container'>                        
                      <strong>Description</strong>
                      <p>SBS-modified bitumen cap ply for use in approved multi-ply membrane assemblies. SBS Membranes are composed of a proprietary formulation of elastomeric styrene-butadiene-styrene (SBS) polymer blended with special modified bitumen.</p>
                        <strong>i. Torch Applied SBS Membrane</strong>
                        <p>Elastomeric styrene-butadiene-styrene (SBS) polymer blended with special modified bitumen and is reinforced with tough, dimensionally stable non-woven polyester mat. The topside is surfaced with ceramic coated granules and the underside is surfaced with polyolefin burn-off film to facilitate heat welding.</p>
                        <strong>ii. Self-Adhesive, HDPE Plain/HDPE Cross laminated</strong>
                        <p>Elastomeric styrene-butadiene-styrene (SBS) polymer blended with special modified bitumen and top layer embedded with HDPE plain or cross laminated surface and under side with special cold applied adhesive protected with silicon relesing paper.</p>
                    </div>
                </div>
      </div>
      <UpButton />
      <BackButton />
      
          <Footer/>
      </>
  )
}
