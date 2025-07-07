import React from 'react';
import ForoImg from '../assets/ForoImg.png';

const HeroSection = () => (
  <section className="hero-section" id="hero">
    <div className="hero-grid">
      <div className="hero-illustration">
        <img src={ForoImg} alt="Foro" className="hero-photo" />
      </div>
      <div className="hero-content">
        <span className="hero-greeting">HOLA!</span>
        <h1>
          Soy <span className="highlight">Tobias Jajurin</span>
        </h1>
        <h2>Desarrollador Frontend, UX/UI, creador de proyectos e innovador</h2>
        <div className="hero-links">
          <a href="mailto:tobijajurin@gmail.com" className="hero-btn">Contactame!</a>
          <a href="https://github.com/tobijajurin" className="hero-social" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/tobijajurin" className="hero-social" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
    <div className="hero-wave-bg" />
  </section>
);

export default HeroSection; 