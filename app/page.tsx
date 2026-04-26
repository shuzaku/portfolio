"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "./components/Navbar";

type SkillGroup = {
  label: string;
  tone: "is-frontend" | "is-backend" | "is-lang" | "is-arch" | "is-devops" | "is-test";
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    tone: "is-frontend",
    items: ["React", "Vue", "Next.js", "Nuxt.js", "TypeScript"],
  },
  {
    label: "Backend",
    tone: "is-backend",
    items: ["Node.js", "Express", "NestJS", "Python", "Flask", ".NET Entity", "PostgreSQL"],
  },
  {
    label: "Languages & Data",
    tone: "is-lang",
    items: ["TypeScript", "C#", "Python", "PHP", "SQL Server", "MongoDB", "Redis", "MySQL"],
  },
  {
    label: "Architecture & APIs",
    tone: "is-arch",
    items: ["REST", "OData", "GraphQL", "Microservices", "API Integrations"],
  },
  {
    label: "DevOps & Infra",
    tone: "is-devops",
    items: ["Azure", "GCP", "Firebase", "Docker", "Azure DevOps", "GitHub Actions", "Jenkins"],
  },
  {
    label: "Testing",
    tone: "is-test",
    items: ["Jest", "NUnit", "PyTest", "Cypress"],
  },
];

type Showcase = {
  number: string;
  title: string;
  titleEm: string;
  description: string;
  image: string;
  tags: { label: string; tone: string }[];
  links: { label: string; href: string; primary?: boolean; internal?: boolean }[];
};

const showcases: Showcase[] = [
  {
    number: "01",
    title: "A social layer for the",
    titleEm: "fighting game community",
    description:
      "Fighters-Edge is a full-stack social feed built with Nuxt.js, Node.js, and MongoDB. Real-time posts, tournament threads, and profiles — all optimized for a tight-knit community.",
    image:
      "https://res.cloudinary.com/shuzchef/image/upload/v1757796678/portfolio/ckev6mkjsf0elso75qxm.png",
    tags: [
      { label: "Nuxt.js", tone: "tag-blue" },
      { label: "Node.js", tone: "tag-green" },
      { label: "MongoDB", tone: "tag-purple" },
    ],
    links: [
      { label: "View Details", href: "/fighters-edge", primary: true, internal: true },
      { label: "Live Demo", href: "https://fighters-edge.com" },
      { label: "GitHub", href: "https://github.com/shuzaku/fightme" },
    ],
  },
  {
    number: "02",
    title: "Object detection for",
    titleEm: "gameplay replays",
    description:
      "Replay Reviewer is an AI-driven tool using Ultralytics, OpenAI, and custom text detection to analyze fighting-game replays — automatically surfacing key moments and performance metrics.",
    image:
      "https://res.cloudinary.com/shuzchef/image/upload/v1757969941/portfolio/x5gst9wfaehn0dkupcf3.png",
    tags: [
      { label: "Python", tone: "tag-blue" },
      { label: "Ultralytics", tone: "tag-orange" },
      { label: "OpenAI", tone: "tag-yellow" },
    ],
    links: [
      { label: "Live Demo", href: "#", primary: true },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    number: "03",
    title: "A marketing platform for",
    titleEm: "IT service providers",
    description:
      "Glasshive is a comprehensive sales & marketing application for MSPs. Built with Vue, Node.js, and .NET Entity — integrating OpenAI, Twilio, and a constellation of third-party APIs.",
    image:
      "https://res.cloudinary.com/shuzchef/image/upload/v1757984649/portfolio/ykonh6cflvs594om0ye9.png",
    tags: [
      { label: "Vue", tone: "tag-blue" },
      { label: "Node.js", tone: "tag-green" },
      { label: ".NET Entity", tone: "tag-purple" },
    ],
    links: [
      { label: "View Details", href: "/marketing-app", primary: true, internal: true },
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

const marqueeWords = [
  "Full Stack",
  "Editorial Craft",
  "Real-Time Systems",
  "AI & ML",
  "Design Engineering",
  "Game Dev",
  "Scalable APIs",
  "Developer Experience",
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderLink = (
    link: { label: string; href: string; primary?: boolean; internal?: boolean }
  ) => {
    const className = `showcase-link${link.primary ? " is-primary" : ""}`;
    const content = (
      <>
        {link.label}
        <span className="arrow">→</span>
      </>
    );
    if (link.internal) {
      return (
        <Link key={link.label} href={link.href} className={className}>
          {content}
        </Link>
      );
    }
    return (
      <a
        key={link.label}
        href={link.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  };

  return (
    <div>
      <Navbar currentPage="home" />

      {/* ===== HERO ===== */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-editorial">
            <div>
              <div className="hero-eyebrow">Available for work · Dallas, TX</div>
              <h1 className="hero-title">
                <span className="line"><span>Marvin Chau</span></span>
                <span className="line"><span><em>builds</em> thoughtful</span></span>
                <span className="line"><span>web experiences.</span></span>
              </h1>
              <p className="hero-subtitle">
                Full Stack developer crafting scalable apps, real-time systems, and the
                occasional roguelite. Comfortable from database schemas to pixel-perfect UI.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View Work
                  <span className="arrow">→</span>
                </a>
                <a href="#contact" className="btn btn-secondary">Get in Touch</a>
                <a
                  href="https://res.cloudinary.com/shuzchef/image/upload/v1757991057/portfolio/saduwmvvdy0fnv7wscta.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Resume ↗
                </a>
              </div>
            </div>

            <div className="hero-portrait">
              <img
                src="https://res.cloudinary.com/shuzchef/image/upload/v1757970503/portfolio/wk7zebtto4nyie3wohvv.png"
                alt="Marvin Chau"
              />
              <div className="hero-portrait-tag">Est. 2015 · TX</div>
            </div>
          </div>

          <div className="hero-marquee" aria-hidden="true">
            <div className="hero-marquee-track">
              {[...marqueeWords, ...marqueeWords].map((word, i) => (
                <span key={i} className="hero-marquee-item">{word}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section about">
        <div className="container">
          <div className="about-split">
            <div>
              <div className="eyebrow">About</div>
              <p className="about-intro-lede">
                I love building things that feel inevitable — fast, considered,
                and quietly delightful.
              </p>
              <p className="about-intro-body">
                I'm a full stack developer with experience across frontend frameworks,
                distributed backends, and everything in between. When I'm not shipping,
                I'm cooking, sketching game ideas, or diving into something new.
              </p>
            </div>

            <div>
              <span className="about-side-label">Stack &amp; Craft</span>
              {skillGroups.map((group) => (
                <div key={group.label} className="skill-group">
                  <div className="skill-group-label">{group.label}</div>
                  <div className="skill-cloud">
                    {group.items.map((item) => (
                      <span key={item} className={`skill-chip ${group.tone}`}>
                        <span className="dot" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS (zigzag showcase) ===== */}
      <section id="projects" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="eyebrow" style={{ justifyContent: "center" }}>Selected Work</div>
            <h2 className="section-title">
              Projects I've <em>loved</em> making.
            </h2>
            <p className="section-lede" style={{ marginLeft: "auto", marginRight: "auto" }}>
              A small selection of recent builds. Each one taught me something I'm still using.
            </p>
          </div>

          <div className="showcase">
            {showcases.map((s) => (
              <article key={s.number} className="showcase-item">
                <div className="showcase-visual">
                  <img src={s.image} alt={s.title} />
                </div>
                <div className="showcase-copy">
                  <div className="showcase-number">{s.number}</div>
                  <h3 className="showcase-title">
                    {s.title} <em>{s.titleEm}</em>
                  </h3>
                  <p className="showcase-description">{s.description}</p>
                  <div className="showcase-tags">
                    {s.tags.map((t) => (
                      <span key={t.label} className={`tag ${t.tone}`}>{t.label}</span>
                    ))}
                  </div>
                  <div className="showcase-links">
                    {s.links.map(renderLink)}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "5rem" }}>
            <Link href="/projects" className="btn btn-primary">
              Browse All Projects
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="contact-split">
            <div>
              <div className="eyebrow">Contact</div>
              <h2 className="section-title">
                Let's <em>build</em> something together.
              </h2>
              <p className="section-lede" style={{ marginBottom: "1rem" }}>
                Got an idea, a role, or just want to chat? My inbox is open and
                I try to reply within a day.
              </p>
              <div className="contact-info">
                <a href="mailto:mtchau@gmail.com" className="contact-item" style={{ textDecoration: "none" }}>
                  <span className="contact-icon">✉</span>
                  <span>mtchau@gmail.com</span>
                </a>
                <div className="contact-item">
                  <span className="contact-icon">☎</span>
                  <span>+1 (512) 986-2807</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">⌖</span>
                  <span>Dallas, TX</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-card">
              {submitStatus === "success" && (
                <div className="alert alert-success">
                  Message sent — I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="alert alert-error">
                  Something went wrong. Please try again.
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
                  placeholder="you@example.com"
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
                  placeholder="Tell me about your project…"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
                <span className="arrow">→</span>
              </button>
            </form>
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
