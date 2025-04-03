import React from 'react'
import './tesetimonail.css'
import avat1 from '../../assets/girl.jpg'
import avat2 from '../../assets/ho.jpg'
import avat3 from '../../assets/palestine.gif'
import avat4 from '../../assets/p1.jpg'
import avat5 from '../../assets/p6.png'
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data1 =[
 {
  id:1,
  avater:avat1,
  avanum:"Avater one",
  clientName:"Ernest Acheiver",
  comment:"very good but some time stack and log out automatically"
 },
 {
  id:2,
  avater:avat2,
  avanum:"Avater Two",
  clientName:"Belay sewareg",
  comment:"very good but some time stack and log out automatically"
 },
 {
  id:3,
  avater:avat3,
  avanum:"Avater Three",
  clientName:"Helina Ahenafi",
  comment:"ooh tofa! what nice portfoli website I like it !"
 },
 {
  id:4,
  avater:avat4,
  avanum:"Avater Four",
  clientName:"Maruf jemal",
  comment:"how to order the your ecommerce website would you help me please?"
 },
 {
  id:5,
  avater:avat5,
  avanum:"Avater Five",
  clientName:"Meron Mifta",
  comment:"well done Filmon , I will expected more🤑"
 },

]
const Tesetimonail = () => {
  return (
  <section id ='testimonal'>
 <h5>Review form clients</h5>
 <h2>Testimonals</h2>
 <Swiper className="container testimonials_containel"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
   
      pagination={{ clickable: true }}
     >
  {
    data1.map(({id,avater,avanum,clientName,comment})=>{
      return (
        <SwiperSlide key={id} className="testimonial">
        <div className="client_avatar">
         <img src={avater} alt={avanum} />
         </div>
         <h5 className="client_name">{clientName}</h5>
         <small className="client_reivew"> {comment}
         </small>
        
       </SwiperSlide>
      )
    })
   
  }




 </Swiper>
  </section>
    
  )
}

export default Tesetimonail