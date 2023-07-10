import React, { useState,useEffect } from "react";
import '../Certificates/Certificates.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SingleImageModal from "../CertificateModal/SingleImageModal";

export default function App({data}) {

  const [certificateModal,setCertificateModal] = useState(false);
  const [currentCertificate,setCurrentCertificate] = useState();
  const [currentDescription,setCurrentDescription] = useState();

  const openCertificate= (img,desc)=>{
    setCurrentCertificate(img);
    setCurrentDescription(desc);
    setCertificateModal(true)
  }
  
  return (
    <>
      <Swiper
        // slidesPerView={3}
        // spaceBetween={30}
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween: 20,
          },
          450: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >

        {
          data.map((element)=>{
            return(
              <SwiperSlide>
                <div className='certificate-container' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>openCertificate(element.img,element.description)}>

                  <div className='certificate-img-container'>
                    <img src={element.img} alt="" className='certificate-img'/>

                  </div>
                  <h4 style={{marginTop:"4%",textAlign:"center"}}>{element.description}</h4>

                </div>
                </SwiperSlide>
            )
          })
        }
      </Swiper>

      { certificateModal && <SingleImageModal img={currentCertificate} desc={currentDescription} setCertificateModal={setCertificateModal} />}
    </>
  );
}