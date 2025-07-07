import React from 'react';

const HeroSection = () => (
  <section className="hero-section" id="hero">
    <div className="hero-grid">
      <div className="hero-illustration">
        {/* Foto de usuario, el usuario puede reemplazar la imagen src por la suya */}
        <img src="/profile.jpg" alt="Foto de Tobias Jajurin" className="hero-photo" />
      </div>
      <div className="hero-content">
        <span className="hero-greeting">HOLA!</span>
        <h1>
          Soy <span className="highlight">Tobias Jajurin</span>
          <span className="hero-underline" />
        </h1>
        <h2>Desarrollador Frontend, UX/UI, creador de proyectos e innovador</h2>
        <p>
          Me apasiona el diseño, la tecnología, los negocios y crear experiencias digitales de calidad. <br />
          Manejo React, JavaScript, HTML, CSS, SQL, Supabase y más.
        </p>
        <div className="hero-links">
          <a href="mailto:tobijajurin@gmail.com" className="hero-btn">Contactame!</a>
          <a href="https://github.com/tobijajurin" className="hero-social" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/tobijajurin" className="hero-social" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 