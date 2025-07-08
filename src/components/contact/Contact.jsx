import React from 'react'
import './contact.css'
import { FaLinkedin } from 'react-icons/fa';
import {RiMessengerLine} from 'react-icons/ri'
import { RiMetaFill} from 'react-icons/ri'
import  {useRef} from 'react'
import emailjs from 'emailjs-com'

const data =[
  {
  id:1,
  type:"Email",
  link:"malito:tofikmifta87@gmail.com",
  icon:<RiMetaFill className='contact_option-icon'/>,
  contacts:"tofikifta87@gmail.com",
  },
   {
    id:2,
    type:"Instagram",
    link:"https://www.instagram.com/tof.k_m.f/",
    icon:<RiMessengerLine className='contact_option-icon'/>,
    contacts:"Tofik Mifta "
    },
    {
      id:3,
      type:"Linkedin",
      link:"https://www.linkedin.com/in/Tofik-Mifta56452b1/",
      icon:<FaLinkedin className='contact_option-icon'/>,
      contacts:"+251940131696"
      },
  
]


const Contact = () => {
  const form= useRef();
  const sendEmail =(e) =>{
    e.preventDefault();
    emailjs.sendForm('service_xvagpxi','template_4bcm97e',form.current,'2YOMpGciZd3Tzt4Lk')
  e.target.reset() 
 }
  return (
    <section id='contact'>
      <h5>Get I Touch</h5>
      <h2>contact Me</h2>
<div className="container contact_container">
  <div className="contact_options">
    
    {data.map(({id,type,link,icon,contacts })=>{
      return(<article key ={id}className="contact_option">
     <div></div> 
<h4>{type}</h4>
<h5>{contacts}</h5>
<a href={link}>Send a message</a>
    </article>)
       
    })
  }
    </div>
    <form ref={form} onSubmit={sendEmail}>
      <input name="name" placeholder='You Full Name' required></input>
      <input type="email" name="email" placeholder='YourEmail' required />
      <textarea name="message"  rows="10" placeholder='your Message' required></textarea>
     <button type='submit' className='btn btn-primary'>Send message</button>
    </form>

</div>
    </section>
  )
}

export default Contact;