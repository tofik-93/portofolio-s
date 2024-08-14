import React from 'react'
 import './footer.css'
 import {FaFacebookF} from 'react-icons/fa'
 import { FaLinkedin  } from 'react-icons/fa';
 import {FiInstagram} from 'react-icons/fi'
 import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>Tofik Mifta</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#exprience">Exprience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#porotfolio">Portofoilo</a></li>
      <li><a href="#testimonal">Testimonal</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>


    <div className="footer_socials">
      <a href="https://facbook.com"><FaFacebookF/></a>
      <a href="https://www.instagram.com/tof.k_m.f/"><FiInstagram/></a>
     <a href="https://twitter.com"><IoLogoTwitter/></a>
       <a href="ttps://www.linkedin.com/in/tofik-mifta-8856452b1/"><FaLinkedin/></a>
       

    </div>  
  <div className="footer_copyright">
    <small>&copy; Tofik Mifta website. All right reserved</small>
  </div>
   </footer>
  )
}

export default Footer