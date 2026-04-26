import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import { websites, getWebsiteBySlug, statusLabel } from "../data";

export function generateStaticParams() {
  return websites.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const site = getWebsiteBySlug(slug);
  if (!site) return { title: "Website not found" };
  return {
    title: `${site.name} — Marvin Chau`,
    description: site.summary,
  };
}

export default async function WebsiteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const site = getWebsiteBySlug(slug);
  if (!site) notFound();

  return (
    <div>
      <Navbar currentPage="websites" />

      {/* Breadcrumb */}
      <section className="container detail-breadcrumb">
        <nav>
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <Link href="/websites">Websites</Link>
          <span className="sep">›</span>
          <span style={{ color: "var(--cream)" }}>{site.name}</span>
        </nav>
      </section>

      {/* Hero */}
      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero-inner">
            <div>
              <div className="detail-hero-eyebrow">
                {site.cuisine} · {site.location}
              </div>
              <h1 className="detail-hero-title">
                {site.name.split(" ").slice(0, -1).join(" ")}{" "}
                <em>{site.name.split(" ").slice(-1)}.</em>
              </h1>
              <p className="detail-hero-subtitle">{site.tagline}</p>
              <p className="detail-hero-body">{site.summary}</p>
              <div className="showcase-tags" style={{ marginBottom: "1.5rem" }}>
                {site.stack.map((s) => (
                  <span key={s} className="tag tag-outline">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                {site.liveUrl ? (
                  <a
                    href={site.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Live Site <span className="arrow">↗</span>
                  </a>
                ) : (
                  <span className="btn btn-secondary" style={{ cursor: "default" }}>
                    {statusLabel[site.status]}
                  </span>
                )}
                {site.githubUrl && (
                  <a
                    href={site.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    View Code <span className="arrow">↗</span>
                  </a>
                )}
                <Link href="/websites" className="btn btn-secondary">
                  All Websites
                </Link>
              </div>
            </div>

            <div className="detail-hero-visual">
              <img src={site.preview} alt={`${site.name} preview`} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="container">
        <div className="detail-stats">
          <div className="detail-stat">
            <span className="detail-stat-label">Year</span>
            <span className="detail-stat-value accent">{site.year}</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-label">Cuisine</span>
            <span className="detail-stat-value">{site.cuisine}</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-label">Role</span>
            <span className="detail-stat-value">{site.role}</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-label">Status</span>
            <span className="detail-stat-value">
              {statusLabel[site.status]}
            </span>
          </div>
        </div>
      </section>

      {/* Full-width mockup */}
      <section className="section" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
        <div className="container">
          <div
            className="mockup-frame"
            style={{ transform: "none" }}
          >
            <div className="mockup-chrome">
              <span className="mockup-dot r" />
              <span className="mockup-dot y" />
              <span className="mockup-dot g" />
              <span className="mockup-url">{site.previewUrl}</span>
            </div>
            <div className="mockup-body">
              <img src={site.preview} alt={`${site.name} full mockup`} />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="detail-section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            <div>
              <div className="eyebrow">The Story</div>
              <h2 className="detail-section-title">
                What I was <em>going for.</em>
              </h2>
              <div className="detail-prose">
                {site.longDescription.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-card-label">Sections</div>
              <ul className="tech-list">
                {site.sections.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Palette & Type */}
      <section className="detail-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            <div className="tech-card">
              <div className="tech-card-label">Palette</div>
              <div className="palette-row">
                {site.palette.map((p) => (
                  <div key={p.value} className="palette-swatch">
                    <div
                      className="palette-swatch-color"
                      style={{ background: p.value }}
                    />
                    <div className="palette-swatch-name">{p.name}</div>
                    <div className="palette-swatch-code">{p.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-card">
              <div className="tech-card-label">Typography</div>
              <ul className="tech-list">
                {site.fonts.map((f) => (
                  <li key={f.value}>
                    <strong style={{ color: "var(--cream)", marginRight: "0.5rem" }}>
                      {f.label}:
                    </strong>
                    {f.value}
                  </li>
                ))}
              </ul>
              {site.notes && (
                <p
                  style={{
                    marginTop: "1.5rem",
                    color: "var(--muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  {site.notes}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta">
        <div className="container">
          <div className="detail-cta-card">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Like what you see?
            </div>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Your kitchen could be <em>next.</em>
            </h2>
            <p
              className="section-lede"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "2rem",
              }}
            >
              Independent restaurants, pop-ups, teahouses — if you cook it, I can
              build the site for it.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/#contact" className="btn btn-primary">
                Get in Touch <span className="arrow">→</span>
              </Link>
              <Link href="/websites" className="btn btn-secondary">
                All Websites
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
