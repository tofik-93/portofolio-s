import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/p4.jpg'
import HeaderSocials from './HeaderSocials'
const Headers = () => {
  return (
 <header>
  <div className="container header_container">
    <h5>Hello I'm</h5>
    <h1>Tofik Mifta</h1>
    <h5 className="text-light">fullstack Developer</h5>
    <CTA/>
    <HeaderSocials/>

    <div className="me">
      <img src={ME} alt=""/>
    </div>
    <a href="#contact" className='scroll_down'>Scroll Down</a>
  </div>
 </header>
  )
}

export default Headers