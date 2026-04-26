"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { websites, statusLabel, statusTone } from "./data";

export default function WebsitesPage() {
  const total = websites.length;
  const live = websites.filter((w) => w.status === "live").length;
  const inDev = websites.filter(
    (w) => w.status === "in-development" || w.status === "in-design"
  ).length;

  return (
    <div>
      <Navbar currentPage="websites" />

      {/* Editorial hero */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-inner">
            <div>
              <div className="eyebrow">Websites · Restaurants</div>
              <h1 className="hero-title" style={{ marginBottom: "1.25rem" }}>
                Websites I've <em>cooked up.</em>
              </h1>
              <p className="section-lede" style={{ marginBottom: 0, maxWidth: "38rem" }}>
                Mockups and production builds for restaurants and food
                concepts — editorial, warm, and built to sell a table, not just
                serve a menu.
              </p>
            </div>
            <div className="projects-stats">
              <div className="project-stat">
                <div className="project-stat-number">{total}</div>
                <div className="project-stat-label">Sites</div>
              </div>
              <div className="project-stat">
                <div className="project-stat-number">{live}</div>
                <div className="project-stat-label">Live</div>
              </div>
              <div className="project-stat">
                <div className="project-stat-number">{inDev}</div>
                <div className="project-stat-label">In Progress</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className="section" style={{ paddingTop: "3rem" }}>
        <div className="container">
          {websites.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">◎</div>
              <div className="empty-state-title">No sites yet</div>
              <p className="empty-state-description">
                Drop in a website entry in <code>app/websites/data.ts</code> to
                get started.
              </p>
            </div>
          ) : (
            websites.map((site, i) => (
              <article key={site.slug} className="website-item">
                <div className="website-item-head">
                  <div>
                    <div className="website-item-index">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="website-item-title">{site.name}</h2>
                    <p className="website-item-sub">{site.tagline}</p>
                  </div>
                  <div className="website-item-meta">
                    <span>{site.cuisine}</span>
                    <span className="dot" />
                    <span>{site.location}</span>
                    <span className="dot" />
                    <span>{site.year}</span>
                    <span className="dot" />
                    <span className={`tag ${statusTone[site.status]}`}>
                      {statusLabel[site.status]}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/websites/${site.slug}`}
                  className="mockup-frame"
                  style={{ textDecoration: "none", display: "block" }}
                  aria-label={`${site.name} — view case study`}
                >
                  <div className="mockup-chrome">
                    <span className="mockup-dot r" />
                    <span className="mockup-dot y" />
                    <span className="mockup-dot g" />
                    <span className="mockup-url">{site.previewUrl}</span>
                  </div>
                  <div className="mockup-body">
                    <img src={site.preview} alt={`${site.name} mockup preview`} />
                  </div>
                </Link>

                <div className="website-item-body">
                  <div>
                    <p className="website-item-desc">{site.summary}</p>
                    <div className="website-item-links">
                      <Link
                        href={`/websites/${site.slug}`}
                        className="showcase-link is-primary"
                      >
                        View Case Study <span className="arrow">→</span>
                      </Link>
                      {site.liveUrl && (
                        <a
                          href={site.liveUrl}
                          className="showcase-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Site <span className="arrow">↗</span>
                        </a>
                      )}
                      {site.githubUrl && (
                        <a
                          href={site.githubUrl}
                          className="showcase-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub <span className="arrow">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="website-item-side">
                    <div>
                      <div className="website-item-side-label">Stack</div>
                      <div className="showcase-tags" style={{ marginBottom: 0 }}>
                        {site.stack.map((s) => (
                          <span key={s} className="tag tag-outline">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="website-item-side-label">Role</div>
                      <div style={{ color: "var(--cream)", fontSize: "0.95rem" }}>
                        {site.role}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta">
        <div className="container">
          <div className="detail-cta-card">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Working on a restaurant?
            </div>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Let's build your <em>house on the web.</em>
            </h2>
            <p
              className="section-lede"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "2rem",
              }}
            >
              Menus, reservations, neighborhood sites — I love designing and
              building for independent kitchens.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/#contact" className="btn btn-primary">
                Get in Touch <span className="arrow">→</span>
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                View All Projects
              </Link>
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
