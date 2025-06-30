import React from 'react';
import avatar from './avatar2.jpg'; // Place your avatar image in src/ as avatar2.jpg

const AboutSection = () => {
  return (
    <section id="about" style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 40,
      marginBottom: 40,
    }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 8, color: '#222' }}>About</h2>
      <div style={{ color: '#888', fontSize: '1.2rem', marginBottom: 32 }}>My Introduction</div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        borderRadius: 24,
        boxShadow: '0 4px 32px 0 #0001',
        padding: 32,
        maxWidth: 900,
        margin: '0 auto 32px auto',
        gap: 40,
      }}>
        <img
          src={avatar}
          alt="Ritesh avatar"
          style={{
            width: 220,
            height: 220,
            borderRadius: 24,
            objectFit: 'cover',
            boxShadow: '0 2px 16px 0 #0001',
            background: '#f8f8f8',
          }}
        />
        <div style={{ textAlign: 'left', maxWidth: 420, color: '#444', fontSize: '1.15rem', lineHeight: 1.7 }}>
          With 4+ years of experience in AI, I design, develop, and deploy cutting-edge software and AI solutions, specializing in MedTech and beyond. I've led cross-functional teams, translating business goals into actionable Data & AI strategies that deliver results.
        </div>
      </div>
      <div style={{ display: 'flex', gap: 48, justifyContent: 'center', marginBottom: 32 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '2rem', color: '#222' }}>04+</div>
          <div style={{ color: '#888', fontSize: '1rem' }}>Hackathon</div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '2rem', color: '#222' }}>23+</div>
          <div style={{ color: '#888', fontSize: '1rem' }}>Projects</div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '2rem', color: '#222' }}>03+</div>
          <div style={{ color: '#888', fontSize: '1rem' }}>Technology</div>
        </div>
      </div>
      <a
        href="#contact"
        style={{
          display: 'inline-block',
          background: '#8b5cf6',
          color: '#fff',
          fontWeight: 600,
          fontSize: '1.1rem',
          padding: '14px 36px',
          borderRadius: 16,
          textDecoration: 'none',
          boxShadow: '0 2px 12px 0 #8b5cf633',
          marginTop: 8,
          transition: 'background 0.2s',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#7c3aed')}
        onMouseOut={e => (e.currentTarget.style.background = '#8b5cf6')}
      >
        💬 Leave a message
      </a>
    </section>
  );
};

export default AboutSection; 