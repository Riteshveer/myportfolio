import React from 'react';

const capabilities = [
  {
    icon: '🧠',
    title: 'Machine Learning Model Development',
    desc: 'End-to-end ML pipeline development from data preprocessing to model deployment',
    points: [
      'Feature Engineering',
      'Model Selection',
      'Hyperparameter Tuning',
      'Performance Optimization',
    ],
  },
  {
    icon: '🗄️',
    title: 'Data Cleaning & Visualization',
    desc: 'Transform raw data into actionable insights with advanced visualization techniques',
    points: [
      'Data Preprocessing',
      'Statistical Analysis',
      'Interactive Dashboards',
      'Report Generation',
    ],
  },
  {
    icon: '⟨⟩',
    title: 'System Design & Prototyping',
    desc: 'Design scalable AI systems and rapid prototyping for proof of concepts',
    points: [
      'Architecture Design',
      'Scalable Solutions',
      'API Development',
      'Cloud Integration',
    ],
  },
  {
    icon: '🎖️',
    title: 'Applied Research',
    desc: 'Research-driven approach to solve complex problems with cutting-edge techniques',
    points: [
      'Literature Review',
      'Experimental Design',
      'Algorithm Innovation',
      'Technical Writing',
    ],
  },
];

const fontFamily = 'Inter, Segoe UI, Arial, sans-serif';

const TechnicalCapabilitiesSection = () => (
  <section id="capabilities" className="container" style={{
    width: '100%',
    padding: '60px 0 30px 0',
    background: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily,
  }}>
    <h2 style={{
      fontSize: 'var(--h2-size)',
      fontWeight: 800,
      color: '#232b38',
      textAlign: 'center',
      marginBottom: 8,
      letterSpacing: 0.5,
      fontFamily,
    }}>
      Technical Capabilities
    </h2>
    <div style={{
      color: '#555',
      fontSize: 'var(--caption-size)',
      textAlign: 'center',
      marginBottom: 40,
      maxWidth: 700,
      fontWeight: 500,
      fontFamily,
    }}>
      Comprehensive AI/ML expertise across the entire development lifecycle
    </div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 24,
      width: '100%',
      maxWidth: 1140,
      fontFamily,
    }}>
      {capabilities.map((cap, idx) => (
        <div key={cap.title} style={{
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 2px 16px 0 #0001',
          border: '1.5px solid #e5e7ef',
          padding: '24px 18px 18px 18px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          minHeight: 220,
          fontFamily,
        }}>
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: '#f5f6fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            marginBottom: 18,
            fontFamily,
          }}>{cap.icon}</div>
          <div style={{ fontWeight: 700, fontSize: 'var(--header-size)', color: '#232b38', marginBottom: 4, fontFamily }}>{cap.title}</div>
          <div style={{ color: '#555', fontSize: 'var(--body-size)', marginBottom: 16, fontFamily }}>{cap.desc}</div>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            color: '#232b38',
            fontSize: 'var(--body-size)',
            fontWeight: 400,
            fontFamily,
          }}>
            {cap.points.map(point => (
              <li key={point} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, fontFamily }}>
                <span style={{ color: '#4f8cff', fontSize: 18, marginRight: 10, fontFamily }}>✔️</span> {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default TechnicalCapabilitiesSection; 