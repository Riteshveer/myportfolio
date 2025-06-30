import React, { useState } from 'react';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const skillsData = [
  {
    category: 'Data Science & AI',
    icon: '🧠',
    xp: '4+ Years XP',
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
    xp: '2+ Years XP',
    skills: [
      { name: 'HTML', percent: 90 },
      { name: 'CSS', percent: 85 },
      { name: 'JavaScript', percent: 75 },
      { name: 'React JS', percent: 85 },
      { name: 'React Native', percent: 85 },
    ],
  },
  {
    category: 'BackEnd',
    icon: '💻',
    xp: '3+ Years XP',
    skills: [
      { name: 'Python - Flask, FastAPI', percent: 95 },
      { name: 'Firebase', percent: 75 },
      { name: 'Java - Spring Framework', percent: 75 },
      { name: 'Node JS, Express JS', percent: 70 },
    ],
  },
  {
    category: 'Misc',
    icon: '📈',
    xp: '4+ Years XP',
    skills: [
      { name: 'Git', percent: 90 },
      { name: 'Linux', percent: 90 },
    ],
  },
  {
    category: 'Programming',
    icon: '{}',
    xp: '3+ Years XP',
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
    xp: '3+ Years XP',
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
    <section id="skills" style={{
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
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1140 }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          marginBottom: 8, 
          color: '#222', 
          letterSpacing: 0.5,
          textAlign: 'center',
          fontFamily,
        }}>Skills</h2>
        <div style={{ 
          color: '#666', 
          fontSize: '1.08rem', 
          marginBottom: 48,
          textAlign: 'center',
          fontFamily,
        }}>My technical & other skills</div>
        {/* Skill Group Names in 3 rows, 2 per row */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 36,
          alignItems: 'center',
          marginBottom: 36,
        }}>
          {[0, 2, 4].map(rowStart => (
            <div key={rowStart} style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: 140,
            }}>
              {skillsData.slice(rowStart, rowStart + 2).map((cat, idx) => {
                const globalIdx = rowStart + idx;
                return (
                  <div key={cat.category} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: 120,
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    color: openIndex === globalIdx ? accent : '#222',
                    fontWeight: openIndex === globalIdx ? 700 : 600,
                    fontFamily,
                  }}
                  onClick={() => handleToggle(globalIdx)}
                  >
                    <span style={{ fontSize: 24 }}>{cat.icon}</span>
                    <span style={{ fontSize: '1.08rem', marginTop: 4, fontWeight: 600, fontFamily }}>{cat.category}</span>
                    <span style={{ color: '#888', fontSize: '0.95rem', fontWeight: 400, fontFamily }}>{cat.xp}</span>
                    {/* Animated Skills Dropdown */}
                    <div style={{
                      maxHeight: openIndex === globalIdx ? 500 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)',
                      width: '100%',
                      marginTop: openIndex === globalIdx ? 18 : 0,
                    }}>
                      {openIndex === globalIdx && cat.skills.map(skill => (
                        <div key={skill.name} style={{ marginBottom: 14 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.05rem', color: '#222', fontWeight: 500, fontFamily }}>
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
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 