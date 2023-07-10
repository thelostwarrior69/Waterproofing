import React from 'react'
import "./Contacts.css"
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import BackButton from '../../components/BottomButtons/BackButton'
import UpButton from '../../components/BottomButtons/UpButton'
import { useState } from 'react'
export default function Contacts() {
  const [formValues, setFormValues] = useState(
    {
      name: "",
      email: "",
      phone: "",
      message:""
    })
  const handleChangeInput = (e) => {
    setFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, phone, message } = formValues
    console.log(name, email, phone, message)
    const res = await fetch("https://cws-api.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, query : message
      })
    })
    const data = await res.json()
    if (data.message === "Email sent") {
      alert("Message Sent")
      setFormValues({
        name: "",
        email: "",
        phone: "",
        message:""
      })
    }
    else {
      alert("Message Not Sent")
    }
  }
  return (
      <div>
          <Navbar1/>
          <div className='contactpage'>
            <img className='page' src="../images/waterBackground1.jpg" alt="coverpage" />
            <div className="myContactcontainer">
                <h1 className='Contacth1'>Contact Us</h1>
            </div>
          </div>
            <h3 className='ContactHeading'>Lets Start a Conversation</h3>
          <div className="contactForm">
              <div className="left">
                  <h3>Ask How We Can Help You</h3>
                  <p>We're here to help you with all your waterproofing needs. If you have any questions, concerns, or would like to inquire about our services, please don't hesitate to get in touch with us. Our dedicated team of experts is ready to assist you in finding the best waterproofing solutions for your property.</p>
              </div>
              <div className="right">
                  <form onSubmit={handleSubmit}>
                      <input className='contactInput' onChange={handleChangeInput} type="text" name='name' placeholder="Name" value={formValues.name} />
                      <input className='contactInput' onChange={handleChangeInput} type="email" name='email'  placeholder="Email"  value={formValues.email} />
                      <input className='contactInput' onChange={handleChangeInput} type="text"  name='phone' placeholder="Phone" value={formValues.phone} />
                      <textarea className='contactTextarea' onChange={handleChangeInput}  name="message" id="" cols="30" rows="10" placeholder="Message" value={formValues.message}></textarea>
                      <button className='contactBtn' type="submit" >Send</button>
                  </form>
              </div>
          </div>

          <UpButton/>
          <BackButton/>
          <Footer/>
    </div>
  )
}
