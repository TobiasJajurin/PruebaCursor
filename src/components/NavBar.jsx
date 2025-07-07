import React from 'react';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Tobias Jajurin</div>
    <ul className="navbar-links">
      <li><a href="#hero">Inicio</a></li>
      <li><a href="#education">Educación</a></li>
      <li><a href="#experience">Experiencia</a></li>
      <li><a href="#skills">Habilidades</a></li>
      <li><a href="#recommendations">Recomendaciones</a></li>
      <li><a href="#contact" style={{color: '#111', fontWeight: 700, scrollBehavior: 'smooth'}}>Contacto</a></li>
    </ul>
  </nav>
);

export default NavBar; 