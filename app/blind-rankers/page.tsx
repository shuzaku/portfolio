"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

const features = [
  {
    icon: "⚖️",
    title: "Pairwise Comparisons",
    description:
      "Players compare two items at a time — no scores, no leaderboards, no anchoring bias. Just: which of these two do you prefer?",
  },
  {
    icon: "🕶",
    title: "Truly Blind Voting",
    description:
      "Aggregate scores are hidden mid-session. Participants rank on taste alone — the ranking is revealed only after the round closes.",
  },
  {
    icon: "⚡",
    title: "Real-Time Rounds",
    description:
      "Socket.io keeps every connected player in sync — new votes update the pair queue, and session state stays consistent across devices.",
  },
  {
    icon: "📊",
    title: "Fair Aggregate Rankings",
    description:
      "A pairwise scoring algorithm (Elo-style) produces stable group rankings even from sparse, non-uniform comparison data.",
  },
  {
    icon: "☁️",
    title: "Cloud-Backed Media",
    description:
      "Item images and assets live in AWS S3 with pre-signed URLs — fast delivery, cheap storage, and no server-side bottleneck.",
  },
  {
    icon: "🧩",
    title: "Reusable Item Sets",
    description:
      "Anyone can spin up a new ranking round from a reusable item set. Fighting-game tier lists, food, movies — whatever a group wants to argue about.",
  },
];

const technicalDetails: Record<string, string[]> = {
  frontend: [
    "Nuxt 3 with the Composition API",
    "TypeScript end-to-end",
    "Reactive session store with Pinia",
    "Responsive, mobile-first UI",
  ],
  backend: [
    "Nitro / Node.js server routes",
    "Socket.io for real-time session sync",
    "MongoDB for item sets, rounds & votes",
    "Pairwise scoring algorithm (Elo-inspired)",
  ],
  media: [
    "AWS S3 for asset storage",
    "Pre-signed URL uploads from the client",
    "Automatic thumbnail sizing",
    "CDN-friendly public read paths",
  ],
  infrastructure: [
    "Env-driven configuration",
    "CI via GitHub Actions",
    "Preview deploys per branch",
    "Structured logging and error tracking",
  ],
  integrations: [
    "MongoDB Atlas",
    "AWS S3 + IAM-scoped credentials",
    "Socket.io namespaced rooms",
    "RESTful item-set CRUD API",
  ],
};

const challenges = [
  {
    title: "Ranking From Sparse Data",
    description:
      "With many items and few voters, not every pair will ever be compared — so naïve Elo can produce unstable rankings.",
    solution:
      "Biased the pair-selection algorithm to oversample low-information pairings, and blended Elo output with a Bayesian prior to stabilize rankings for items with few comparisons.",
  },
  {
    title: "Keeping Voters in Sync",
    description:
      "Live rounds involve multiple players voting concurrently — race conditions can produce duplicate comparisons or skewed counts.",
    solution:
      "Moved session state to server-authoritative rooms over Socket.io, with atomic MongoDB updates for every vote write — clients just subscribe to round deltas.",
  },
  {
    title: "Anchoring & Choice Fatigue",
    description:
      "Early prototypes leaked partial standings, causing later voters to anchor on existing rankings instead of voting honestly.",
    solution:
      "Enforced full opacity mid-round: no totals, no ratios, no ordering cues. The only thing a voter sees is the current pair and their own history.",
  },
  {
    title: "Asset Pipeline Performance",
    description:
      "Item images varied wildly in size — slow initial loads were killing the tight voting loop.",
    solution:
      "Moved uploads directly to S3 with pre-signed URLs, generated resized variants, and served a compact thumbnail during voting with a high-res fallback for the final reveal.",
  },
];

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "technical", label: "Technical" },
  { id: "challenges", label: "Challenges" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function BlindRankersPage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const project = {
    title: "Blind Rankers",
    subtitle: "A pairwise ranking game where opinions stay honest.",
    description:
      "A Nuxt.js game where players rank items through head-to-head comparisons — without ever seeing the running score. Real-time rounds, fair aggregate rankings, and cloud-backed asset storage produce a group verdict that's harder to game.",
    image:
      "https://placehold.co/1200x900/1e293b/94a3b8?text=Blind+Rankers",
    technologies: [
      "Nuxt.js",
      "TypeScript",
      "MongoDB",
      "Socket.io",
      "AWS S3",
      "Node.js",
    ],
    year: 2026,
    duration: "~3 months",
    teamSize: "Solo",
    role: "Full Stack Developer",
    status: "In Progress",
    githubUrl: "https://github.com/shuzaku/blind-ranking-game",
  };

  return (
    <div>
      <Navbar currentPage="projects" />

      {/* Breadcrumb */}
      <section className="container detail-breadcrumb">
        <nav>
          <Link href="/">Home</Link>
          <span className="sep">›</span>
          <Link href="/projects">Projects</Link>
          <span className="sep">›</span>
          <span style={{ color: "var(--cream)" }}>{project.title}</span>
        </nav>
      </section>

      {/* Hero */}
      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero-inner">
            <div>
              <div className="detail-hero-eyebrow">Web App · Real-Time</div>
              <h1 className="detail-hero-title">
                Blind <em>Rankers.</em>
              </h1>
              <p className="detail-hero-subtitle">{project.subtitle}</p>
              <p className="detail-hero-body">{project.description}</p>
              <div className="showcase-tags" style={{ marginBottom: "1.5rem" }}>
                {project.technologies.map((t) => (
                  <span key={t} className="tag tag-outline">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Code <span className="arrow">↗</span>
                </a>
                <Link href="/projects" className="btn btn-secondary">
                  All Projects
                </Link>
              </div>
            </div>

            <div className="detail-hero-visual">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="container">
        <div className="detail-stats">
          <div className="detail-stat">
            <span className="detail-stat-label">Year</span>
            <span className="detail-stat-value accent">{project.year}</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-label">Duration</span>
            <span className="detail-stat-value">{project.duration}</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-label">Team</span>
            <span className="detail-stat-value">{project.teamSize}</span>
          </div>
          <div className="detail-stat">
            <span className="detail-stat-label">Status</span>
            <span className="detail-stat-value">{project.status}</span>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container">
        <div className="detail-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`detail-tab ${activeTab === t.id ? "is-active" : ""}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* Tab content */}
      <section className="detail-section">
        <div className="container">
          {activeTab === "overview" && (
            <div>
              <h2 className="detail-section-title">
                Rank by <em>taste,</em> not by math.
              </h2>
              <div className="detail-prose">
                <p>
                  Most ranking tools reveal the score while you're voting —
                  which means late voters just rubber-stamp the existing order.
                  Blind Rankers hides it on purpose.
                </p>
                <p>
                  Players compare items two-at-a-time. The only thing you see is
                  the current pair. No totals, no ratios, no anchor. Once the
                  round closes, a pairwise scoring algorithm produces the group's
                  aggregate ranking — and <em>then</em> it's revealed.
                </p>
                <p>
                  Built on Nuxt 3, Socket.io, and MongoDB, with AWS S3 for
                  image assets. It's the tool I wish existed every time a group
                  chat tried to argue about tier lists.
                </p>
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <div>
              <h2 className="detail-section-title">
                Feature <em>highlights.</em>
              </h2>
              <div className="detail-grid-3">
                {features.map((f) => (
                  <div key={f.title} className="feature-card">
                    <div className="feature-card-icon">{f.icon}</div>
                    <h3 className="feature-card-title">{f.title}</h3>
                    <p className="feature-card-description">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "technical" && (
            <div>
              <h2 className="detail-section-title">
                Under the <em>hood.</em>
              </h2>
              <div className="detail-grid-2">
                {Object.entries(technicalDetails).map(([cat, items]) => (
                  <div key={cat} className="tech-card">
                    <div className="tech-card-label">{cat}</div>
                    <ul className="tech-list">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "challenges" && (
            <div>
              <h2 className="detail-section-title">
                Problems &amp; <em>solutions.</em>
              </h2>
              <div className="detail-grid-2">
                {challenges.map((c, i) => (
                  <div key={c.title} className="challenge-card">
                    <div className="challenge-card-number">
                      {String(i + 1).padStart(2, "0")} / {challenges.length}
                    </div>
                    <h3 className="challenge-card-title">{c.title}</h3>
                    <div className="challenge-card-label">Challenge</div>
                    <p className="challenge-card-body">{c.description}</p>
                    <div className="challenge-card-label is-solution">Solution</div>
                    <p className="challenge-card-body">{c.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta">
        <div className="container">
          <div className="detail-cta-card">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Next
            </div>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Want a <em>private</em> instance?
            </h2>
            <p
              className="section-lede"
              style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "2rem" }}
            >
              Happy to spin up a dedicated ranking room for your team, community,
              or group chat. Get in touch.
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
