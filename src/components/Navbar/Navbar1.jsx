import React from 'react'
import "./Navbar1.css"
import { Link } from 'react-router-dom'

export default function Navbar1({page}) {
  return (
    <nav className="navbar navbar-expand-lg" style={{padding:"0", backgroundColor: page === "home"?"#999898":"rgb(92,92,92)"}} id='navbar'>
          <div className="container-fluid Navbar" >
              {/* <div className="" style={{display:"flex",justifyContent:"center",width:"100%"}}> */}
                  
            <a className="navbar-brand ms-5" href="/">
                < img src="/images/logo.jpg" alt="IMG" id='logo'/>
            </a>
            <button className="navbar-toggler" style={{padding: "0 2%"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon"></span>
              </button>
              
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav" style={{display:"flex",gap:"1rem",width: "100%",justifyContent: "space-around"}}>
                    <li className="nav-item">
                          <a className="nav-link active Navli" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item dropdown" >
                        <Link className="nav-link Navli dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" >About Us</Link>
                        <ul className="dropdown-menu animate slideIn" style={{backgroundColor: page === "home"?"#999898":"rgb(92,92,92)", padding:"0"}} >
                            <li><a className="dropdown-item Navli" style={{fontSize:"1.2rem"}} href="/about">About Company</a></li>
                            <li><a className="dropdown-item Navli" style={{fontSize:"1.2rem"}} href="/aboutCeo">CEO Message</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link Navli"  to="/concepts">Concepts</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link  Navli"  to="/services" >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link Navli"  to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link Navli"  to="/clients">Clients</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link Navli"  to="/certificates">Certificate</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link Navli" to="/gallery">Gallery</Link>
                    </li> 
                    <li className="nav-item">
                        <Link className="nav-link Navli" to="/contacts">Contacts</Link>
                    </li> 
                    {/* <li className="nav-item dropdown" >
                        <Link className="nav-link Navli dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Contacts</Link>
                        <ul className="dropdown-menu animate slideIn " style={{backgroundColor: page === "home"?"#999898":"rgb(92,92,92)", padding:"0"}} >
                            <li><a className="dropdown-item Navli" href="tel:+919873004032"><i className ="fa-solid fa-phone" style={{paddingRight:"5px"}}></i> +91 9873004032</a></li>
                            <li><a className="dropdown-item Navli" href="https://www.google.com/maps?q=28.6357001,77.3107258"><i className="fa-solid fa-location-crosshairs" style={{paddingRight:"5px"}}></i> Location</a></li>
                            <li><a className="dropdown-item Navli"target='_blank' href="https://wa.me/+919873004032" ><i className="fa-brands fa-whatsapp"style={{paddingRight:"5px"}}></i> whatsapp</a></li>
                            <li><a className="dropdown-item Navli" href="mailto:cwsi_wp@yahoo.com"><i className="fa-solid fa-envelope" style={{paddingRight:"5px"}}></i> cwsi_wp@yahoo.com</a></li>
                        </ul>
                    </li>   */}
                </ul>
            </div>
              {/* </div> */}
        </div>
    </nav>
  )
}
