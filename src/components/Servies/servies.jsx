import React from 'react'
import './servies.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id ='services'>
      <h5>Whar I Offer</h5>
      <h2>Services</h2>

<div className="container services_container">
  <article className="service">
    
  
<div className="service_head">
  <h3>UI/UX Desgin</h3>
  </div>
  <ul className='service_list'>
    <li>
<BiCheck className='service_list-icon'/>
<p>User-Centered Design: Crafting intuitive and user-focused interfaces for seamless digital experiences.. </p>
    </li>
    <li>
<BiCheck className='service_list-icon'/>
<p>Consistency and Standards: Delivering uniform design elements to enhance usability and predictability.. </p>
    </li>
    <li>
<BiCheck className='service_list-icon'/>
<p>Responsive Design: Creating adaptable layouts for optimal performance across all devices </p>
    </li>
  
  </ul>

</article>
  {/* END OF UI/UX  */}
  <article className="service">
    
  
<div className="service_head">
  <h3>Web developement</h3>
  </div>
  <ul className='service_list'>
    <li>
<BiCheck className='service_list-icon'/>
<p>User-Centered Design: Developing intuitive and user-focused web interfaces for seamless experiences.. </p>
    </li>
    <li>
<BiCheck className='service_list-icon'/>
<p>Consistency and Standards: Ensuring uniform design elements and code practices for enhanced usability. </p>
    </li>
    <li>
<BiCheck className='service_list-icon'/>
<p>Responsive Design: Creating adaptable web layouts that perform optimally on all devices.. </p>
    </li>
 
 

  </ul>

</article>
  {/* web developement */}
  <article className="service">
    
  
<div className="service_head">
  <h3>The Conte</h3>
  </div>
  <ul className='service_list'>
    <li>
<BiCheck className='service_list-icon'/>
<p>User-Centered Design: Developing intuitive and user-focused web interfaces for seamless experiences. </p>
    </li>
    <li>
<BiCheck className='service_list-icon'/>
<p>Consistency and Standards: Ensuring uniform design elements and code practices for enhanced usability.</p>
    </li>
    <li>
<BiCheck className='service_list-icon'/>
<p>Responsive Design: Creating adaptable web layouts that perform optimally on all devices </p>
    </li>
 
 
  </ul>

</article>
  {/* END OF THE CONTENT CREARTION */}
</div>

    </section>
  )
}

export default Services