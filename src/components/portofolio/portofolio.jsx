import React from 'react'
import './portofolio.css'
import Img1 from '../../assets/school.png'
import Img2 from '../../assets/p2.jpg'
import Img3 from '../../assets/spotify.jpeg'
import Img4 from '../../assets/quiz-app.png'
import Img5 from '../../assets/porto.png'
import Img6 from '../../assets/p5.jpg'

const data =[
  {
    id:1,
    image:Img1,
    title:'School-Mangement-System',
     github:"https://github.com/ozone-tech-dev/School-management-system/tree/tofik_frontend/Frontend_1",
     demo:"https://github.com/ozone-tech-dev/School-management-system/tree/tofik_frontend/Frontend_1"

  },
  {
    id:2,
    image:Img2,
    title:'E-commerce',
     github:"https://github.com/tofik-93/",
     demo:"https://www.mifta.com"

  },
  {
    id:3,
    image:Img3,
    title:'Spotify',
     github:"https://github.com/tofik-93/spotify",
     demo:"https://github.com/tofik-93/spotify"

  },
  {
    id:4,
    image:Img4,
    title:'Quiz app',
     github:"https://github.com/tofik-93/quiz-app-",
     demo:"https://www.fhft.com"

  },
  {
    id:5,
    image:Img5,
    title:'Portofolio ',
     github:"www.nine.com",
     demo:"https://www.hiane.com"

  },
  {
    id:6,
    image:Img6,
    title:'Smart-contract',
     github:"www.jina.com",
     demo:"https://www.tnnet.com"

  },
 
]

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My React work</h5>
      <h2>Portofolio</h2>
      <div className="container portfolio_container">
      {
        data.map(({id,image,title,github,demo})=>{
       return(  <article key={id} className='portofolio_item'>
          <div className="portofolio_item-image">
            <img src={image} alt={title} />
          </div>
          
        <h3>{title}</h3>
        <div className="portofolio_item-cta">
        <a href={github} className="btn">Github</a>
        <a href={ demo} className='btn btn-primary' target='blank' rel="noopener noreferrer">Live Demo</a>

        </div>
       </article>)
        })
      }
      
     
      </div>
    </section>
  )
}

export default Portfolio