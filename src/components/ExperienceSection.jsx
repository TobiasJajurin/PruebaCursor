import React from 'react';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Xprience (Startup)',
    period: '2023',
    desc: 'Desarrollo de interfaces y experiencia de usuario para plataforma de eventos y networking.',
    tech: ['React', 'UX/UI', 'Innovación']
  },
  {
    title: 'Frontend Developer',
    company: 'Troca (Startup)',
    period: '2022',
    desc: 'Implementación de soluciones web para e-commerce y gestión de productos.',
    tech: ['React', 'JavaScript', 'Negocios']
  }
];

const ExperienceSection = () => (
  <section className="experience-section" id="experience">
    <h2
      className="section-title underline-anim"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      Experiencia
    </h2>
    <div className="exp-stack">
      {experiences.map((exp, idx) => (
        <div
          className={`exp-stack-card${idx % 2 === 1 ? ' exp-alt' : ''}`}
          key={idx}
          data-aos="fade-up"
          data-aos-delay={100 + idx * 200}
          data-aos-duration="900"
        >
          <div className="exp-info">
            <div className="exp-title">{exp.title}</div>
            <div className="exp-company">{exp.company}</div>
            <div className="exp-period">{exp.period}</div>
            <div className="exp-desc">{exp.desc}</div>
            <div className="exp-techs">
              {exp.tech.map((t, i) => (
                <span className="exp-badge" key={i}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection; 