import React from 'react';
import NeuralNetworkBackground from './NeuralNetworkBackground';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import TechnicalCapabilitiesSection from './TechnicalCapabilitiesSection';

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
            fontSize: '2.2rem',
            fontWeight: 800,
            letterSpacing: 0.5,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#222',
            fontFamily,
          }}
        >
          <span role="img" aria-label="robot">🤖</span> Ritesh
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
          <li><a href="#home" style={navLinkStyle}>Home</a></li>
          <li><a href="#about" style={navLinkStyle}>About</a></li>
          <li><a href="#skills" style={navLinkStyle}>Skills</a></li>
          <li><a href="#projects" style={navLinkStyle}>Projects</a></li>
          <li style={{ marginRight: '3cm' }}><a href="#contact" style={navLinkStyle}>Contact</a></li>
        </ul>
      </nav>
      <main style={{ marginTop: 64, position: 'relative', zIndex: 1, fontFamily }}>
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
            fontSize: '2.7rem',
            fontWeight: 800,
            marginBottom: 10,
            color: '#222',
            letterSpacing: 0.5,
            fontFamily,
          }}>
            Hi, I'm Ritesh
          </h1>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: 18,
            fontWeight: 500,
            color: '#222',
            fontFamily,
          }}>
            I'm a <span style={{ color: '#00bcd4', fontWeight: 600 }}>Machine Learning Engineer</span>
          </p>
          <p style={{
            color: '#555',
            fontSize: '1.08rem',
            marginBottom: 32,
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily,
          }}>
            Specializing in building <b>intelligent systems</b> with <b>AI, ML, and data science</b>. Transforming complex problems into elegant solutions.
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginBottom: 40 }}>
            <a
              href="#projects"
              style={{
                padding: '16px 36px',
                borderRadius: 40,
                fontSize: '1.08rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                background: '#222',
                color: '#fff',
                textDecoration: 'none',
                marginRight: 20,
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
                padding: '16px 36px',
                borderRadius: 40,
                fontSize: '1.08rem',
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
