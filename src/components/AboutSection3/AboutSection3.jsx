import React from 'react'
import './AboutSection3.css'

const AboutSection3 = () => {
  return (
    <div className='abouthow-container'>
        <h2>___ How we Build ___</h2>

        <p>At the Construction Company, Building is passion. With every project we undertake with a true love of what we do to make our Customer's vision a reality.</p>

        <div className='abouthow-box'>

            <div className='round-container'> 
                <div className="round">
                    <i class="fa-solid fa-person-digging"></i>
                </div>
                <h4>Construction Manager</h4>
                <p>The Construction has the ability to serve your needs for Construction Manager/General Contractor (CMGC) projects.</p>
            </div>

            <div className='round-container'> 
                <div className="round">
                    <i class="fa-solid fa-pen-ruler"></i>
                </div>
                <h4>Design and Build</h4>
                <p>Design Build is one of the many strengths of The Construction Company and we are viewed as a leader in the construction industry.</p>
            </div>

            <div className='round-container'> 
                <div className="round">
                    <i class="fa-solid fa-helmet-safety"></i>
                </div>
                <h4>Safety is Key</h4>
                <p>Our Company is dedicated to achieving safety excellence by promoting a culture that effectively identifies and manages risk through recognition, evaluation.</p>
            </div>

        </div>
    </div>
  )
}

export default AboutSection3