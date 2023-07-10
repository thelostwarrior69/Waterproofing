import React from 'react'
import AboutSection2 from "../../components/AboutSection2/AboutSection2"
import AboutSection4 from '../../components/AboutSection4/AboutSection4'
import Footer from '../../components/Footer/Footer'
import AboutSection3 from '../../components/AboutSection3/AboutSection3'
import "./AboutUs.css"
import Navbar1 from '../../components/Navbar/Navbar1'
import BackButton from '../../components/BottomButtons/BackButton'
import UpButton from '../../components/BottomButtons/UpButton'

export default function AboutUs() {
  return (
  
      <div className='AboutUs' >
          {/* <img className='Aboutcoverpage' src="../images/waterBackground2.jpg" alt="coverpage" /> */}
          <Navbar1 navColor = "white" bgColor = "rgb(37, 150, 190)" page = "aboutUs" />
          <AboutSection2 />
          <UpButton/>
          <BackButton/>

          <Footer/>
          
    </div>
 
  )
}
