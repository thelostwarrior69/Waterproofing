import React from 'react'
import "./Concepts.css"
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import BackButton from '../../components/BottomButtons/BackButton'
import UpButton from '../../components/BottomButtons/UpButton'

export default function Concepts() {
  return (
    <div className = 'Concepts'>
      <Navbar1 />
      <div className = "ConceptWaterProofing">
        <div className="ConceptWaterProofingInfo">
          <h1>Concept of waterproofing</h1>
          <p style={{textAlign:"left"}} >Waterproofing is the combination of materials of system that prevent the water intrusion into structural member of building as its finished of portion. The basic of waterproofing to prevent the structure from water/moisture and make it water tight. Water is very harmful to structure and it can give damages more than any natural disasters.</p>
        </div>
        {/* <div className="ConceptWaterProofingImage">
            <img src="/images/coverpage.jpg" alt="conceptwaterproofing" />
        </div> */}
      </div>
      <div className = "Recommendations">
        <h2 style={{textAlign:"center", margin:"2rem 0",fontWeight:"800"}} >RECOMMENDATION</h2>
        <div className="RecommendationCards">
          <a  href='/concepts/WaterSources' style={{gridRow:"1/2",gridColumn:"1/2"}} className="RecommendationCard">
            WATER SOURCES
          </a>
          <a href='/concepts/WaterProofingIndia' className="RecommendationCard">
            WATERPROOFING IN INDIA
          </a>
          <a href='/concepts/waterProofingProducts' style={{gridRow:"2/3",gridColumn:"1/2"}} className="RecommendationCard">
            WATERPROOFING PRODUCTS
          </a>
          <a href='/concepts/selectProduct' className="RecommendationCard">
            HOW TO SELECT RIGHT PRODUCTS  
          </a>
        </div>
      </div>
      <UpButton/>
      <BackButton/>
      <Footer/>
    </div>
  )
}
