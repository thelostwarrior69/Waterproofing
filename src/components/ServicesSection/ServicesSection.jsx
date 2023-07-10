import React from 'react'

import './ServicesSection.css'

const ServicesSection = () => {
  return (
    <div className='service-section-container'>

      <div className='s-section-heading'>
        <h3> <strong> Services We Offer </strong> </h3>
      </div>

      <div className='s-section-container-in'>

        <div className='icon-container'>
          <i class="fa-solid fa-screwdriver-wrench"></i>
          <div>Underground Structure</div>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-hammer"></i>
          <div>Industrial Projects</div>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-wrench"></i>
          <div>Roof Terraces</div>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-person-swimming"></i>
          <div>Swimming Pool</div>
        </div>

        <div className='icon-container' id='secondRow'>
          <i class="fa-solid fa-helmet-safety"></i>
          <div>Expansion Joints</div>

        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-cube"></i>
          <div>Water Reservoirs</div>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-paint-roller"></i>
          <div>Old Structures</div>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-box"></i>
          <div>Industrial Flooring</div>
        </div>

        <div className='icon-container' id='thirdRow'>
          <i class="fa-solid fa-brush"></i>
          <div>Protective Coating</div>
        </div>

        <div className='icon-container'>
          <i class="fa-brands fa-connectdevelop"></i>
          <div>Industrial Insulations</div>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-user-tie"></i>
          <div>Consultancy Services</div>
        </div>

        <div className='icon-container'>
          <i class="fa-solid fa-people-roof"></i>
          <div>Project Management</div>
        </div>

      </div>
    </div>
  )
}

export default ServicesSection