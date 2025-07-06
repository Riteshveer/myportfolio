import React from 'react';
import githubGif from './github.gif';
import kagglePng from './kaggle.png';
import linkedinGif from './linkedin.gif';

const footerLinks = [
  { label: 'Research', href: '#capabilities' },
  { label: 'Projects', href: '#projects' },
];

const socialLinks = [
  { icon: <img src={githubGif} alt="GitHub" style={{ width: 26, height: 26 }} />, href: 'https://github.com/Riteshveer' },
  { icon: <img src={linkedinGif} alt="LinkedIn" style={{ width: 26, height: 26 }} />, href: 'https://www.linkedin.com/in/ritesh-veer-39a30328b' },
  { icon: <img src={kagglePng} alt="Kaggle" style={{ width: 26, height: 26 }} />, href: 'https://www.kaggle.com/riteshveer' },
];

const Footer = () => (
  <footer style={{ background: 'transparent', color: '#222', padding: '48px 0 16px 0', marginTop: 64 }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, maxWidth: 1140, margin: '0 auto' }}>
      <div style={{ fontWeight: 800, fontSize: 32, letterSpacing: 1 }}>Ritesh</div>
      <nav style={{ display: 'flex', gap: 36, fontSize: 18 }}>
        {footerLinks.map(link => (
          <a key={link.label} href={link.href} style={{ color: '#222', textDecoration: 'none', fontWeight: 500 }}>{link.label}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: 24 }}>
        {socialLinks.map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>{s.icon}</a>
        ))}
      </div>
    </div>
    <div style={{ textAlign: 'center', color: '#888', fontSize: 16, marginTop: 32 }}>
      © Ritesh {new Date().getFullYear()}
    </div>
  </footer>
);

export default Footer; 