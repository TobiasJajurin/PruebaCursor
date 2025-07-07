import React from 'react';

const studies = [
  {
    title: 'Secundario Técnico en Informática',
    institution: 'ORT Argentina',
    period: '2021 - 2025 (Actualidad)',
    desc: 'Especialidad en informática. Desarrollo de proyectos, innovación y tecnología.',
    featured: true
  },
  {
    title: 'Curso de Líderes',
    institution: 'Bethilel',
    period: '2023 - 2025',
    desc: 'Formación en liderazgo y trabajo en equipo.',
    featured: false
  },
  {
    title: 'Curso de UX/UI',
    institution: 'Coderhouse',
    period: '2025',
    desc: 'Diseño de experiencia de usuario, prototipado y herramientas modernas.',
    featured: false
  }
];

const aosDirections = ['fade-left', 'fade-up', 'fade-right'];

const EducationSection = () => (
  <section className="education-section" id="education">
    <h2
      className="section-title underline-anim"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      Educación
    </h2>
    <div className="edu-stack">
      {studies.map((s, idx) => (
        <div
          className={`edu-stack-card${s.featured ? ' edu-featured' : ''}${idx % 2 === 1 ? ' edu-alt' : ''}`}
          key={idx}
          data-aos={aosDirections[idx % aosDirections.length]}
          data-aos-delay={100 + idx * 150}
          data-aos-duration="900"
        >
          <div className="edu-info">
            <div className="edu-title">{s.title}</div>
            <div className="edu-inst">{s.institution}</div>
            <div className="edu-period">{s.period}</div>
            <div className="edu-desc">{s.desc}</div>
            {s.featured && <div className="edu-badge">Actual</div>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection; 