"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slideshow from "../components/Slideshow";
import Navbar from "../components/Navbar";

const projectImages = [
  "https://res.cloudinary.com/shuzchef/image/upload/v1758080479/portfolio/c2uwrzqrqukauczjukvm.png",
  "https://res.cloudinary.com/shuzchef/image/upload/v1758080479/portfolio/h0j3hnvglw7iotm1dxkt.png",
  "https://res.cloudinary.com/shuzchef/image/upload/v1758080478/portfolio/dxz9mheegsb4a2dqlfab.png",
  "https://res.cloudinary.com/shuzchef/image/upload/v1758080478/portfolio/w3ljzshdn2ewrrkb3vrf.png"
];

const features = [
  {
    title: 'Video Feed',
    description: 'A feed of videos using Youtube API, with a search functionality to find videos by keywords',
    icon: '🎥'
  },
  {
    title: 'User Authentication',
    description: 'Secure user registration using Google firebase authentication',
    icon: '🔐'
  },
  {
    title: 'Youtube Api',
    description: 'Youtube API integration for fetching videos ',
    icon: '📺'
  },
  {
    title: 'Tournament Brackets',
    description: 'Interactive tournament bracket system for fighting game competitions',
    icon: '🏆'
  },
  {
    title: 'User Profiles',
    description: 'Customizable user profiles',
    icon: '👤'
  },
  {
    title: 'Notes Feature',
    description: 'A feature that allows users to add notes to videos',
    icon: '📝'
  }
];

const technicalDetails = {
  frontend: [
    'Nuxt.js with Composition API',
    'Vue.js 2 for reactive components',
    'Vue Router for navigation',
  ],
  backend: [
    'Node.js with Express.js framework',
    'MongoDB with Mongoose ODM',
    'Google Firebase for authentication',
    'RESTful API architecture',
  ],
  database: [
    'MongoDB Atlas cloud database',
    'Optimized schema design for social features',
    'Data aggregation pipelines',
    'Backup and recovery procedures',
  ],
  infrastructure: [
    'Netlify for frontend deployment',
    'Heroku for backend hosting',
    'Cloudinary for image management',
    'GitHub for version control',
    'CI/CD with GitHub Actions',
    'Environment-based configuration'
  ],
  integrations: [
    'Cloudinary for image uploads',
    'Google Firebase for authentication',
    'MongoDB Atlas for database',
    'Netlify for deployment',
    'Custom API endpoints'
  ]
};

const challenges = [
  {
    title: 'Real-time Performance',
    description: 'Ensuring smooth real-time updates across multiple users without performance degradation.',
    solution: 'Implemented efficient Youtube API event handling with room-based broadcasting and client-side state management optimization.'
  },
  {
    title: 'Database Scalability',
    description: 'Handling large amounts of social media data and user interactions efficiently.',
    solution: 'Designed optimized MongoDB schemas with proper indexing and implemented data pagination for feeds.'
  },
  {
    title: 'User Experience',
    description: 'Creating an intuitive interface for complex social features while maintaining performance.',
    solution: 'Used Vue.js reactive components with lazy loading and implemented progressive web app features for better mobile experience.'
  },
  {
    title: 'Security & Privacy',
    description: 'Protecting user data and ensuring secure communication in a social platform.',
    solution: 'Implemented Google Firebase authentication, input validation, and secure API endpoints with proper error handling.'
  }
];

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'technical', label: 'Technical Details' },
  { id: 'challenges', label: 'Challenges & Solutions' }
];

export default function FightersEdgePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const project = {
    id: 'fighters-edge',
    title: 'Fighters-Edge',
    subtitle: 'Social Platform for Fighting Game Community',
    description: 'Fighters-edge.com serves as an online database for the fighting game community (FGC), aggregating and categorizing tournament match replays from YouTube. The platform enables users to search for replays by game, players, characters, and matchups. ',
    longDescription: 'Fighters-Edge is a full-stack social media platform built to serve the fighting game community. The platform combines traditional social media features with gaming-specific functionality, creating a unique space for players to connect, share content, and organize tournaments. Built with modern web technologies and optimized for both desktop and mobile experiences.',
    image: 'https://res.cloudinary.com/shuzchef/image/upload/v1757796678/portfolio/ckev6mkjsf0elso75qxm.png',
    technologies: ['Nuxt.js', 'Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    category: 'web-app',
    status: 'in-progress',
    year: 2022,
    duration: '2+ years',
    teamSize: 'Solo project',
    role: 'Full Stack Developer',
    liveUrl: 'https://fighters-edge.com',
    githubUrl: 'https://github.com/shuzaku/fightme',
    featured: true
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      {/* Navigation */}
      <Navbar currentPage="projects" />

      {/* Breadcrumb */}
      <section style={{ paddingTop: '6rem', paddingBottom: '1rem', background: 'var(--card-bg)' }}>
        <div className="container">
          <nav style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <Link href="/projects" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Projects</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span style={{ color: 'var(--text-muted)' }}>{project.title}</span>
          </nav>
        </div>
      </section>

      {/* Project Hero */}
      <section style={{ paddingBottom: '3rem', background: 'var(--card-bg)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {project.title}
              </h1>
              <p className="text-xl" style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                {project.subtitle}
              </p>
              <p className="text-lg" style={{ marginBottom: '2rem' }}>
                {project.longDescription}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  View Code
                </a>
              </div>
            </div>
            <div>
              <img 
                src={project.image} 
                alt={project.title}
                style={{ 
                  width: '100%', 
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-lg)'
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Cards */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card-content">
                <h3 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '0.5rem' }}>{project.year}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Started</p>
              </div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card-content">
                <h3 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '0.5rem' }}>{project.duration}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Development Time</p>
              </div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card-content">
                <h3 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '0.5rem' }}>{project.teamSize}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Team Size</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section style={{ background: 'var(--card-bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="flex flex-wrap gap-2" style={{ padding: '1rem 0' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ margin: '0.25rem' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="mb-6">Project Overview</h2>
              <div className="grid grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
                <div>
                  <h3 className="mb-4">Project Description</h3>
                  <p className="text-lg mb-4">
                    {project.longDescription}
                  </p>
                  <h3 className="mb-4">My Role</h3>
                  <p className="text-lg">
                    As the sole developer, I designed and built the entire platform from scratch, including the frontend interface, backend API, database architecture, and deployment infrastructure. I focused on creating a seamless user experience while ensuring scalability and performance.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4">Technologies Used</h3>
                  <div className="tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag tag-blue">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div>
              <h2 className="mb-6">Key Features</h2>
              <div className="grid grid-3" style={{ gap: '2rem' }}>
                {features.map((feature, index) => (
                  <div key={index} className="card">
                    <div className="card-content" style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                      <h3 className="card-title">{feature.title}</h3>
                      <p className="card-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Project Screenshots */}
              <div className="section">
                <h2 className="mb-6" style={{ textAlign: 'center' }}>Project Screenshots</h2>
                <Slideshow 
                  images={projectImages}
                  autoPlay={false}
                  autoPlayInterval={3000}
                  showDots={true}
                  showArrows={true}
                  alt="Fighters-Edge project screenshots"
                  className="my-custom-slideshow"
                />
              </div>
            </div>
          )}

          {/* Technical Details Tab */}
          {activeTab === 'technical' && (
            <div>
              <h2 className="mb-6">Technical Implementation</h2>
              <div className="grid grid-2" style={{ gap: '2rem' }}>
                {Object.entries(technicalDetails).map(([category, items]) => (
                  <div key={category} className="card">
                    <div className="card-content">
                      <h3 className="card-title" style={{ textTransform: 'capitalize', marginBottom: '1rem' }}>
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {items.map((item, index) => (
                          <li key={index} style={{ 
                            padding: '0.5rem 0', 
                            borderBottom: '1px solid var(--border)',
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <span style={{ color: 'var(--primary)', marginRight: '0.5rem' }}>▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges Tab */}
          {activeTab === 'challenges' && (
            <div>
              <h2 className="mb-6">Challenges & Solutions</h2>
              <div className="grid grid-2" style={{ gap: '2rem' }}>
                {challenges.map((challenge, index) => (
                  <div key={index} className="card">
                    <div className="card-content">
                      <h3 className="card-title" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                        {challenge.title}
                      </h3>
                      <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                        <strong>Challenge:</strong> {challenge.description}
                      </p>
                      <p style={{ color: 'var(--text-primary)' }}>
                        <strong>Solution:</strong> {challenge.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6">Interested in Similar Projects?</h2>
            <p className="text-lg mb-8" style={{ maxWidth: '48rem', margin: '0 auto 2rem' }}>
              I'm always excited to work on challenging projects that make a real impact. 
              Let's discuss how I can help bring your ideas to life!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/#contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <p style={{ color: '#94a3b8' }}>&copy; 2025 Marvin's Portfolio. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/marvin-chau-8b356b14/" className="footer-link">LinkedIn</a>
              <a href="https://github.com/shuzaku" className="footer-link">GitHub</a>
              <a href="https://x.com/ShuzChef" className="footer-link">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
