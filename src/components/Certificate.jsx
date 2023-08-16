import React from "react";
import "./certificate.css";
import WebD from '../assets/NeerajRawatWDCertificate.jpg'


const Certificate = () => {
  return (
    <section id="certificate">
      <h5>My Certificate</h5>
      <h2>Certificate</h2>
      <div className="certificate">
        <div className="certificate-item">
          <h3>Coding</h3>
          <ul>
            <li>
              <h5>Data Structure and Algorithms</h5>
              <a href="https://ninjasfiles.s3.amazonaws.com/certificate2430431bbea3e25aa0b2f8a20252b6e7788babb.pdf">view</a>
            </li>
            
          </ul>
        </div>
        <div className="certificate-item">
          <h3>Web Development</h3>
          <ul>
            <li>
              <h5>Mern Stack Development</h5>
              <a href={WebD}>view</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
