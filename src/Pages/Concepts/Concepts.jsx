import React from 'react'
import "./Concepts.css"
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import BackButton from '../../components/BottomButtons/BackButton'
import UpButton from '../../components/BottomButtons/UpButton'
import { Link } from 'react-router-dom'
export default function Concepts() {
  return (
    <div className = 'Concepts'>
      <Navbar1 />
      <div className = "ConceptWaterProofing">
        <div className="ConceptWaterProofingInfo">
          <h1>Concept of waterproofing</h1>
          <p style={{textAlign:"left"}} >Waterproofing is the combination of materials of system that prevent the water intrusion into structural member of building as its finished of portion. The basic of waterproofing to prevent the structure from water/moisture and make it water tight. Water is very harmful to structure and it can give damages more than any natural disasters.</p>
        </div>
      </div>
      <div className = "Recommendations">
        <h2 style={{textAlign:"center", margin:"2rem 0",fontWeight:"800"}} >RECOMMENDATION</h2>
        <div className="RecommendationCards">
          <Link  to='/concepts/WaterSources' style={{gridRow:"1/2",gridColumn:"1/2"}} className="RecommendationCard">
            WATER SOURCES
          </Link>
          <Link to='/concepts/WaterProofingIndia' className="RecommendationCard">
            WATERPROOFING IN INDIA
          </Link>
          <Link to='/concepts/waterProofingProducts' style={{gridRow:"2/3",gridColumn:"1/2"}} className="RecommendationCard">
            WATERPROOFING PRODUCTS
          </Link>
          <Link to='/concepts/selectProduct' className="RecommendationCard">
            HOW TO SELECT RIGHT PRODUCTS  
          </Link>
        </div>
      </div>
      <UpButton/>
      <BackButton/>
      <Footer/>
    </div>
  )
}
