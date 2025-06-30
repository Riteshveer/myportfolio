import React, { useState } from 'react';
import NeuralNetworkBackground from './NeuralNetworkBackground';

const filters = [
  'Show all',
  'Data mining',
  'Dataviz',
  'Scientific paper',
  'Dashboard',
  'Shiny',
];

const projects = [
  {
    title: 'Customer Churn Prediction',
    description: 'Predicting which customers are likely to leave a service using advanced analytics.',
    tags: ['Data mining', 'Churn', 'Analytics'],
    category: 'Data mining',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'E-commerce Recommendation System',
    description: 'Recommending products to users based on their browsing and purchase history.',
    tags: ['Dataviz', 'Recommendation', 'E-commerce'],
    category: 'Dataviz',
    image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Real-time Sentiment Analysis',
    description: 'Analyzing social media posts to determine public sentiment in real time.',
    tags: ['NLP', 'Dashboard', 'Streaming'],
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    details: true,
  },
  {
    title: 'Plant Disease Classification',
    description: 'Classifying plant diseases from leaf images using machine learning.',
    tags: ['Scientific paper', 'Classification', 'Agriculture'],
    category: 'Scientific paper',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Financial Dashboard',
    description: 'Visualizing financial data for better business decisions.',
    tags: ['Dashboard', 'Finance', 'Visualization'],
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Neural Network Visualizer',
    description: 'Understanding deep learning architectures with interactive visualizations.',
    tags: ['Shiny', 'Deep Learning', 'Visualization'],
    category: 'Shiny',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
  },
];

const accent = '#222';
const selectedBtn = {
  background: '#222',
  color: '#fff',
  fontWeight: 600,
  boxShadow: '0 2px 8px 0 #0001',
};

const fontFamily = 'Inter, Segoe UI, Arial, sans-serif';

const ProjectsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" style={{ minHeight: '100vh', background: 'transparent', position: 'relative', padding: '60px 0 40px 0', overflow: 'hidden', fontFamily }}>
      <NeuralNetworkBackground />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1140, margin: '0 auto', padding: '0 24px', fontFamily }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, letterSpacing: 0.5, marginBottom: 8, color: accent, fontFamily }}>PORTFOLIO</h2>
        <div style={{ textAlign: 'center', color: '#666', fontSize: '1.08rem', marginBottom: 36, fontWeight: 500, fontFamily }}>
          A glimpse of the projects I've been working on
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 44, flexWrap: 'wrap', fontFamily }}>
          {filters.map((f, i) => (
            <button
              key={f}
              onClick={() => setActive(i)}
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '1.08rem',
                padding: '12px 32px',
                borderRadius: 24,
                cursor: 'pointer',
                transition: 'all 0.2s',
                ...(active === i ? selectedBtn : { background: '#f5f5f7', color: accent, fontWeight: 500 }),
                boxShadow: active === i ? selectedBtn.boxShadow : undefined,
                fontFamily,
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 44,
          justifyContent: 'center',
          fontFamily,
        }}>
          {projects.map((proj, idx) => (
            <div key={proj.title} style={{
              background: '#fff',
              borderRadius: 14,
              boxShadow: '0 2px 16px 0 #0001',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 220,
              border: '2px solid #eaeaf1',
              position: 'relative',
              transition: 'box-shadow 0.2s',
              fontFamily,
            }}>
              {proj.image ? (
                <div style={{ height: 120, overflow: 'hidden', borderBottom: '1px solid #eaeaf1' }}>
                  <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ) : (
                <div style={{
                  height: 48,
                  background: '#f5f5f7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingLeft: 20,
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  color: accent,
                  borderBottom: '1px solid #eaeaf1',
                  fontFamily,
                }}>
                  {proj.title}
                </div>
              )}
              <div style={{ flex: 1, padding: '28px 22px 18px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily }}>
                <div>
                  {proj.image && <div style={{ fontWeight: 700, fontSize: '1.08rem', color: accent, marginBottom: 6, fontFamily }}>{proj.title}</div>}
                  <div style={{ color: '#666', fontSize: '1rem', marginBottom: 12, fontFamily }}>{proj.description}</div>
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 12, fontFamily }}>
                    {proj.tags.map(tag => (
                      <span key={tag} style={{
                        background: '#f5f5f7',
                        color: accent,
                        fontSize: '0.95rem',
                        borderRadius: 8,
                        padding: '4px 12px',
                        fontWeight: 500,
                        letterSpacing: 0.2,
                        fontFamily,
                      }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ color: '#888', fontSize: '0.95rem', fontWeight: 500, fontFamily }}>Category: {proj.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 