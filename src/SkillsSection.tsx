import React, { useState } from 'react';
import NeuralNetworkBackground from './NeuralNetworkBackground';
import downArrow from './down-arrow.png';

const skillsData = [
  {
    category: 'Data Science & AI',
    icon: '🧠',
    skills: [
      { name: 'Computer Vision', percent: 95 },
      { name: 'Generative AI', percent: 95 },
      { name: 'Natural Language Processing', percent: 95 },
      { name: 'Signal Processing', percent: 90 },
      { name: 'Probability & Statistics', percent: 90 },
      { name: 'Data Analytics & Visualization', percent: 85 },
      { name: 'Frameworks & Libraries', percent: 90 },
    ],
  },
  {
    category: 'Front End',
    icon: '📑',
    skills: [
      { name: 'HTML', percent: 90 },
      { name: 'CSS', percent: 85 },
    ],
  },
  {
    category: 'Programming',
    icon: '{}',
    skills: [
      { name: 'Python', percent: 95 },
      { name: 'SQL', percent: 95 },
      { name: 'C++/C', percent: 90 },
      { name: 'Java', percent: 90 },
    ],
  },
  {
    category: 'Computing',
    icon: '🐙',
    skills: [
      { name: 'GPU & Distributed Computing', percent: 90 },
      { name: 'Amazon Web Services', percent: 85 },
      { name: 'Google Cloud Platform', percent: 85 },
      { name: 'Microsoft Azure', percent: 85 },
    ],
  },
];

const accent = '#8b5cf6';
const fontFamily = 'Inter, Segoe UI, Arial, sans-serif';

const SkillsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="skills" className="container" style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily,
      background: '#ffffff',
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <NeuralNetworkBackground />
      <h2 style={{ fontSize: 'var(--h2-size)', fontWeight: 700, marginBottom: 8, color: '#222', letterSpacing: 0.5, textAlign: 'center', fontFamily }}>Skills</h2>
      <div style={{ color: '#666', fontSize: 'var(--caption-size)', marginBottom: 48, textAlign: 'center', fontFamily }}>My technical & other skills</div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '36px 4cm', justifyContent: 'center', alignItems: 'flex-start', marginBottom: 36 }}>
        {skillsData.map((cat, idx) => (
          <div key={cat.category} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 200, width: '45%', maxWidth: 340, cursor: 'pointer', transition: 'color 0.2s', color: openIndex === idx ? accent : '#222', fontWeight: openIndex === idx ? 700 : 600, fontFamily, marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: 4 }} onClick={() => handleToggle(idx)}>
              <span style={{ fontSize: 24 }}>{cat.icon}</span>
              <span style={{ fontSize: 'var(--header-size)', marginTop: 4, fontWeight: 600, fontFamily, marginLeft: 8 }}>{cat.category}</span>
              <button style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                outline: 'none',
                padding: 0,
                marginLeft: '1cm',
                fontSize: 20,
                transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }} aria-label={openIndex === idx ? 'Collapse' : 'Expand'}>
                <img src={downArrow} alt="Expand" style={{ width: 24, height: 24, transition: 'transform 0.2s', transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
            </div>
            <div style={{ maxHeight: openIndex === idx ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)', width: '100%', marginTop: openIndex === idx ? 18 : 0 }}>
              {openIndex === idx && cat.skills.map(skill => (
                <div key={skill.name} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--body-size)', color: '#222', fontWeight: 500, fontFamily }}>
                    <span>{skill.name}</span>
                    <span style={{ color: accent, fontWeight: 600 }}>{skill.percent}%</span>
                  </div>
                  <div style={{ height: 8, background: 'rgba(255, 255, 255, 0.86)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ width: `${skill.percent}%`, height: 8, background: `linear-gradient(90deg, ${accent} 0%, rgba(139, 92, 246, 0.7) 100%)`, borderRadius: 4, transition: 'width 1s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection; 