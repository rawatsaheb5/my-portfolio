import React from 'react'
import './about.css';
import ME from '../assets/me3.jpg'
import {BsAward} from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5>
                Experience
              </h5>
              <small>
                8+ months self-working
              </small>
            </article>
            
            {/* <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>
                Clients
              </h5>
              <small>
               0+ clients worldWide
              </small>
            </article> */}
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>
                Projects
              </h5>
              <small>
               10+ Completed
              </small>
            </article>

          </div>

          <p>
            Hi there! My name is Neeraj Kumar Rawat. I am B.Tech 3rd Year Student from UIET Kanpur.
            I make Web Development projects. I love to solve problems related to Data Structures.
          </p>
          <a href='#contact' className='btn btn'>Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About