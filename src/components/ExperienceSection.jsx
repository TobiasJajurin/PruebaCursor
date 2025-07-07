import React from 'react';

const experiences = [
  {
    title: 'Startup Founder',
    company: 'Xprience (Startup)',
    period: '2024',
    desc: 'Startup que busca agilizar la creación de planes mediante el uso de la tecnología.',
    tech: ['React', 'JS', 'Innovación']
  },
  {
    title: 'Startup Founder',
    company: 'Troca (Startup)',
    period: '2025',
    desc: 'Startup que busca convertir las reservas de los hoteles en bienes activos transferibles para así generar mediante la tecnología un nuevo método de inversión.',
    tech: ['Negocios', 'React', 'UX/UI Design']
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
            <div className="exp-company">
              {exp.company}
              {exp.company.includes('Troca') && (
                <a href="https://www.linkedin.com/company/107029865/admin/dashboard/" target="_blank" rel="noopener noreferrer" style={{marginLeft: 8, verticalAlign: 'middle'}} title="LinkedIn Troca">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{display: 'inline', verticalAlign: 'middle'}} xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" fill="currentColor"/>
                  </svg>
                </a>
              )}
            </div>
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