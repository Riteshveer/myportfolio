import React from 'react';
import avatar from './avatar2.jpg'; // Place your avatar image in src/ as avatar2.jpg

const AboutSection = () => {
  return (
    <section id="about" className="container" style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 40,
      marginBottom: 40,
    }}>
      <h2 style={{ fontSize: 'var(--h2-size)', fontWeight: 700, marginBottom: 8, color: '#222' }}>About</h2>
      <div style={{ color: '#888', fontSize: 'var(--caption-size)', marginBottom: 32 }}>My Introduction</div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        maxWidth: 900,
        margin: '0 auto 32px auto',
        gap: '4cm',
        flexWrap: 'nowrap',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          borderRadius: 32,
          boxShadow: '0 2px 16px 0 #0001',
          padding: 10,
        }}>
          <img
            src={avatar}
            alt="Ritesh avatar"
            style={{
              width: 220,
              height: 220,
              borderRadius: 24,
              objectFit: 'cover',
              background: '#f8f8f8',
              marginBottom: 0,
            }}
            className="about-avatar"
          />
        </div>
        <div style={{ textAlign: 'left', maxWidth: 420, color: '#444', fontSize: '14px', lineHeight: 1.7, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          With 4+ years of experience in AI, I design, develop, and deploy cutting-edge software and AI solutions, specializing in MedTech and beyond. I've led cross-functional teams, translating business goals into actionable Data & AI strategies that deliver results.
          <div style={{ display: 'flex', gap: 48, justifyContent: 'center', margin: '32px 0 0 0', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 'var(--header-size)', color: '#222' }}>04+</div>
              <div style={{ color: '#888', fontSize: 'var(--caption-size)' }}>Hackathon</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 'var(--header-size)', color: '#222' }}>23+</div>
              <div style={{ color: '#888', fontSize: 'var(--caption-size)' }}>Projects</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 'var(--header-size)', color: '#222' }}>03+</div>
              <div style={{ color: '#888', fontSize: 'var(--caption-size)' }}>Technology</div>
            </div>
          </div>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              background: '#bdddff',
              color: '#fff',
              fontWeight: 600,
              fontSize: 'var(--body-size)',
              padding: '12px 28px',
              borderRadius: 16,
              textDecoration: 'none',
              boxShadow: '0 2px 12px 0 rgba(96, 179, 194, 0.2)',
              marginTop: 24,
              marginLeft: '1cm',
              transition: 'background 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#8ac2fe')}
            onMouseOut={e => (e.currentTarget.style.background = '#bdddff')}
          >
            💬 Leave a message
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 