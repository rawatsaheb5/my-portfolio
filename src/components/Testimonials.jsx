import React from 'react'
import './testimonials.css';
import data from './reviews'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1} 
      pagination={{ clickable: true }}
      className='container testimonials_container'>
        {
          data.map(({ avatar, name, review }, index) => {
            
            return (
              <SwiperSlide key={index} className='testimonials'>
          <div className='client_avatar'>
            <img src={avatar} alt='AVATAR ONE' />
            
          </div>
          <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{ review}</small>

        </SwiperSlide>)
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials