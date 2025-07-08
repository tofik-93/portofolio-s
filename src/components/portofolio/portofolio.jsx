import React from 'react';
import './portofolio.css';
import Img1 from '../../assets/school.png';
import Img2 from '../../assets/p2.jpg';
import Img3 from '../../assets/spotify.jpeg';
import Img4 from '../../assets/quiz-app.png';
import Img5 from '../../assets/porto.png';
import Img6 from '../../assets/p5.jpg';

const data = [
  {
    id: 1,
    image: Img1,
    title: 'School Management System',
    github: 'https://github.com/ozone-tech-dev/School-management-system/tree/Filmon_frontend/Frontend_1',
    demo: 'https://school-management-demo.example.com',
  },
  {
    id: 2,
    image: Img2,
    title: 'E-commerce Platform',
    github: 'https://github.com/tofik-93/ecommerce-repo',
    demo: 'https://ecommerce-demo.example.com',
  },
  {
    id: 3,
    image: Img3,
    title: 'Spotify Clone',
    github: 'https://github.com/Filmon-93/spotify',
    demo: 'https://spotify-clone-demo.example.com',
  },
  {
    id: 4,
    image: Img4,
    title: 'Quiz Application',
    github: 'https://github.com/Filmon-93/quiz-app-',
    demo: 'https://quiz-app-demo.example.com',
  },
  {
    id: 5,
    image: Img5,
    title: 'Personal Portfolio',
    github: 'https://github.com/Filmon-93/portfolio',
    demo: 'https://portfolio-demo.example.com',
  },
  {
    id: 6,
    image: Img6,
    title: 'Smart Contract Dashboard',
    github: 'https://github.com/Filmon-93/smart-contract',
    demo: 'https://smart-contract-demo.example.com',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="portfolio__container">
          {data.map(({ id, image, title, github, demo }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/assets/fallback-image.png';
                    e.target.alt = 'Project placeholder';
                  }}
                />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn btn--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${title}`}
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo of ${title}`}
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;