import React from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { FaPhone } from 'react-icons/fa'

import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  
  return (
    <nav>
      <a href='#' className={activeNav === '#'? 'active':""} onClick={()=>setActiveNav("#")}><AiFillHome /></a>
      <a href='#about' className={activeNav === '#about'? 'active':""} onClick={()=>setActiveNav("#about")}><BiUser /></a>
      <a href='#experience' className={activeNav === '#experience'? 'active':""} onClick={()=>setActiveNav("#experience")}><BiBook /></a>
      <a href='#services' className={activeNav === '#services'? 'active':""} onClick={()=>setActiveNav("#services")}><RiServiceLine /></a>
      <a href='#contact' className={activeNav === '#contact'? 'active':""} onClick={()=>setActiveNav("#contact")}><FaPhone /></a>

    </nav>
  )
}

export default Nav