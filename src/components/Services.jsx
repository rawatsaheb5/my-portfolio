import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  const ServiceItem = ({ title }) => (
    <article className="service">
      <div className="service_head">
        <h3>{title}</h3>
      </div>
      <ul className="service_list">
        <li>
          <BiCheck className="service_list-icon" />
          <p>I use Javascript as a Frontend as well as Backend language to make project. I have been working in the web Development field from past 8 months. I have made 10+ projects and deployed on github. I have used APIs in my project which i have made.</p>
        </li>
      </ul>
    </article>
  );

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        
        <ServiceItem title="Web Development" />
        
      </div>
    </section>
  );
};

export default Services;
