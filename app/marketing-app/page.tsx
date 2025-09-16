"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slideshow from "../components/Slideshow";
import Navbar from "../components/Navbar";

const opportunityImages = [
  "https://res.cloudinary.com/shuzchef/image/upload/v1757993915/portfolio/imuaodfzzezhgm42udup.png",
  "https://res.cloudinary.com/shuzchef/image/upload/v1757993916/portfolio/ygnouvi7oaanxtkmna6m.png",
  "https://res.cloudinary.com/shuzchef/image/upload/v1757993916/portfolio/x47ex6a9qeafvl4zl45t.png",
  "https://res.cloudinary.com/shuzchef/image/upload/v1757993915/portfolio/sbkk0jx6hwrtkpzdlzrf.png"
];

const marketingPlanImages = [
    "https://res.cloudinary.com/shuzchef/image/upload/v1758000310/portfolio/ldmhwkdho703pnezkqov.png",
    "https://res.cloudinary.com/shuzchef/image/upload/v1758000311/portfolio/iab2cnijf4s219v6wiqv.png",
    "https://res.cloudinary.com/shuzchef/image/upload/v1758000311/portfolio/xoivawnxzelhatzzipfh.png",
  ];

  const callImages = [
    "https://res.cloudinary.com/shuzchef/image/upload/v1758002463/portfolio/ry01v3knqfd5v7lrhfvv.png",
    "https://res.cloudinary.com/shuzchef/image/upload/v1758002463/portfolio/d0dey6thb6erel1re0em.png",
    "https://res.cloudinary.com/shuzchef/image/upload/v1758002464/portfolio/tzzsprvmqq86k9103pzl.png",
    "https://res.cloudinary.com/shuzchef/image/upload/v1758002463/portfolio/m0jr4bp7dze5mxpeor1t.png",
  ];
export default function MarketingAppPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const project = {
    id: 'glasshive',
    title: 'Glasshive Marketing Platform',
    subtitle: 'Sales and Marketing Platform for IT Service Providers',
    description: 'A comprehensive sales and marketing application designed specifically for IT service providers (MSPs) to streamline their client acquisition and management processes.',
    longDescription: 'Glasshive is a powerful marketing platform that empowers IT service providers to grow their business through automated marketing campaigns, lead management, and client relationship tools. The platform integrates multiple third-party services and provides a unified dashboard for managing all marketing activities.',
    image: 'https://res.cloudinary.com/shuzchef/image/upload/v1757984649/portfolio/ykonh6cflvs594om0ye9.png',
    technologies: ['Vue.js', 'Node.js', '.NET Entity Framework', 'Azure', 'SQL Server', 'OpenAI', 'Twilio API', 'Third Party APIs'],
    category: 'web-app',
    status: 'completed',
    year: 2018,
    duration: '6 years',
    teamSize: '15 developers',
    role: 'Lead Full Stack Developer',
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  };

  const features = [
    {
      title: 'Lead Management System',
      description: 'Comprehensive lead tracking and management with automated follow-up sequences',
      icon: '🎯'
    },
    {
      title: 'Email Marketing Automation',
      description: 'Automated email campaigns with personalized content and scheduling',
      icon: '📧'
    },
    {
      title: 'Client Portal',
      description: 'Self-service portal for clients to manage their services and requests',
      icon: '👥'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics and reporting for marketing performance tracking',
      icon: '📊'
    },
    {
      title: 'API Integrations',
      description: 'Seamless integration with popular CRM and marketing tools',
      icon: '🔗'
    },
    {
      title: 'AI-Powered Insights',
      description: 'OpenAI integration for generating marketing content and insights',
      icon: '🤖'
    }
  ];

  const technicalDetails = {
    frontend: [
      'Vue.js 3 with Composition API',
      'Vuex for state management',
      'Vue Router for navigation',
      'Element Plus UI component library',
      'Chart.js for data visualization',
      'Responsive design with CSS Grid and Flexbox'
    ],
    backend: [
      'Node.js with Express.js framework',
      '.NET Entity Framework for data access',
      'RESTful API architecture',
      'JWT authentication and authorization',
      'Rate limiting and security middleware',
      'Automated testing with Jest'
    ],
    database: [
      'Microsoft SQL Server',
      'Optimized database schema design',
      'Stored procedures for complex queries',
      'Database indexing for performance',
      'Data migration scripts',
      'Backup and recovery procedures'
    ],
    infrastructure: [
      'Microsoft Azure cloud platform',
      'Azure App Service for hosting',
      'Azure SQL Database',
      'Azure Blob Storage for file management',
      'Azure CDN for content delivery',
      'CI/CD pipeline with Azure DevOps'
    ],
    integrations: [
      'Twilio API for SMS and voice communications',
      'OpenAI API for content generation',
      'Google Analytics for tracking',
      'Stripe API for payment processing',
      'Mailchimp API for email marketing',
      'Custom webhook implementations'
    ]
  };

  const challenges = [
    {
      title: 'Scalability Requirements',
      description: 'The platform needed to handle thousands of concurrent users and millions of marketing interactions.',
      solution: 'Implemented microservices architecture with horizontal scaling and database optimization techniques.'
    },
    {
      title: 'Third-Party API Reliability',
      description: 'Ensuring consistent performance when integrating with multiple external services.',
      solution: 'Built robust error handling, retry mechanisms, and fallback systems for all API integrations.'
    },
    {
      title: 'Data Security & Compliance',
      description: 'Protecting sensitive client data and ensuring GDPR compliance.',
      solution: 'Implemented end-to-end encryption, data anonymization, and comprehensive audit logging.'
    },
    {
      title: 'Real-time Performance',
      description: 'Delivering real-time updates and notifications without performance degradation.',
      solution: 'Used WebSocket connections and implemented efficient caching strategies with Redis.'
    }
  ];

  const results = [
    { metric: 'User Engagement', value: '+150%', description: 'Increase in user engagement after platform launch' },
    { metric: 'Lead Conversion', value: '+85%', description: 'Improvement in lead conversion rates' },
    { metric: 'Processing Time', value: '-60%', description: 'Reduction in marketing campaign processing time' },
    { metric: 'Client Satisfaction', value: '4.8/5', description: 'Average client satisfaction rating' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'technical', label: 'Technical Details' },
    { id: 'challenges', label: 'Challenges & Solutions' },
    { id: 'results', label: 'Results' }
  ];

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

            </div>
            <div>
            <img 
                src={project.image} 
                alt={project.title}
                style={{ 
                  width: '100%', 
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-lg)'
                }} />
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
                <p style={{ color: 'var(--text-secondary)' }}>Founded</p>
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
                    As the Lead Full Stack Developer, I led the development of both frontend and backend components, architected API integrations, and ensured the platform's scalability, security, and high performance.
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
                <div className="marketing-plans-container section">
                    <h2 className="mb-6"  style={{ textAlign: 'center' }}>Marketing Plans</h2>
                    <Slideshow 
                        images={marketingPlanImages}
                        autoPlay={false}
                        autoPlayInterval={3000}
                        showDots={true}
                        showArrows={true}
                        alt="Custom slideshow"
                        className="my-custom-slideshow"
                        />

                    <div className="flex flex-wrap gap-4 section">
                        <div className="card">
                            <div className="card-content" style={{ textAlign: 'center' }}>
                            <h3 className="card-title">Calendar View</h3>
                            <p className="card-description">Allow users to view and manage their campaigns in a calendar view.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content" style={{ textAlign: 'center' }}>
                            <h3 className="card-title">Adopt Marketing Plan Template</h3>
                            <p className="card-description">Users can adopt marketing plans created by parent users, and schedule them using the calendar view.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content" style={{ textAlign: 'center' }}>
                            <h3 className="card-title">Marketing Plan Slideout</h3>
                            <p className="card-description">Slide out panel to view and edit the details of a marketing plan.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opportunities-container section">
                    <h2 className="mb-6"  style={{ textAlign: 'center' }}>Opportunities</h2>
                    <Slideshow 
                        images={opportunityImages}
                        autoPlay={false}
                        autoPlayInterval={3000}
                        showDots={true}
                        showArrows={true}
                        alt="Custom slideshow"
                        className="my-custom-slideshow"
                        />

                    <div className="flex flex-wrap gap-4 section">
                        <div className="card">
                            <div className="card-content" style={{ textAlign: 'center' }}>
                            <h3 className="card-title">Opportunity Dashboard</h3>
                            <p className="card-description">Aggregate all opportunity metrics and display them in a user friendly dashboard.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content" style={{ textAlign: 'center' }}>
                            <h3 className="card-title">Opportunity Table</h3>
                            <p className="card-description">Allow the users to sort, filter, interact, and customize thier opportunities in a table view.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content" style={{ textAlign: 'center' }}>
                            <h3 className="card-title">Opportunity Pipeline View</h3>
                            <p className="card-description">Drag and drop feature to move opportunities between different stages of the pipeline.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content" style={{ textAlign: 'center' }}>
                            <h3 className="card-title">Opportunity Slideout</h3>
                            <p className="card-description">A slideout panel to view and edit the details of an opportunity.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="voip-container section">
                    <h2 className="mb-6"  style={{ textAlign: 'center' }}>VoIP Calls</h2>
                    <Slideshow 
                        images={callImages}
                        autoPlay={false}
                        autoPlayInterval={3000}
                        showDots={true}
                        showArrows={true}
                        alt="Custom slideshow"
                        className="my-custom-slideshow"
                        />

                    <div className="flex flex-wrap gap-4 section">
                        <div className="card">
                            <div className="card-content" style={{ textAlign: 'center' }}>
                            <h3 className="card-title">Call Module</h3>
                            <p className="card-description">Pop out that allows users to make calls, and take notes while on call. User is still able to navigate the site while on a call.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content" style={{ textAlign: 'center' }}>
                            <h3 className="card-title">Call Recording</h3>
                            <p className="card-description">Users can replay thier call recordings, review the transcript, and take additional notes.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content" style={{ textAlign: 'center' }}>
                            <h3 className="card-title">Call Summary</h3>
                            <p className="card-description">Transcript is fed into OpenAI to generate a summary of the call.</p>
                            </div>
                        </div>
                    </div>
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

          {/* Results Tab */}
          {activeTab === 'results' && (
            <div>
              <h2 className="mb-6">Project Results</h2>

              <div className="flex flex-wrap gap-4" style={{ marginBottom: '3rem' }}>
                {results.map((result, index) => (
                  <div key={index} className="card" style={{ textAlign: 'center' }}>
                    <div className="card-content">
                      <h3 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                        {result.value}
                      </h3>
                      <h4 style={{ marginBottom: '0.5rem' }}>{result.metric}</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        {result.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="result-content">
                  <h3 className="mb-4">Impact Summary</h3>
                  <p className="text-lg">
                    The Glasshive Marketing Platform successfully transformed how IT service providers manage their 
                    marketing operations. The platform's intuitive interface and powerful automation features have 
                    helped clients significantly improve their lead generation and conversion rates while reducing 
                    manual workload and operational costs.
                  </p>
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
