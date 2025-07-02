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
      <div className="about-main-row" style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 32,
        maxWidth: 1200,
        margin: '0 auto 32px auto',
        gap: '4cm',
        flexWrap: 'nowrap',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: '#fff',
          borderRadius: 32,
          boxShadow: '0 2px 16px 0 #0001',
          padding: 10,
          height: 140,
        }}>
          <img
            src={avatar}
            alt="Ritesh avatar"
            style={{
              width: 140,
              height: 140,
              borderRadius: 32,
              objectFit: 'cover',
              background: '#f8f8f8',
              marginBottom: 0,
            }}
            className="about-avatar"
          />
        </div>
        <div className="about-bio" style={{
          maxWidth: 540,
          color: '#444',
          fontSize: '18px',
          lineHeight: 1.7,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>
          <p style={{ margin: 0, fontSize: '16px' }}>
            I bring a strong foundation in programming, statistics, and data visualization, with hands-on expertise in Python, SQL, and Java, alongside libraries and tools such as Pandas, NumPy, Scikit-learn, TensorFlow, and PyTorch.
          </p>
          <p style={{ margin: 10, fontSize: '16px' }}>
            Currently pursuing a B-Tech in AI/ML at PCET's Pimpri Chinchwad University, I've complemented my education with certifications in data science and machine learning. My academic and project experiences highlight my proficiency in predictive analytics, time series forecasting, and creating actionable insights that drive business decisions.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '2cm', marginTop: '-1cm', width: '100%' }}>
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
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '1cm' }}>
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
            marginTop: 0,
            marginLeft: 0,
            transition: 'background 0.2s',
            textAlign: 'center',
            alignSelf: 'center',
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#8ac2fe')}
          onMouseOut={e => (e.currentTarget.style.background = '#bdddff')}
        >
          💬 Leave a message
        </a>
      </div>
    </section>
  );
};

export default AboutSection; 