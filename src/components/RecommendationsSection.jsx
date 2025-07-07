import React from 'react';

const recommendations = [
  {
    text: 'Ezequiel fue muy didáctico y transmitió los contenidos de la cursada de una manera que se me hizo muy fácil de entender. Siempre estuvo a disposición para despejar dudas y fue realmente de ayuda en la resolución de los distintos ejercicios.'
  },
  {
    text: 'Su dedicación, compromiso, adaptabilidad e ingenio han colaborado en lograr que los proyectos planteados por todo el equipo se logren y generen un alto impacto en estudiantes y docentes.'
  },
  {
    text: 'Desde muy joven ha demostrado ser un profesional sumamente responsable, destacado por su compromiso, calidad humana, capacidad de escucha, trabajo en equipo, movilizador de ideas y proyectos, y una gran humildad para seguir superandose. Cada vez que recibió mas tareas, responsabilidades y compromisos, logró cumplir cada uno de los objetivos.'
  },
  {
    text: 'Sin duda alguna uno de los mejores profesores de programación que he tenido no solo por su conocimiento en el área, sino también por su gran capacidad para transmitir dichos conocimientos, logrando que cada clase sea indispensable y entretenida. Es una persona dedicada que siempre nos ha sabido guiar en nuestro proceso de aprendizaje, generando confianza y empatía con todos.'
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