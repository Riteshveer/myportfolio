import React from 'react';
import NeuralNetworkBackground from './NeuralNetworkBackground';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import TechnicalCapabilitiesSection from './TechnicalCapabilitiesSection';
import githubGif from './github.gif';
import kagglePng from './kaggle.png';
import linkedinGif from './linkedin.gif';
import aiLogo from './ai logo.png';

const fontFamily = 'Inter, Segoe UI, Arial, sans-serif';
const navLinkStyle: React.CSSProperties = {
  color: '#222',
  textDecoration: 'none',
  fontSize: '1.08rem',
  fontWeight: 500,
  padding: '6px 10px',
  borderRadius: 6,
  borderBottom: '2px solid transparent',
  transition: 'color 0.2s, border-bottom 0.2s',
  cursor: 'pointer',
  fontFamily,
};

function App() {
  return (
    <>
      <NeuralNetworkBackground />
      <nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100vw',
          background: 'rgba(255,255,255,0.95)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2vw',
          height: 64,
          zIndex: 10,
          boxShadow: '0 2px 12px 0 #0001',
          fontFamily,
        }}
      >
        <div
          style={{
            fontSize: 'var(--header-size)',
            fontWeight: 800,
            letterSpacing: 0.5,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#222',
            fontFamily,
          }}
        >
          <img src={aiLogo} alt="AI Logo" style={{ width: 32, height: 32, objectFit: 'contain', verticalAlign: 'middle' }} /> Ritesh
        </div>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: 18,
            margin: 0,
            padding: 0,
            fontFamily,
          }}
        >
          <li><a href="#home" style={{...navLinkStyle, fontSize: 'var(--body-size)'}}>Home</a></li>
          <li><a href="#about" style={{...navLinkStyle, fontSize: 'var(--body-size)'}}>About</a></li>
          <li><a href="#skills" style={{...navLinkStyle, fontSize: 'var(--body-size)'}}>Skills</a></li>
          <li><a href="#projects" style={{...navLinkStyle, fontSize: 'var(--body-size)'}}>Projects</a></li>
          <li style={{ marginRight: '3cm' }}><a href="#contact" style={{...navLinkStyle, fontSize: 'var(--body-size)'}}>Contact</a></li>
        </ul>
      </nav>
      <main className="container" style={{ marginTop: 64, position: 'relative', zIndex: 1, fontFamily }}>
        <section
          style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 80,
            maxWidth: 1140,
            margin: '0 auto',
            fontFamily,
          }}
        >
          <h1 style={{
            fontSize: 'var(--title-size)',
            fontWeight: 800,
            marginBottom: 10,
            color: '#222',
            letterSpacing: 0.5,
            fontFamily,
          }}>
            Hi, I'm Ritesh
          </h1>
          <p style={{
            fontSize: 'var(--h2-size)',
            marginBottom: 18,
            fontWeight: 500,
            color: '#222',
            fontFamily,
          }}>
            I'm a <span style={{ color: '#00bcd4', fontWeight: 600 }}>Machine Learning Engineer</span>
          </p>
          <p style={{
            color: '#555',
            fontSize: 'var(--body-size)',
            marginBottom: 32,
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily,
          }}>
            Specializing in building <b>intelligent systems</b> with <b>AI, ML, and data science</b>. Transforming complex problems into elegant solutions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
            <a href="https://github.com/Riteshveer" target="_blank" rel="noopener noreferrer">
              <img src={githubGif} alt="GitHub" style={{ width: 26, height: 26, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px #0001' }} />
            </a>
            <img src={kagglePng} alt="Kaggle" style={{ width: 26, height: 26, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px #0001' }} />
            <a href="https://www.linkedin.com/in/ritesh-veer-39a30328b" target="_blank" rel="noopener noreferrer">
              <img src={linkedinGif} alt="LinkedIn" style={{ width: 26, height: 26, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px #0001' }} />
            </a>
          </div>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 40, flexWrap: 'wrap' }}>
            <a
              href="#projects"
              style={{
                padding: '12px 28px',
                borderRadius: 40,
                fontSize: 'var(--body-size)',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                background: '#222',
                color: '#fff',
                textDecoration: 'none',
                marginRight: 12,
                boxShadow: '0 4px 16px 0 #0002',
                transition: 'background 0.2s, color 0.2s',
                fontFamily,
              }}
              onMouseOver={e => (e.currentTarget.style.background = '#00bcd4')}
              onMouseOut={e => (e.currentTarget.style.background = '#222')}
            >
              View My Projects
            </a>
            <a
              href="#"
              style={{
                padding: '12px 28px',
                borderRadius: 40,
                fontSize: 'var(--body-size)',
                fontWeight: 600,
                border: '2px solid #00bcd4',
                background: 'transparent',
                color: '#00bcd4',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
                fontFamily,
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = '#00bcd4';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00bcd4';
              }}
            >
              Download Resume
            </a>
          </div>
        </section>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TechnicalCapabilitiesSection />
      </main>
    </>
  );
}

export default App;
