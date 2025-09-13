"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div>
              <h1 className="text-xl font-bold">Marvin's Portfolio</h1>
            </div>
            <div className="hidden md:block">
              <div className="nav-links">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="text-center">
            <div className="hero-avatar">
              <span>M</span>
            </div>
            <h1 className="hero-title">
              Hi, I'm <span style={{ color: 'var(--primary)' }}>Marvin</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Developer passionate about creating amazing web experiences
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container">
          <h2 className="text-center mb-12">About Me</h2>
          <div className="grid grid-2 items-center">
            <div>
              <p className="text-lg mb-6">
                I'm a passionate full stack developer with expertise in modern web technologies. 
                I love building scalable applications and solving complex problems through code.
              </p>
              <p className="text-lg mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <h4 className="skill-title">Frontend</h4>
                  <p className="skill-description">React, Vue, Next.js/Nuxt.js, TypeScript</p>
                </div>
                <div className="skill-card">
                  <h4 className="skill-title">Backend</h4>
                  <p className="skill-description">Node.js, Express, Python, PostgreSQL, .NET Entity,  NestJS, Flask</p>
                </div>
                <div className="skill-card">
                  <h4 className="skill-title">Languages & Databases</h4>
                  <p className="skill-description">TypeScript/JavaScript, C#, Python,
                  PHP, SQL Server, MongoDB, Redis, MySQL</p>
                </div>
                <div className="skill-card">
                  <h4 className="skill-title">Architecture & APIs </h4>
                  <p className="skill-description">REST, OData, GraphQL, Microservices, API Integrations</p>
                </div>
                <div className="skill-card">
                  <h4 className="skill-title">DevOps & Infrastructure</h4>
                  <p className="skill-description">Azure, Google Cloud, Firebase, Docker, CI/CD (Azure DevOps, GitHub Actions, Jenkins)</p>
                </div>
                <div className="skill-card">
                  <h4 className="skill-title">Testing & Quality</h4>
                  <p className="skill-description">Unit & Integration Testing (Jest, NUnit, PyTest, Cypress)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="text-center mb-12">Featured Projects</h2>
          <div className="grid grid-3">
            {/* Project 1 */}
            <div className="card">
              <div className="card-header" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' }}>
                <img src="https://res.cloudinary.com/shuzchef/image/upload/v1757796678/portfolio/ckev6mkjsf0elso75qxm.png" alt="Fighters-Edge" />
              </div>
              <div className="card-content">
                <h3 className="card-title">Fighters-Edge</h3>
                <p className="card-description">
                  A full-stack social feed solution built with Nuxt.js, Node.js, and MongoDb.
                </p>
                <div className="tags">
                  <span className="tag tag-blue">Nuxt.js</span>
                  <span className="tag tag-green">Node.js</span>
                  <span className="tag tag-purple">MongoDb</span>
                </div>
                <div className="project-links">
                  <a href="https://fighters-edge.com" className="project-link">Live Demo</a>
                  <a href="https://github.com/shuzaku/fightme" className="project-link-secondary">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card">
              <div className="card-header" style={{ background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)' }}>
              <img src="https://res.cloudinary.com/shuzchef/image/upload/v1757798484/portfolio/iagtuanenoumeczkr83i.png" alt="Fighters-Edge" />

              </div>
              <div className="card-content">
                <h3 className="card-title">Replay Reviewer</h3>
                <p className="card-description">
                  A object detection and classification tool for analyzing rep
                </p>
                <div className="tags">
                  <span className="tag tag-blue">Python</span>
                  <span className="tag tag-orange">Ultralytics</span>
                  <span className="tag tag-yellow">OpenAi</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link-secondary">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="card">
              <div className="card-header" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }}>
              <img src="https://res.cloudinary.com/shuzchef/image/upload/v1757798722/portfolio/vrqhvv3ol4h2w4wzj0j9.png" alt="Fighters-Edge" />

              </div>
              <div className="card-content">
                <h3 className="card-title">Holy Moly</h3>
                <p className="card-description">
                  A rouge like game built with Gadot.
                </p>
                <div className="tags">
                  <span className="tag tag-blue">Gadot</span>
                  <span className="tag tag-green">Procreate</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/shuzaku/holy-moly" className="project-link-secondary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container" style={{ maxWidth: '64rem' }}>
          <h2 className="text-center mb-12">Get In Touch</h2>
          <div className="grid grid-2">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's work together!</h3>
              <p className="text-lg mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>mtchau@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (512) 986-2807</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Dallas, TX</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  There was an error sending your message. Please try again.
                </div>
              )}
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="form-input form-textarea"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
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
