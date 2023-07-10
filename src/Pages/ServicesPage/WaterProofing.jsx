import React from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import UpButton from '../../components/BottomButtons/UpButton'
import BackButton from '../../components/BottomButtons/BackButton'

export default function WaterProofing() {
  return (
      <>
          <Navbar1 />
          <div className='services-page-service-container' id='waterproofing'>
                <h3>Water Proofing</h3>
                <div className='services-page-service'>
                    <div className='service-page-img-container'>
                        <img  className='service-page-img' src='../images/waterproofing.jpg' alt="" />
                    </div>

                    <div className='service-page-content-container'>
                        <p>Complete Waterproofing System INC specializes in waterproofing, expansion , joint treatment of structure.</p>
                        <p>We offer our Services for the following</p>
                        <ul>
                            <li>Airports, Metro Rails, Industries etc.</li>
                            <li>Waterproofing of U/G structure; e.g. Basement, Retaining Walls, Raft etc.</li>
                            <li>Tunnels</li>
                            <li>Swiming Pool, Lake, Water Retaining Structure</li>
                            <li>Sunken Area, Wet Area, Water Tanks</li>
                            <li>Podium & amp; NTA Area</li>
                            <li>Terrace, Terrace Gardens</li>
                            <li>STP/ETP Tanks & nbsp;</li>
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
