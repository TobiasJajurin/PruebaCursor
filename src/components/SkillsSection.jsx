import React from 'react';

const skills = [
  'C#',
  'JavaScript',
  'React',
  'Oratoria',
  'Creación e innovación',
  'SQL',
  'Supabase',
  'Negocios',
  'UX/UI Design',
  'Figma'
];

function splitInRows(array, rowCount) {
  const perRow = Math.ceil(array.length / rowCount);
  return Array.from({ length: rowCount }, (_, i) =>
    array.slice(i * perRow, i * perRow + perRow)
  );
}

const SkillsSection = () => {
  const rows = splitInRows(skills, 2);
  return (
    <section className="skills-section" id="skills">
      <h2
        className="section-title underline-anim"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        Habilidades
      </h2>
      <div className="skills-rows">
        {rows.map((row, idx) => (
          <ul className="skills-list skills-list-row" key={idx}>
            {row.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection; 