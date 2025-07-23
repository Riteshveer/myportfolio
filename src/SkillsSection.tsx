import React, { useState, useRef } from 'react';
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
  // Only one open at a time per column
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  // Split skills into two columns
  const leftSkills = skillsData.slice(0, Math.ceil(skillsData.length / 2));
  const rightSkills = skillsData.slice(Math.ceil(skillsData.length / 2));

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
      overflow: 'visible',
    }}>
      <NeuralNetworkBackground />
      <h2 style={{ fontSize: 'var(--h2-size)', fontWeight: 700, marginBottom: 8, color: '#222', letterSpacing: 0.5, textAlign: 'center', fontFamily }}>Skills</h2>
      <div style={{ color: '#666', fontSize: 'var(--caption-size)', marginBottom: 48, textAlign: 'center', fontFamily }}>My technical & other skills</div>
      <div className="skills-flex-row" style={{ display: 'flex', flexDirection: 'row', gap: 64, justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
        {/* Left column */}
        <div className="skills-flex-col" style={{ display: 'flex', flexDirection: 'column', gap: 36, flex: 1, minWidth: 0 }}>
          {leftSkills.map((cat, idx) => (
            <div key={cat.category} className="skill-card" style={{ color: openLeft === idx ? accent : '#222', fontWeight: openLeft === idx ? 700 : 600, fontFamily, position: 'relative', zIndex: 1, transition: 'color 0.2s' }}>
              <div className="skill-card-header" onClick={() => setOpenLeft(openLeft === idx ? null : idx)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: 0, padding: '18px 0', borderRadius: 0, userSelect: 'none', background: 'none', fontWeight: 600, fontSize: 'var(--header-size)', border: 'none' }}>
                <span style={{ fontSize: 24 }}>{cat.icon}</span>
                <span style={{ fontSize: 'var(--header-size)', marginTop: 4, fontWeight: 600, fontFamily, marginLeft: 8 }}>{cat.category}</span>
                <button style={{ background: 'none', border: 'none', boxShadow: 'none', padding: 0, margin: '0 0 0 1cm', outline: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'none' }} aria-label={openLeft === idx ? 'Collapse' : 'Expand'}>
                  <img src={downArrow} alt="Expand" style={{ width: 24, height: 24, transition: 'transform 0.2s', transform: openLeft === idx ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
              </div>
              <div className={`skill-card-content${openLeft === idx ? ' open' : ''}`} style={{ maxHeight: openLeft === idx ? 500 : 0, opacity: openLeft === idx ? 1 : 0, overflow: 'hidden', transition: 'max-height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s', width: '100%', marginTop: openLeft === idx ? 8 : 0, position: 'relative', background: 'none', border: 'none', boxShadow: 'none', padding: openLeft === idx ? '0 20px 18px 20px' : '0 20px', }}>
                {openLeft === idx && cat.skills.map(skill => (
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
        {/* Right column */}
        <div className="skills-flex-col" style={{ display: 'flex', flexDirection: 'column', gap: 36, flex: 1, minWidth: 0 }}>
          {rightSkills.map((cat, idx) => (
            <div key={cat.category} className="skill-card" style={{ color: openRight === idx ? accent : '#222', fontWeight: openRight === idx ? 700 : 600, fontFamily, position: 'relative', zIndex: 1, transition: 'color 0.2s' }}>
              <div className="skill-card-header" onClick={() => setOpenRight(openRight === idx ? null : idx)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: 0, padding: '18px 0', borderRadius: 0, userSelect: 'none', background: 'none', fontWeight: 600, fontSize: 'var(--header-size)', border: 'none' }}>
                <span style={{ fontSize: 24 }}>{cat.icon}</span>
                <span style={{ fontSize: 'var(--header-size)', marginTop: 4, fontWeight: 600, fontFamily, marginLeft: 8 }}>{cat.category}</span>
                <button style={{ background: 'none', border: 'none', boxShadow: 'none', padding: 0, margin: '0 0 0 1cm', outline: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'none' }} aria-label={openRight === idx ? 'Collapse' : 'Expand'}>
                  <img src={downArrow} alt="Expand" style={{ width: 24, height: 24, transition: 'transform 0.2s', transform: openRight === idx ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
              </div>
              <div className={`skill-card-content${openRight === idx ? ' open' : ''}`} style={{ maxHeight: openRight === idx ? 500 : 0, opacity: openRight === idx ? 1 : 0, overflow: 'hidden', transition: 'max-height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s', width: '100%', marginTop: openRight === idx ? 8 : 0, position: 'relative', background: 'none', border: 'none', boxShadow: 'none', padding: openRight === idx ? '0 20px 18px 20px' : '0 20px', }}>
                {openRight === idx && cat.skills.map(skill => (
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
      </div>
      <style>{`
        @keyframes glowPulse {
          0% { box-shadow: 0 0 16px 4px rgba(139, 92, 246, 0.25), 0 0 32px 8px rgba(139, 92, 246, 0.10); }
          100% { box-shadow: 0 0 32px 8px rgba(139, 92, 246, 0.35), 0 0 48px 16px rgba(139, 92, 246, 0.18); }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;