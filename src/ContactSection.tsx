import React from 'react';

const contactItems = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6 12 13 2 6"/></svg>
    ),
    label: 'Email',
    value: 'riteshveer0326@gmail.com',
    link: 'mailto:riteshveer0326@gmail.com',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    label: 'Location',
    value: 'Pune, India',
    link: undefined,
  },
];

const ContactSection = () => (
  <section id="contact" className="container" style={{
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 0 40px 0',
    background: 'transparent',
    fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
  }}>
    <h2 style={{ fontSize: 'var(--title-size)', fontWeight: 800, textAlign: 'center', marginBottom: 8, color: '#222' }}>Contact</h2>
    <div style={{ color: '#888', fontSize: 'var(--caption-size)', marginBottom: 40, textAlign: 'center' }}>Get in touch with me</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, alignItems: 'flex-start', maxWidth: 480, width: '100%' }}>
      {contactItems.map((item, idx) => (
        <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span>{item.icon}</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 'var(--header-size)', color: '#222', marginBottom: 2 }}>{item.label}</div>
            {item.link ? (
              <a href={item.link} style={{ color: '#8b5cf6', fontSize: 'var(--body-size)', textDecoration: 'none' }}>{item.value}</a>
            ) : (
              <div style={{ color: '#888', fontSize: 'var(--body-size)' }}>{item.value}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ContactSection; 