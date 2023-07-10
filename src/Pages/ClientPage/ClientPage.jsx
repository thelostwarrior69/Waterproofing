import React from 'react'
import Footer from '../../components/Footer/Footer'
import { clientsData } from "../../common/clientsData.js"
import "./ClientPage.css"
import Navbar1 from '../../components/Navbar/Navbar1'
import BackButton from '../../components/BottomButtons/BackButton'
import UpButton from '../../components/BottomButtons/UpButton'
export default function ClientPage() {
  return (
      <div className='ClientPage'>
          <Navbar1 />
          <div className="ClientBody">
             
                <h1>Our Clients</h1>
              
              <div className="ClientTable">
                  <div className="ListHeading">
                      <div className="listLogo">
                         <h2> <strong>Client Logo</strong> </h2>
                      </div>
                      <div className="ClientName" >
                        <h2><strong>Client Name</strong> </h2> 
                      </div>
                  </div>
                  {
                      clientsData.map((item) => {
                          return (
                        <div className="listElement" style={{backgroundColor: item.id % 2 !== 0 ? "rgb(153, 215, 238)":""}}>
                            <div className="listLogo">
                                <img src={item.logo} className='logoImg' alt="" />
                            </div>
                            <div className="listName">
                               <b>{item.name}</b> 
                            </div> 
                        </div>
                          )})
                  }
              </div>
          </div>
          <UpButton/>
          <BackButton/>
          <Footer/>
    </div>
  )
}
