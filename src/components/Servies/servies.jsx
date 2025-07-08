import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/* UI/UX Design */}
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p><strong>Interactive Prototyping:</strong> Create clickable prototypes that bring your ideas to life before development begins.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p><strong>User Research & Testing:</strong> Conduct in-depth user interviews and usability tests to validate design decisions.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p><strong>Information Architecture:</strong> Organize content and features into intuitive structures that enhance findability.</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p><strong>Custom Web Applications:</strong> Build tailored solutions with modern frameworks like React, Angular, or Vue.js.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p><strong>API Integration:</strong> Connect your systems with third-party services through secure RESTful or GraphQL APIs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p><strong>Performance Optimization:</strong> Implement techniques to achieve lightning-fast page loads and smooth interactions.</p>
            </li>
            
          </ul>
        </article>

        {/* Content Creation */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p><strong>Strategic Content Planning:</strong> Develop editorial calendars aligned with your marketing objectives.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p><strong>SEO-Optimized Writing:</strong> Create content that ranks well while maintaining natural readability.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p><strong>Multimedia Production:</strong> Produce engaging videos, infographics, and interactive media.</p>
            </li>
           
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services