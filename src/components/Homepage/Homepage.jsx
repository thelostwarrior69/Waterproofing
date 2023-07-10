import React from 'react'
import "./Homepage.css"
import { HomePageCarrouselData } from '../../common/HomePageCarrouseldata'
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Homepage() {
  return (
    <div className='homepage'>

      <Swiper
        slidesPerView={1}
        
        loop={true}
        cssMode={true}
        navigation={true}
        
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className=""
      >

        {
          HomePageCarrouselData.map((element)=>{
            return(
              <SwiperSlide>
              <div className="home-carrousel-cont">
                <img src={element.img} alt="" className='home-carrousel-img'/>
              </div>  
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      
      
      <div className="mycontainer">
        <h1 className='h1'>Complete Waterproofing System INC</h1>
        <p className='lead'>
        An ISO 9001:2015 Certified Company
        </p>
        <div className ="btns">
        <Link to='/about'><button className ='btn btn-lg btn-info home-btn' >Learn More</button></Link>
        <Link to='/services'><button className ='btn btn-lg btn-info home-btn' >Services</button></Link>
        </div>
      </div>
    </div>
  )
}
