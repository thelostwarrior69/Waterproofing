import React ,{useEffect } from 'react'
import Homepage from '../../components/Homepage/Homepage'

import ServicesSection from '../../components/ServicesSection/ServicesSection'
import Features from '../../components/Features/Features'
import Clients from '../../components/Clients/Clients'
import Footer from '../../components/Footer/Footer'
import Navbar1 from '../../components/Navbar/Navbar1'
import ServicesCarrousel from '../../components/ServicesCarrousel/ServicesCarrousel'

import UpButton from '../../components/BottomButtons/UpButton'
import { useState } from 'react'
import { useRef } from 'react'

export default function Home() {

  const ref = useRef();
  
  const [showUpButton,setShowUpButton] = useState(true)
  
  
  return (
    <div>
          <Navbar1 page = "home"/>
          <Homepage />
          <ServicesCarrousel />
          <ServicesSection />
          <Features />
          <Clients />
          <Footer/>
          { showUpButton && <UpButton/>}
    </div>
  )
}
