"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned' | 'on-going';
  year: number;
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const projects: Project[] = [
    {
      id: 'fighters-edge',
      title: 'Fighters-Edge',
      description: 'A full-stack social feed solution built with Nuxt.js, Node.js, and MongoDB.',
      longDescription: 'A comprehensive social media platform designed for the fighting game community. Features include real-time chat, user profiles, tournament brackets, and community features. Built with modern web technologies and optimized for performance.',
      image: 'https://res.cloudinary.com/shuzchef/image/upload/v1757796678/portfolio/ckev6mkjsf0elso75qxm.png',
      technologies: ['Nuxt.js', 'Node.js', 'MongoDB', 'Socket.io', 'Vue.js'],
      category: 'web-app',
      liveUrl: 'https://fighters-edge.com',
      githubUrl: 'https://github.com/shuzaku/fightme',
      featured: true,
      status: 'in-progress',
      year: 2022
    },
    {
      id: 'replay-reviewer',
      title: 'Replay Reviewer',
      description: 'An object detection and classification tool for analyzing replays.',
      longDescription: 'AI-powered tool that uses text detection and machine learning to analyze gaming replays. Features automated detection of key moments, performance metrics, and detailed analytics. Built with Python and integrated with OpenAI for enhanced analysis.',
      image: 'https://res.cloudinary.com/shuzchef/image/upload/v1757969941/portfolio/x5gst9wfaehn0dkupcf3.png',
      technologies: ['Python', 'Ultralytics', 'OpenAI', 'Text Detection', 'Machine Learning'],
      category: 'ai-ml',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      status: 'in-progress',
      year: 2025
    },
    {
      id: 'holy-moly',
      title: 'Holy Moly',
      description: 'A roguelite game built with Godot.',
      longDescription: 'A challenging roguelite game featuring procedurally generated levels, unique power-ups, and engaging combat mechanics. All artwork created using Procreate, showcasing both technical and artistic skills.',
      image: 'https://res.cloudinary.com/shuzchef/image/upload/v1757798722/portfolio/vrqhvv3ol4h2w4wzj0j9.png',
      technologies: ['Godot', 'GDScript', 'Procreate', 'Game Design'],
      category: 'game',
      liveUrl: '#',
      githubUrl: 'https://github.com/shuzaku/holy-moly',
      featured: false,
      status: 'planned',
      year: 2025
    },
    {
      id: 'msp-site',
      title: 'MSP Marketing Sites',
      description: 'Marketing Site for a MSP companies.',
      longDescription: 'Marketing Site for a MSP companies. Built with wordpress, and custom themes. Sites included custom scripts, seo, tracking, and more.',
      image: 'https://res.cloudinary.com/shuzchef/image/upload/v1757982566/portfolio/lnmazd1bkig4osaq8hvt.png',
      technologies: ['Wordpress', 'PHP', 'SEO', 'Google Analytics'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'completed',
      year: 2020
    },
    {
      id: 'tequila-site',
      title: 'Tequila Site',
      description: 'Official website for Number Juan Tequila.',
      longDescription: 'Commericial website for a tequila brand. Built with wordpress, and custom themes. Included woocommerce, scheduling app, and more.',
      image: 'https://res.cloudinary.com/shuzchef/image/upload/v1757982566/portfolio/fckjgc31erjtdexemmca.png',
      technologies: ['Wordpress', 'PHP', 'Woocommerce', 'Scheduling Plugin', 'SEO'],
      category: 'frontend',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'completed',
      year: 2024
    },
    {
        id: 'glasshive',
        title: 'Marketing Platform',
        description: 'Glasshive is a marketing platform for MSPS',
        longDescription: 'Glasshive is a sales and marketing app for IT service providers',
        image: 'https://res.cloudinary.com/shuzchef/image/upload/v1757984649/portfolio/ykonh6cflvs594om0ye9.png',
        technologies: ['Vue', 'Node.js', '.Net entity', 'Azure', 'SQL Server', 'OpenAI', 'Twilio API', 'Third Party APIs'],
        category: 'web-app',
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        status: 'completed',
        year: 2024
      }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web-app', label: 'Web Applications' },
    { value: 'ai-ml', label: 'AI & Machine Learning' },
    { value: 'game', label: 'Games' },

  ];

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'completed', label: 'Completed' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'planned', label: 'Planned' }
  ];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'tag-green';
      case 'in-progress': return 'tag-yellow';
      case 'planned': return 'tag-blue';
      default: return 'tag-blue';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planned': return 'Planned';
      default: return 'Unknown';
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      {/* Navigation */}
      <Navbar currentPage="projects" />

      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="text-center">
            <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
              My <span style={{ color: 'var(--primary)' }}>Projects</span>
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.25rem', maxWidth: '48rem', margin: '0 auto 2rem' }}>
              A collection of my work showcasing various technologies, frameworks, and problem-solving approaches
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>{projects.length}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>{featuredProjects.length}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Featured</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>
                  {projects.filter(p => p.status === 'completed').length}
                </div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem', background: 'var(--card-bg)' }}>
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="flex gap-2">
              <label className="form-label" style={{ margin: 0, marginRight: '0.5rem' }}>Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-input"
                style={{ width: 'auto', minWidth: '150px' }}
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              <label className="form-label" style={{ margin: 0, marginRight: '0.5rem' }}>Status:</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="form-input"
                style={{ width: 'auto', minWidth: '150px' }}
              >
                {statuses.map(status => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {selectedCategory === 'all' && selectedStatus === 'all' && (
        <section className="section" style={{ background: 'var(--background)' }}>
          <div className="container">
            <h2 className="text-center mb-12">Featured Projects</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {featuredProjects.map((project) => (
                <div key={project.id} className="card" style={{ width: '400px' }}>
                  <div className="card-header" style={{ height: '200px', position: 'relative' }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        borderRadius: '0.5rem 0.5rem 0 0'
                      }}
                    />
                    <div style={{ 
                      position: 'absolute', 
                      top: '1rem', 
                      right: '1rem',
                      background: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {project.year}
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="card-title">{project.title}</h3>
                      <span className={`tag ${getStatusColor(project.status)}`}>
                        {getStatusLabel(project.status)}
                      </span>
                    </div>
                    <p className="card-description" style={{ marginBottom: '1rem' }}>
                      {project.longDescription}
                    </p>
                    <div className="tags" style={{ marginBottom: '1rem' }}>
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="tag tag-blue">{tech}</span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tag" style={{ background: 'var(--text-muted)', color: 'white' }}>
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="project-links">
                      {project.id === 'glasshive' && (
                        <Link href="/marketing-app" className="project-link">
                          View Details
                        </Link>
                      )}
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a href={project.githubUrl} className="project-link-secondary" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="section" style={{ background: selectedCategory === 'all' && selectedStatus === 'all' ? 'var(--card-bg)' : 'var(--background)' }}>
        <div className="container">
          <h2 className="text-center mb-12">
            {selectedCategory === 'all' && selectedStatus === 'all' ? 'All Projects' : 'Filtered Projects'}
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card" style={{ width: '350px' }}>
                <div className="card-header" style={{ height: '180px', position: 'relative' }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '0.5rem 0.5rem 0 0'
                    }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: '0.75rem', 
                    right: '0.75rem',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {project.year}
                  </div>
                  {project.featured && (
                    <div style={{ 
                      position: 'absolute', 
                      top: '0.75rem', 
                      left: '0.75rem',
                      background: 'var(--primary)',
                      color: 'white',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      Featured
                    </div>
                  )}
                </div>
                <div className="card-content">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="card-title">{project.title}</h3>
                    <span className={`tag ${getStatusColor(project.status)}`}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>
                  <p className="card-description" style={{ marginBottom: '1rem' }}>
                    {project.description}
                  </p>
                  <div className="tags" style={{ marginBottom: '1rem' }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tag tag-blue">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tag" style={{ background: 'var(--text-muted)', color: 'white' }}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="project-links">
                    {project.id === 'glasshive' && (
                      <Link href="/marketing-app" className="project-link">
                        View Details
                      </Link>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a href={project.githubUrl} className="project-link-secondary" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center" style={{ padding: '3rem 0' }}>
              <h3 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>No projects found</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try adjusting your filters to see more projects.</p>
            </div>
          )}
        </div>
      </section>

       {/* CV/Resume Download Section */}
       <section className="section" style={{ background: 'var(--background)' }}>
         <div className="container">
           <div className="text-center">
             <h2 className="mb-6">Download My Resume</h2>
             <p className="text-lg mb-8" style={{ maxWidth: '48rem', margin: '0 auto 2rem' }}>
               Get a detailed overview of my experience, skills, and achievements in a downloadable format.
             </p>
             <div className="flex gap-4 justify-center flex-wrap">
               <a 
                 href="https://res.cloudinary.com/shuzchef/image/upload/v1757991057/portfolio/saduwmvvdy0fnv7wscta.pdf" 
                 target="_blank"
                 download="Marvin_Chau_Resume.pdf"
                 className="btn btn-primary"
                 style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
               >
                 <span>📄</span>
                 Download Resume (PDF)
               </a>

             </div>
             <div className="mt-6" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
               <p>Last updated: September 2025</p>
             </div>
           </div>
         </div>
       </section>

       {/* Call to Action */}
       <section className="section" style={{ background: 'var(--card-bg)' }}>
         <div className="container">
           <div className="text-center">
             <h2 className="mb-6">Interested in Working Together?</h2>
             <p className="text-lg mb-8" style={{ maxWidth: '48rem', margin: '0 auto 2rem' }}>
               I'm always excited to take on new challenges and create amazing solutions. 
               Let's discuss your next project!
             </p>
             <div className="flex gap-4 justify-center flex-wrap">
               <Link href="/#contact" className="btn btn-primary">
                 Get In Touch
               </Link>
               <a href="/" className="btn btn-secondary">
                 Back to Home
               </a>
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
