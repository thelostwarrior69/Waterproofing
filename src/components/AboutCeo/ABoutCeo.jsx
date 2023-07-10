import React from 'react'
import Footer from '../Footer/Footer'
import "./AboutCeo.css"
import Navbar1 from '../Navbar/Navbar1'
export default function ABoutCeo() {
  return (
      <div className='ABoutCeo'>
          <Navbar1 />
          <div className="AboutCeoContainer">
              <h1>CEO Message</h1>
              <div className="imageContainer">
                  <img src="images/Ceo/ceo_image.jpeg" alt="" />
                  <div className="textContainer">
                      <span> We take this opportunity to introduce ourselves as an organization specializing in the field of waterproofing, repair & rehabilitation, epoxy flooring, protective coatings, expansion joints treatment and project consultancy services.
                        We an<b> ISO 9001: 2015 company</b>, professionally managed, equipped with latest know-how, tools and equipments, competent workforce and supervisory staff backed up by highly experienced consultants, technical associates and using latest high quality products to provide you complete solution for waterproofing, epoxy flooring and protective coatings. Waterproofing is our strength for effective, economical, trustworthy and time bound execution of jobs.
                        </span>
                  </div>
              </div>
          </div>
          <Footer/>
    </div>
  )
}
