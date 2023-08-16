
import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  const SkillItem = ({ title, experience }) => (
    <article className="experience_details">
      <BsFillPatchCheckFill className="experience_details-icon" />
      <div>
        <h4>{title}</h4>
        <small className="text-light">{experience}</small>
      </div>
    </article>
  );

  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        
        <div className="experience_dsa">
          <h3>Coding</h3>
          <div className="experience_content">
            <SkillItem title="C++" experience="Experienced" />
            <SkillItem title="Java" experience="Intermediate" />
            <SkillItem title="Data Structure And Algorithms" experience="Experienced" />
            
          </div>
        </div>
        <div className="experience_competitive">
          <h3>Competitive Coding</h3>
          <div className="experience_content">
            <SkillItem  title="Leetcode" experience="solved 200+" />
            <SkillItem title="GFG" experience="solved 200+" />
            <SkillItem title="Codeforces" experience="newbie" />
            <SkillItem title="Codechef" experience="3*" />
            
          </div>
        </div>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <SkillItem title="HTML" experience="Intermediate" />
            <SkillItem title="CSS" experience="Intermediate" />
            <SkillItem title="TAILWIND CSS" experience="Intermediate" />
            <SkillItem title="JAVASCRIPT" experience="Intermediate" />
            <SkillItem title="REACT" experience="Intermediate" />
            <SkillItem title="BOOTSTRAP" experience="Intermediate" />
          </div>
        </div>

        {/* BACKEND */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <SkillItem title="NODE JS" experience="Intermediate" />
            <SkillItem title="EJS" experience="Intermediate" />
            <SkillItem title="MONGO DB" experience="Intermediate" />
            <SkillItem title="AUTHENTICATION" experience="Intermediate" />
            <SkillItem title="EXPRESS" experience="Intermediate" />
          </div>
        </div>
        </div>
    </section>
  );
};

export default Experience;
