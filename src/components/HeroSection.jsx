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
          <a href="mailto:tobiasjajurinn@gmail.com" className="hero-btn">Contactame!</a>
          <a href="https://github.com/TobiasJajurin" className="hero-social" target="_blank" rel="noopener noreferrer" title="GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/tobias-jajurin-5b3a4b358/" className="hero-social" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="hero-wave-bg" />
  </section>
);

export default HeroSection; 