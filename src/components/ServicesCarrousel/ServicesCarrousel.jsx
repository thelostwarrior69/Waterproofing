import React from 'react'
import {data} from '../../common/ServiceCardData'
import { setting } from '../../common/setting'
import Slider from 'react-slick'
import ServicesCard from '../ServicesCard/ServicesCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './ServicesCarrousel.css'
const ServicesCarrousel = () => {
  return (
    <div className='ServicesCarrousel'>


        <div>Our Expertises</div>
        <p>Our team of experts has extensive experience in waterproofing a wide variety of structures, from residential homes to commercial buildings, and everything in between.</p>

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
        className="service-carrousel-swiper"
      >
        {
          data.map((element) => {
                
            return (
              <SwiperSlide>

                <ServicesCard img={element.img} content={element.content} path ={element.href} heading={element.heading}/>
              </SwiperSlide>
          )})
        }
      </Swiper>
    </div>
  )
}

export default ServicesCarrousel