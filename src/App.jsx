import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import RecommendationsSection from './components/RecommendationsSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  return (
    <div className="portfolio-root">
      <NavBar />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <RecommendationsSection />
      <ContactSection />
    </div>
  );
}

export default App;
