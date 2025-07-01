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
        background: '#fff',
        borderRadius: 24,
        boxShadow: '0 4px 32px 0 #0001',
        padding: 32,
        maxWidth: 900,
        margin: '0 auto 32px auto',
        gap: 40,
        flexWrap: 'wrap',
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
            marginBottom: 16,
          }}
        />
        <div style={{ textAlign: 'left', maxWidth: 420, color: '#444', fontSize: 'var(--body-size)', lineHeight: 1.7 }}>
          With 4+ years of experience in AI, I design, develop, and deploy cutting-edge software and AI solutions, specializing in MedTech and beyond. I've led cross-functional teams, translating business goals into actionable Data & AI strategies that deliver results.
        </div>
      </div>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 'var(--header-size)', color: '#222' }}>04+</div>
          <div style={{ color: '#888', fontSize: 'var(--caption-size)' }}>Hackathon</div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 'var(--header-size)', color: '#222' }}>23+</div>
          <div style={{ color: '#888', fontSize: 'var(--caption-size)' }}>Projects</div>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 'var(--header-size)', color: '#222' }}>03+</div>
          <div style={{ color: '#888', fontSize: 'var(--caption-size)' }}>Technology</div>
        </div>
      </div>
      <a
        href="#contact"
        style={{
          display: 'inline-block',
          background: '#8b5cf6',
          color: '#fff',
          fontWeight: 600,
          fontSize: 'var(--body-size)',
          padding: '12px 28px',
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