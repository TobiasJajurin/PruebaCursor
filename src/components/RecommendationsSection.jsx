import React from 'react';

const recommendations = [
  {
    text: '“Tobias es un estudiante con una marcada creatividad y una enorme capacidad para comunicar sus ideas. A lo largo del año, se destacó no solo por la calidad de sus trabajos, sino también por su entusiasmo, participación activa y compromiso con cada actividad.”'
  },
  {
    text: '“Desde el inicio de la cursada, Tobias mostró una actitud ejemplar: siempre predispuesto a aprender, colaborar y asumir nuevos desafíos. Su habilidad para el diseño y su facilidad para expresarse oralmente marcaron la diferencia en cada proyecto grupal e individual.”'
  },
  {
    text: '“Tobias combina creatividad, responsabilidad y visión estratégica. Tiene la capacidad de transformar ideas en propuestas concretas con impacto real. Su enfoque orientado al detalle y su compromiso constante hacen que trabajar con él sea siempre una experiencia enriquecedora.”'
  },
  {
    text: '“Con un fuerte perfil creativo y una excelente oratoria, Tobias es capaz de liderar proyectos desde la idea inicial hasta su ejecución. Posee una gran sensibilidad estética, entiende cómo comunicar, y busca siempre superarse. Es un perfil con gran proyección.”'
  }
];

const RecommendationsSection = () => (
  <section className="recommendations-section" id="recommendations">
    <h2
      className="section-title underline-anim"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      Recomendaciones
    </h2>
    <div className="recommendations-grid">
      {recommendations.map((rec, idx) => (
        <div className="recommendation-card" data-aos="fade-up" data-aos-delay={100 + idx * 150} key={idx}>
          <span className="rec-quote">“</span>
          <span className="rec-text">{rec.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default RecommendationsSection; 