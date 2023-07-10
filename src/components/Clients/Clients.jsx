import React from 'react'
import {clientsData}  from "../../common/clientsData.js"
import Client from '../Client/Client'
import "./Clients.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { setting } from '../../common/setting.js'; 

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Clients() {
  setting.dots='none';
  return (
    <div className='Clients' >
      <h1  >Our Clients</h1>
      <div className='our-clients-slider-container'></div>
      {/* <Slider {...setting}>
        {
            clientsData.map((item) => {
            return <Client img = {item.logo} name = {item.name} key = {item.id} />  
          })}
      </Slider> */}

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
          clientsData.map((item) => {
            return (
              <SwiperSlide>
                <Client img = {item.logo} name = {item.name} key = {item.id} /> 

              </SwiperSlide>
            ) 
          })
      }
      </Swiper>
    </div>
  )
}
