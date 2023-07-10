import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar1 from '../../components/Navbar/Navbar1'
import { Link } from 'react-router-dom'
import "./ProductsPage.css"
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'

export default function ProductsPage() {
  return (
    <div className='ProductPage'>
      <Navbar1 />
       <div className='products-page-container'>
            <h3>Products we Offer</h3>

            <div className='row '>
                <Link className='products-item col-md-2 col-sm-3' to='/products/appmembrane'>
                    <div className='products-item-inner'>
                        <div className='products-item-logo'>
                            <i className = "fa-solid fa-paint-roller"></i>
                        </div>
                        <div className='products-item-heading'>
                        APP Membrane
                        </div>
                    </div>
                  </Link>
                  
                <Link className='products-item col-md-2 col-sm-3' to='/products/CementitiousWPCoating'>
                    <div className='products-item-inner'>

                        <div className='products-item-logo'>
                        <i className="fa-brands fa-connectdevelop"></i>
                        </div>
                        <div className='products-item-heading'>
                            Cementitious WP Coating
                        </div>
                    </div>
                  </Link>
                  
                <Link className='products-item col-md-2 col-sm-3' to='/products/CrystallineWaterproofing'>
                    <div className='products-item-inner'>

                        <div className='products-item-logo'>
                            <i className ="fa-brands fa-connectdevelop"></i>
                        </div>
                        <div className='products-item-heading'>
                            Crystalline Waterproofing
                            
                        </div>
                    </div>
                </Link>
                  
                <Link className='products-item col-md-2 col-sm-3' to='/products/epdmMembrane'>
                    <div className='products-item-inner'>

                        <div className='products-item-logo'>
                            <i className ="fa-brands fa-connectdevelop"></i>
                        </div>
                        <div className='products-item-heading'>
                            EPDM Membrane
                        </div>
                    </div>
                </Link>

                  
                <Link className='products-item col-md-2 col-sm-3' to='/products/PolyureaCoating'>
                    <div className='products-item-inner'>
                        <div className='products-item-logo'>
                        <i className="fa-solid fa-user-tie"></i>
                        </div>
                        <div className='products-item-heading'>
                            Polyurea Coating
                        </div>
                    </div>
                  </Link>
                  
                 
                <Link className='products-item col-md-2 col-sm-3' to='/products/polyurethaneCoating'>
                    <div className='products-item-inner'>
                        <div className='products-item-logo'>
                        <i className="fa-solid fa-user-tie"></i>
                        </div>
                        <div className='products-item-heading'>
                             Polyurethane Coating
                        </div>
                    </div>
                </Link> 

                <Link className='products-item col-md-3 col-sm-3' to='/products/pvcmembrane'>
                    <div className='products-item-inner'>
                        <div className='products-item-logo'>
                            <i className = "fa-solid fa-umbrella"></i>
                        </div>
                        <div className='products-item-heading'>
                            PVC Membrane
                        </div>
                    </div>
                  </Link>
                  
              <Link className='products-item col-md-3 col-sm-6' to='/products/RubberBasedEMBFlexibleAcrylicCoating'>
                    <div className='products-item-inner product-last-two'>
                        <div className='products-item-logo'>
                        <i className="fa-solid fa-user-tie"></i>
                    </div>
                        <div className='products-item-heading'>
                        Rubber Based EMB & Flexible Acrylic Coating
                        </div>
                    </div>
                </Link>
                
                <Link className='products-item col-md-3 col-sm-3' to='/products/sbsmembrane'>
                    <div className='products-item-inner'>
                        <div className='products-item-logo'>
                            <i className="fa-solid fa-wrench"></i>
                        </div>
                        <div className='products-item-heading'>
                        SBS Membrane
                        </div>
                    </div>
                </Link>

                <Link className='products-item col-md-3 col-sm-6' to='/products/TPOmembranes'>
                    <div className='products-item-inner product-last-two'>

                        <div className='products-item-logo'>
                        <i className="fa-solid fa-user-tie"></i>
                        </div>
                        <div className='products-item-heading'>
                        TPO Membranes
                        </div>
                    </div>
                </Link>
            </div>        
          </div>
          <UpButton />
          <BackButton/>
      <Footer/>
    </div>
  )
}
