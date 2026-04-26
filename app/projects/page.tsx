"use client";

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
  status: "completed" | "in-progress" | "planned" | "on-going";
  year: number;
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const projects: Project[] = [
    {
      id: "fighters-edge",
      title: "Fighters-Edge",
      description: "A full-stack social feed solution built with Nuxt.js, Node.js, and MongoDB.",
      longDescription:
        "A social platform designed for the fighting game community. Real-time chat, profiles, tournament brackets, and community features — built with modern web tech and optimized for performance.",
      image: "https://res.cloudinary.com/shuzchef/image/upload/v1757796678/portfolio/ckev6mkjsf0elso75qxm.png",
      technologies: ["Nuxt.js", "Node.js", "MongoDB", "Socket.io", "Vue.js"],
      category: "web-app",
      liveUrl: "https://fighters-edge.com",
      githubUrl: "https://github.com/shuzaku/fightme",
      featured: true,
      status: "in-progress",
      year: 2022,
    },
    {
      id: "replay-reviewer",
      title: "Replay Reviewer",
      description: "An object detection and classification tool for analyzing replays.",
      longDescription:
        "AI-powered tool using text detection and machine learning to analyze gaming replays. Automated detection of key moments, performance metrics, and analytics — built with Python and OpenAI.",
      image: "https://res.cloudinary.com/shuzchef/image/upload/v1757969941/portfolio/x5gst9wfaehn0dkupcf3.png",
      technologies: ["Python", "Ultralytics", "OpenAI", "Text Detection", "Machine Learning"],
      category: "ai-ml",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      status: "in-progress",
      year: 2025,
    },
    {
      id: "blindrankers",
      title: "Blind Rankers",
      description: "A Nuxt.js blind pairwise ranking game with real-time updates and cloud-backed assets.",
      longDescription:
        "Players compare items head-to-head without seeing overall scores, producing fair aggregate rankings. Built with Nuxt 3, MongoDB, Socket.io for live sessions, and AWS S3 for media.",
      image: "https://res.cloudinary.com/shuzchef/image/upload/v1776534006/portfolio/tyjmwbrj54mnc8sjt8yk.png",
      technologies: ["Nuxt.js", "TypeScript", "MongoDB", "Socket.io", "AWS S3"],
      category: "web-app",
      liveUrl: "#",
      githubUrl: "https://github.com/shuzaku/blind-ranking-game",
      featured: false,
      status: "in-progress",
      year: 2026,
    },
    {
      id: "twitch-stream-worker",
      title: "Twitch Stream Worker",
      description: "24/7 worker that streams FightersEdge videos to Twitch with a live match overlay.",
      longDescription:
        "Pulls shuffled playlists from the FightersEdge API, resolves streams with yt-dlp, composites video with an HTML overlay via ffmpeg, and pushes to Twitch over RTMP. Includes an Express overlay server with now-playing metadata.",
      image: "https://res.cloudinary.com/shuzchef/image/upload/v1776534006/portfolio/hsq2lkgsdwv9inraijad.png",
      technologies: ["TypeScript", "Node.js", "ffmpeg", "yt-dlp", "Express"],
      category: "web-app",
      liveUrl: "#",
      githubUrl: "https://github.com/shuzaku/twitch-stream-worker",
      featured: false,
      status: "in-progress",
      year: 2026,
    },
    {
      id: "holy-moly",
      title: "Holy Moly",
      description: "A roguelite game built with Godot.",
      longDescription:
        "A challenging roguelite game featuring procedurally generated levels, unique power-ups, and engaging combat. All artwork created in Procreate.",
      image: "https://res.cloudinary.com/shuzchef/image/upload/v1757798722/portfolio/vrqhvv3ol4h2w4wzj0j9.png",
      technologies: ["Godot", "GDScript", "Procreate", "Game Design"],
      category: "game",
      liveUrl: "#",
      githubUrl: "https://github.com/shuzaku/holy-moly",
      featured: false,
      status: "planned",
      year: 2025,
    },
    {
      id: "msp-site",
      title: "MSP Marketing Sites",
      description: "Marketing sites for MSP companies.",
      longDescription:
        "Marketing sites for MSP companies. Built with WordPress and custom themes — custom scripts, SEO, tracking, and more.",
      image: "https://res.cloudinary.com/shuzchef/image/upload/v1757982566/portfolio/lnmazd1bkig4osaq8hvt.png",
      technologies: ["Wordpress", "PHP", "SEO", "Google Analytics"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "completed",
      year: 2020,
    },
    {
      id: "tequila-site",
      title: "Tequila Site",
      description: "Official website for Number Juan Tequila.",
      longDescription:
        "Commercial website for a tequila brand. Built with WordPress and custom themes, including WooCommerce, scheduling, and more.",
      image: "https://res.cloudinary.com/shuzchef/image/upload/v1757982566/portfolio/fckjgc31erjtdexemmca.png",
      technologies: ["Wordpress", "PHP", "Woocommerce", "Scheduling Plugin", "SEO"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "completed",
      year: 2024,
    },
    {
      id: "glasshive",
      title: "Marketing Platform",
      description: "Glasshive is a marketing platform for MSPs.",
      longDescription:
        "Glasshive is a sales and marketing app for IT service providers — integrating OpenAI, Twilio, and many third-party APIs.",
      image: "https://res.cloudinary.com/shuzchef/image/upload/v1757984649/portfolio/ykonh6cflvs594om0ye9.png",
      technologies: ["Vue", "Node.js", ".Net entity", "Azure", "SQL Server", "OpenAI", "Twilio API", "Third Party APIs"],
      category: "web-app",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "completed",
      year: 2024,
    },
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web-app", label: "Web Applications" },
    { value: "ai-ml", label: "AI & Machine Learning" },
    { value: "game", label: "Games" },
    { value: "frontend", label: "Frontend" },
  ];

  const statuses = [
    { value: "all", label: "All Status" },
    { value: "completed", label: "Completed" },
    { value: "in-progress", label: "In Progress" },
    { value: "planned", label: "Planned" },
  ];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
    const statusMatch = selectedStatus === "all" || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const featuredProjects = projects.filter((p) => p.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":   return "tag-green";
      case "in-progress": return "tag-yellow";
      case "planned":     return "tag-blue";
      default:            return "tag-blue";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":   return "Completed";
      case "in-progress": return "In Progress";
      case "planned":     return "Planned";
      default:            return "Unknown";
    }
  };

  const detailsHrefFor = (id: string) => {
    if (id === "glasshive")            return "/marketing-app";
    if (id === "fighters-edge")        return "/fighters-edge";
    if (id === "blindrankers")         return "/blind-rankers";
    if (id === "twitch-stream-worker") return "/twitch-stream-worker";
    return null;
  };

  const unfiltered = selectedCategory === "all" && selectedStatus === "all";

  return (
    <div>
      <Navbar currentPage="projects" />

      {/* ===== Editorial header ===== */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-inner">
            <div>
              <div className="eyebrow">Portfolio · {new Date().getFullYear()}</div>
              <h1 className="hero-title" style={{ marginBottom: "1.25rem" }}>
                A <em>catalog</em><br />of made things.
              </h1>
              <p className="section-lede" style={{ marginBottom: 0, maxWidth: "36rem" }}>
                Web apps, AI tooling, marketing sites, and one stubborn roguelite.
                A cross-section of the things I build, ship, and occasionally rebuild.
              </p>
            </div>
            <div className="projects-stats">
              <div className="project-stat">
                <div className="project-stat-number">{projects.length}</div>
                <div className="project-stat-label">Projects</div>
              </div>
              <div className="project-stat">
                <div className="project-stat-number">{featuredProjects.length}</div>
                <div className="project-stat-label">Featured</div>
              </div>
              <div className="project-stat">
                <div className="project-stat-number">
                  {projects.filter((p) => p.status === "completed").length}
                </div>
                <div className="project-stat-label">Shipped</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Sticky filters ===== */}
      <section className="projects-filters">
        <div className="container">
          <div className="flex flex-wrap gap-6 justify-between items-center">
            <div className="flex flex-wrap gap-6">
              <div className="filter-group">
                <label className="filter-label">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <label className="filter-label">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="filter-select"
                >
                  {statuses.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              Showing <strong style={{ color: "var(--cream)" }}>{filteredProjects.length}</strong>{" "}
              of {projects.length}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Featured (zigzag) ===== */}
      {unfiltered && (
        <section className="section">
          <div className="container">
            <div className="text-center mb-12">
              <div className="eyebrow" style={{ justifyContent: "center" }}>Featured</div>
              <h2 className="section-title">
                The <em>headliners.</em>
              </h2>
            </div>

            <div className="showcase">
              {featuredProjects.map((p, i) => {
                const detailsHref = detailsHrefFor(p.id);
                return (
                  <article key={p.id} className="showcase-item">
                    <div className="showcase-visual">
                      <img src={p.image} alt={p.title} />
                    </div>
                    <div className="showcase-copy">
                      <div className="showcase-number">
                        {String(i + 1).padStart(2, "0")} · {p.year}
                      </div>
                      <h3 className="showcase-title">{p.title}</h3>
                      <div className="showcase-tags">
                        <span className={`tag ${getStatusColor(p.status)}`}>
                          {getStatusLabel(p.status)}
                        </span>
                        {p.technologies.slice(0, 4).map((t) => (
                          <span key={t} className="tag tag-outline">{t}</span>
                        ))}
                        {p.technologies.length > 4 && (
                          <span className="tag tag-outline">
                            +{p.technologies.length - 4}
                          </span>
                        )}
                      </div>
                      <p className="showcase-description">{p.longDescription}</p>
                      <div className="showcase-links">
                        {detailsHref && (
                          <Link href={detailsHref} className="showcase-link is-primary">
                            View Details <span className="arrow">→</span>
                          </Link>
                        )}
                        {p.liveUrl && p.liveUrl !== "#" && (
                          <a
                            href={p.liveUrl}
                            className="showcase-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo <span className="arrow">↗</span>
                          </a>
                        )}
                        {p.githubUrl && p.githubUrl !== "#" && (
                          <a
                            href={p.githubUrl}
                            className="showcase-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub <span className="arrow">↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== Full archive — editorial strip list ===== */}
      <section className="section">
        <div className="container">
          <div className="mb-12">
            <div className="eyebrow">{unfiltered ? "Archive" : "Filtered"}</div>
            <h2 className="section-title">
              {unfiltered ? "Everything else." : "Matches your filter."}
            </h2>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">◎</div>
              <div className="empty-state-title">Nothing here yet</div>
              <p className="empty-state-description">
                Try adjusting your filters to see more projects.
              </p>
            </div>
          ) : (
            <div>
              {filteredProjects.map((p) => {
                const detailsHref = detailsHrefFor(p.id);
                return (
                  <article key={p.id} className="project-strip">
                    <div className="project-strip-media">
                      <img src={p.image} alt={p.title} />
                    </div>
                    <div>
                      <h3 className="project-strip-title">{p.title}</h3>
                      <div className="project-strip-meta">
                        <span>{p.year}</span>
                        <span className="dot">·</span>
                        <span className={`tag ${getStatusColor(p.status)}`}>
                          {getStatusLabel(p.status)}
                        </span>
                        {p.featured && (
                          <>
                            <span className="dot">·</span>
                            <span className="tag tag-orange">Featured</span>
                          </>
                        )}
                      </div>
                      <p className="project-strip-desc">{p.description}</p>
                      <div className="showcase-tags" style={{ marginBottom: 0 }}>
                        {p.technologies.slice(0, 5).map((t) => (
                          <span key={t} className="tag tag-outline">{t}</span>
                        ))}
                        {p.technologies.length > 5 && (
                          <span className="tag tag-outline">
                            +{p.technologies.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {detailsHref && (
                        <Link href={detailsHref} className="project-strip-cta">
                          View Details →
                        </Link>
                      )}
                      {p.liveUrl && p.liveUrl !== "#" && (
                        <a
                          href={p.liveUrl}
                          className="project-strip-cta"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo ↗
                        </a>
                      )}
                      {p.githubUrl && p.githubUrl !== "#" && (
                        <a
                          href={p.githubUrl}
                          className="project-strip-cta"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ===== Resume / CTA ===== */}
      <section className="section">
        <div className="container">
          <div className="contact-card text-center" style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Resume</div>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Want the <em>full story?</em>
            </h2>
            <p className="section-lede" style={{ marginBottom: "2rem", marginLeft: "auto", marginRight: "auto" }}>
              Download the PDF for experience, achievements, and a tidy one-page summary.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://res.cloudinary.com/shuzchef/image/upload/v1757991057/portfolio/saduwmvvdy0fnv7wscta.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Marvin_Chau_Resume.pdf"
                className="btn btn-primary"
              >
                Download Resume ↓
              </a>
              <Link href="/#contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
            <div style={{ marginTop: "1.25rem", color: "var(--muted)", fontSize: "0.85rem" }}>
              Last updated · September 2025
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <p style={{ color: "var(--muted)", margin: 0 }}>
                &copy; {new Date().getFullYear()} Marvin Chau — crafted with care.
              </p>
            </div>
            <div className="footer-links">
              <a
                href="https://www.linkedin.com/in/marvin-chau-8b356b14/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/shuzaku"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://x.com/ShuzChef"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
