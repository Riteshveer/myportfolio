import React from 'react';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const navLinkStyle: React.CSSProperties = {
  color: '#222',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: 400,
  padding: '6px 10px',
  borderRadius: 6,
  borderBottom: '2px solid transparent',
  transition: 'color 0.2s, border-bottom 0.2s',
  cursor: 'pointer',
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
          padding: '0 1.2vw',
          height: 48,
          zIndex: 10,
          boxShadow: '0 2px 12px 0 #0001',
        }}
      >
        <div
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: '#222',
          }}
        >
          <span role="img" aria-label="robot">🤖</span> Ritesh
        </div>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: 10,
            margin: 0,
            padding: 0,
          }}
        >
          <li><a href="#home" style={navLinkStyle}>Home</a></li>
          <li><a href="#about" style={navLinkStyle}>About</a></li>
          <li><a href="#skills" style={navLinkStyle}>Skills</a></li>
          <li><a href="#projects" style={navLinkStyle}>Projects</a></li>
          <li style={{ marginRight: '1vw' }}><a href="#contact" style={navLinkStyle}>Contact</a></li>
        </ul>
      </nav>
      <main style={{ marginTop: 64, position: 'relative', zIndex: 1 }}>
        <section
          style={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 40,
          }}
        >
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: 6,
            color: '#222',
            letterSpacing: 1,
          }}>
            Hi, I'm Ritesh
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: 10,
            fontWeight: 400,
            color: '#222',
          }}>
            I'm a <span style={{ color: '#00bcd4', fontWeight: 500 }}>Machine Learning Engineer</span>
          </p>
          <p style={{
            color: '#555',
            fontSize: '1rem',
            marginBottom: 18,
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Specializing in building <b>intelligent systems</b> with <b>AI, ML, and data science</b>. Transforming complex problems into elegant solutions.
          </p>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginBottom: 40 }}>
            <a
              href="#projects"
              style={{
                padding: '18px 40px',
                borderRadius: 40,
                fontSize: '1.3rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                background: '#222',
                color: '#fff',
                textDecoration: 'none',
                marginRight: 20,
                boxShadow: '0 4px 16px 0 #0002',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseOver={e => (e.currentTarget.style.background = '#00bcd4')}
              onMouseOut={e => (e.currentTarget.style.background = '#222')}
            >
              View My Projects
            </a>
            <a
              href="#"
              style={{
                padding: '18px 40px',
                borderRadius: 40,
                fontSize: '1.3rem',
                fontWeight: 600,
                border: '2px solid #00bcd4',
                background: 'transparent',
                color: '#00bcd4',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
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
      </main>
    </>
  );
}

export default App;
