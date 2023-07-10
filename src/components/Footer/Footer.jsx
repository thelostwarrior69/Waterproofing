import React from 'react'
import "./Footer.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    useEffect(() => { 
        AOS.init({
            delay: 100,
            duration:1200
        });
    })
  return (
      <div className='Footer' >
          <div className="fst">
            <div >
                <div className="logo">
                    <img src="/images/logo.jpg" alt="" />
                    <h3 className='footerHeading' >Complete Waterproofing</h3> 
                </div>
                    We have competent workforce and supervisory staff backed up by highly experienced consultants,technical associates.Name
                <div className="handles">
                    <div className="links">
                        <i className="fa-brands fa-twitter fa-2x"></i>
                        <i className="fa-brands fa-facebook fa-2x"></i>
                    </div>
                </div>            
            </div>
            <div className="Services">
                <ul className="footerLi" >
                   <li><h3 className='footerHeading' >SERVICES</h3></li> 
                    <li> <Link to="/services/waterproofing" >- WaterProofing</Link> </li>
                    <li> <Link to="/services/epoxyFlooring" > - Epoxy Flooring System / Protective Paints</Link> </li>
                    <li> <Link to="/services/repair" > - Repair and Rehabilitation</Link> </li>
                    <li> <Link to="/services/insulation" > - Insulation </Link> </li>
                    <li> <Link to="/services/projectConsultancy" > - Project Consultancy</Link> </li>
                </ul>
            </div>
          </div>
          <div className="snd">
            <div className="products">
                <ul  className="footerLi">
                    <li><h3 className='footerHeading' >PRODUCTS</h3></li>
                    <li> <Link to="/products/pvcmembrane"> - PVC Membrane</Link></li>
                    <li> <Link to="/products/appmembrane"> - App Membrane</Link></li>
                    <li> <Link to="/products/sbsmembrane"> - SBS Membrane</Link></li>
                    <li> <Link to="/products/epdmMembrane"> - EPDM Membrane</Link></li>
                    <li> <Link to="/products/polyurethaneCoating"> - Polyurethane Coating</Link></li>
                    <li> <Link to="/products/CementitiousWPCoating"> - Cementitious WP Coating</Link></li>
                    <li> <Link to="/products/CrystallineWaterproofing"> - Crystalline Waterproofing</Link></li>
                    <li> <Link to="/products/TPOmembranes"> - TPO Membranes</Link></li>
                    <li> <Link to="/products/RubberBasedEMBFlexibleAcrylicCoating"> - Rubber Based EMB & Flexible</Link></li>
                    <li> <Link to="/products/RubberBasedEMBFlexibleAcrylicCoating"> - Acrylic Coating</Link></li>
                </ul>
            </div>
            <div className="contact">
                <ul className="footerLi">
                    <li><h3 className='footerHeading' >CONTACT US</h3></li>  
                    <li> <a href="tel:1141574032"> <i className="fa-solid fa-phone"></i> 1141574032</a></li>
                    <li> <a href="tel:9873004032"><i className="fa-solid fa-phone"></i> 9873004032</a> </li>
                    <li> <a href ="http://www.completewaterproofing.in/" ><i className="fa-solid fa-link" style={{paddingRight:"5px"}}></i> www.complete water proofing.in</a></li>
                     <li><a href="tel:+919873004032"><i className ="fa-solid fa-phone" style={{paddingRight:"5px"}}></i> +91 9873004032</a></li>
                    <li><a href="https://www.google.com/maps?q=28.6357001,77.3107258"><i className="fa-solid fa-location-pin" style={{paddingRight:"5px"}}></i>  Plot No-48, FF 1, Hasanpur,IP Extn-Delhi-110092</a></li>
                    <li><a target='_blank' href="https://wa.me/+919873004032" ><i className="fa-brands fa-whatsapp"style={{paddingRight:"5px"}}></i> whatsapp</a></li>
                    <li><a href="mailto:cwsi_wp@yahoo.com"><i className="fa-solid fa-envelope" style={{paddingRight:"5px"}}></i> cwsi_wp@yahoo.com</a></li>  
                </ul>
            </div>
              
          </div>
    </div>
  )
}
