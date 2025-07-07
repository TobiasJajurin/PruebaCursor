import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar custom-navbar${scrolled ? ' scrolled' : ''}`}>
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
};

export default NavBar; 