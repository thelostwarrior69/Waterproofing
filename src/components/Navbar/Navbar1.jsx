import React from 'react'
import "./Navbar1.css"
import { Link } from 'react-router-dom'

export default function Navbar1({page}) {
  return (
    <nav className="navbar navbar-expand-lg" style={{padding:"0", backgroundColor: page === "home"?"#999898":"rgb(92,92,92)"}} id='navbar'>
          <div className="container-fluid Navbar" >
              {/* <div className="" style={{display:"flex",justifyContent:"center",width:"100%"}}> */}
                  
            <Link className="navbar-brand ms-5" to="/">
                < img src="/images/logo.jpg" alt="IMG" id='logo'/>
            </Link>
            <button className="navbar-toggler" style={{padding: "0 2%"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon"></span>
              </button>
              
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav" style={{display:"flex",gap:"1rem",width: "100%",justifyContent: "space-around"}}>
                    <li className="nav-item">
                          <Link className="nav-link active Navli" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown" >
                        <Link className="nav-link Navli dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" >About Us</Link>
                        <ul className="dropdown-menu animate slideIn" style={{backgroundColor: page === "home"?"#999898":"rgb(92,92,92)", padding:"0"}} >
                            <li><Link className="dropdown-item Navli" style={{fontSize:"1.2rem"}} to="/about">About Company</Link></li>
                            <li><Link className="dropdown-item Navli" style={{fontSize:"1.2rem"}} to="/aboutCeo">CEO Message</Link></li>
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
                    
                </ul>
            </div>
    
        </div>
    </nav>
  )
}
