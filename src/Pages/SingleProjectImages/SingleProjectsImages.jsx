import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import '../../components/GalleryCard/GalleryCard.css'
import SingleImageModal from '../../components/CertificateModal/SingleImageModal'
import BackButton from '../../components/BottomButtons/BackButton'
import './SingleProjectImages.css'
const SingleProjectsImages = () => {

  
  const location = useLocation()
  const { images } = location.state

  console.log("images  : ",images)

  const [imageModal,setImageModal] = useState(false)
  const [currentImage,setCurrentImage] = useState();

  return (
    <div>
      <Navbar1/>
      <div className='gallery-container'>

        <h3 style={{textAlign:'center'}} >{images[0].title}</h3>
        <div className='row'>
          {
            images.map((element)=>{
              
              return (
                <div className='col col-md-3 col-sm-6 col-xs-12 my-4 gallery-display' key={element.img} onClick={()=>{setImageModal(true); setCurrentImage(`.${element.img}`)}}>
                  <div className='gallery-card-container' >

                    <div className='gallery-card-img-container'> 
                        <img src={`.${element.img}`} alt='img' className='gallery-card-img'></img>
                    </div>

                  </div>
                </div>
              )
            })
          }
        </div>
        { imageModal && <SingleImageModal img={currentImage}  setCertificateModal={setImageModal} />}


      </div>
      <BackButton/>
      <Footer/>

    </div>
  )
}

export default SingleProjectsImages