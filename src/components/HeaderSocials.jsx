import React from 'react'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
      <div className='header_socials'>
          <a href='https://www.linkedin.com/in/neeraj-kumar-rawat-84a8a7228' target='_blank'><BsLinkedin /></a>
          <a href='https://github.com/rawatsaheb5' target='_blank'><BsGithub /></a>
      <a href='https://www.instagram.com/rawatsaheb5/' target='_blank'><BsInstagram /></a>
      
      </div>
  )
}

export default HeaderSocials