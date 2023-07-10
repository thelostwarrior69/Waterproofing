import React from 'react'
import Navbar1 from '../../../components/Navbar/Navbar1'
import Footer from '../../../components/Footer/Footer'
import UpButton from '../../../components/BottomButtons/UpButton'
import BackButton from '../../../components/BottomButtons/BackButton'

export default function Poluurethera() {
  return (
      <>
          <Navbar1 />
          <div className='products-page-product-container' id='polyurethaneCoating'>
                <h3>Polyurethane Coating </h3>
                <div className='products-page-product'>
                    <div className='product-page-img-container'>
                        <img  className='product-page-img' src='/images/products/5.jpg' alt="" />
                    </div>

            <div className='product-page-content-container'>
              <p>Polyurethane Membranes are liquid-applied, highly permanent elastic, cold applied / cold curing, one component, polyurethane membrane used for long-lasting roof waterproofing. A solvent based, polyurethane roof waterproofing coating is based on pure elastomeric hydrophobic polyurethane resins. This unique method delivers superb mechanical, chemical, thermal, UV, and natural element resistance properties. Polyurethane liquid applied membrane cures by reaction with ground and air moisture</p>
              <strong>Applications: </strong>
              <ul style={{listStyleType:"disc"}}>
                  <li>Sloped Roof Waterproofing</li>
                  <li>Waterproofing of Balconies, Terraces, and Verandas</li>
                  <li>Waterproofing of Wet Areas (under-tile), such as Bathrooms, Kitchens, Balconies, and Auxiliary Rooms</li>
                  <li>Waterproofing of Pedestrian and Vehicular Traffic Decks, Podium and NTA area.</li>
                  <li>Waterproofing of Green Roofs, Flowerbeds, and Planter Boxes</li>
                  <li>Waterproofing of old Bitumen felts, Asphalt felts, EPDM and PVC Membranes, and old</li>
                  
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
