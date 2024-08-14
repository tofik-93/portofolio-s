import React from 'react'
import Me from '../../assets/p4.jpg'
import './About.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'; 
function About() {
  return (
   <section id='about'>
  <h5>About Me</h5>
 <div className="container about_container">
 <div className="about_me">
  <div className="about_me-image">
    <img src={Me} alt="About Image" />
  </div>
 </div>
<div className='about_content'>
  <div className="about_cards">
    <article className="about_card">
     <FaAward className='about_icon'/>
      <h5>Expreience</h5>
<small>3+ Years Working </small>
    </article>
    
    <article className="about_card">
     <FiUsers className='about_icon'/>
      <h5>Clients</h5>
<small> 50+ worldwide </small>
    </article>

    <article className="about_card">
     <VscFolderLibrary className='about_icon'/>
      <h5>Projedts</h5>
<small>55+ Completed</small>
    </article>
  </div>
  <p>I am Tofik Mifta , I am Fullstack for several years and 
    worked on moblie Application ,
    now I am 4th year student at Astu</p>
<a href="#contact" className='btn btn-primary'>
  Let a Talk
</a>
</div>

 </div>
   </section>
   
  
  )
}

export default About