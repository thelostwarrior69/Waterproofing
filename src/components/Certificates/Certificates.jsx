import React, { useState,useEffect } from 'react'
import './Certificates.css'
import { CompaniesCertificateArray,CompletionCertificateArray } from '../../common/Certificates'
import { setting } from '../../common/setting'
import Footer from '../Footer/Footer'
import Navbar1 from '../Navbar/Navbar1'
import CertificateCarrousel from '../CertificateCarrousel/CertificateCarrousel'
import UpButton from '../BottomButtons/UpButton'
import BackButton from '../BottomButtons/BackButton'

const Certificates = () => {
  setting.slidesToShow=3;
  setting.speed= 800;

  const [data,setData] = useState([]);

  useEffect(() => {
    setData(CompaniesCertificateArray);
  }, [])
  

  return (
    <>
      <Navbar1 />

      <div className='certificates-component-cont'>

        <h2>Our Certificates</h2>

        <div className='certificate-btn-container'>
          <button className={(data===CompaniesCertificateArray)?'certificate-btn clicked_btn':'certificate-btn'} onClick={()=>setData(CompaniesCertificateArray)}>Companies Certificates</button>
          <button className={(data===CompletionCertificateArray)?'certificate-btn clicked_btn':'certificate-btn'} onClick={()=>setData(CompletionCertificateArray)}>Completion Certificates</button>
        </div>

        <div className='certificate-slider-container'>
          <CertificateCarrousel data = {data}/>
        </div>
        
      </div>

      <UpButton/>
      <BackButton/>
      <Footer/>
    </>
  )
}

export default Certificates