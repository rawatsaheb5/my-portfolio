import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../assets/me1.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Neeraj Kumar Rawat</h1>
        <h5 className='text-light'>Full Stack Developer </h5>
        <CTA />
        <div className='me'>
          <img src={Me} alt='me' />

        </div>
        <a href='#contact' className='scroll_down'>Scroll Down
        </a>
        <HeaderSocials />

      </div>
    </header>
  )
}

export default Header