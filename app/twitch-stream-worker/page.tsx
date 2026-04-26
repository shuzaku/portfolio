"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

const features = [
  {
    icon: "🎛",
    title: "24/7 RTMP Pipeline",
    description:
      "Unattended streaming worker that continuously resolves, composites, and pushes video to Twitch — recovering gracefully from network and source failures.",
  },
  {
    icon: "🎬",
    title: "Shuffled Playlist Engine",
    description:
      "Pulls curated match playlists from the FightersEdge API and shuffles them server-side for varied, evergreen programming.",
  },
  {
    icon: "🔗",
    title: "yt-dlp Source Resolution",
    description:
      "Resolves YouTube sources in real-time via yt-dlp — picking the best available quality while handling redirects, throttling, and expired URLs.",
  },
  {
    icon: "🖼",
    title: "Live HTML Overlay",
    description:
      "Composites a transparent HTML overlay over the video using ffmpeg, surfacing now-playing metadata, game, characters, and player tags.",
  },
  {
    icon: "🛰",
    title: "Express Metadata Server",
    description:
      "Lightweight Express server serves the overlay and exposes a now-playing endpoint — consumable by chat bots and external widgets.",
  },
  {
    icon: "⚙️",
    title: "Config-Driven",
    description:
      "Every knob — quality, overlay layout, stream key, playlist source — is environment-driven, so redeploying is a config change, not a code change.",
  },
];

const technicalDetails: Record<string, string[]> = {
  runtime: [
    "Node.js + TypeScript worker process",
    "Long-running supervisor loop with retry/backoff",
    "Per-track timeout and crash isolation",
  ],
  media: [
    "ffmpeg as the compositing & encoding engine",
    "yt-dlp for source stream resolution",
    "RTMP output to Twitch Ingest servers",
    "Custom overlay compositing via filter_complex",
  ],
  overlay: [
    "Express.js server serving HTML overlay",
    "Live now-playing endpoint (JSON)",
    "Static asset pipeline for fonts / icons",
    "Chromium headless rendering path",
  ],
  integrations: [
    "FightersEdge API (playlist source)",
    "Twitch RTMP ingest",
    "YouTube via yt-dlp",
    "Env-based config (dotenv)",
  ],
  ops: [
    "Deployable as a Docker container",
    "systemd / PM2-friendly process model",
    "Structured logs for run-time telemetry",
    "Manual + auto playlist rotation",
  ],
};

const challenges = [
  {
    title: "Seamless Track Transitions",
    description:
      "Hard cuts between videos caused visible stalls and audio dropouts on the Twitch output.",
    solution:
      "Moved to a single long-lived ffmpeg process using concat demuxer + audio normalization filters, so transitions happen inside the encoder — no RTMP reconnect, no overlay flicker.",
  },
  {
    title: "Overlay <> Video Sync",
    description:
      "The metadata overlay lagged behind the actual playing track by several seconds, confusing viewers.",
    solution:
      "Emitted track-change events from the worker to the overlay over an HTTP endpoint the moment ffmpeg advances to a new input — so the overlay updates in lockstep with the encoder's timeline.",
  },
  {
    title: "yt-dlp Throttling & Expiry",
    description:
      "YouTube source URLs expire and yt-dlp can throttle — breaking long unattended runs.",
    solution:
      "Added pre-fetch with caching and an on-failure re-resolution strategy with exponential backoff. The worker now eagerly resolves the next N tracks ahead of the playhead.",
  },
  {
    title: "Graceful Failure Recovery",
    description:
      "A single bad video would crash the pipeline and take the stream offline.",
    solution:
      "Wrapped each track in a supervised task with timeout, skip-on-error, and structured error logging. The stream falls back to a house intro clip if the queue ever empties.",
  },
];

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "technical", label: "Technical" },
  { id: "challenges", label: "Challenges" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function TwitchStreamWorkerPage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const project = {
    title: "Twitch Stream Worker",
    titleEm: "24/7 fighting-game channel.",
    subtitle: "A headless streaming engine for the FightersEdge Twitch channel.",
    description:
      "An unattended Node.js worker that pulls curated match playlists from FightersEdge, resolves video sources with yt-dlp, composites a live HTML metadata overlay via ffmpeg, and pushes the result to Twitch over RTMP — all day, every day.",
    image:
      "https://placehold.co/1200x900/312e81/a5b4fc?text=Twitch+Stream+Worker",
    technologies: [
      "TypeScript",
      "Node.js",
      "ffmpeg",
      "yt-dlp",
      "Express",
      "RTMP",
      "Docker",
    ],
    year: 2026,
    duration: "~2 months",
    teamSize: "Solo",
    role: "Systems Engineer",
    status: "In Progress",
    githubUrl: "https://github.com/shuzaku/twitch-stream-worker",
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
              <div className="detail-hero-eyebrow">Systems · Streaming</div>
              <h1 className="detail-hero-title">
                {project.title.split(" ").slice(0, -1).join(" ")}{" "}
                <em>{project.title.split(" ").slice(-1)}.</em>
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
                A stream that runs <em>itself.</em>
              </h2>
              <div className="detail-prose">
                <p>
                  FightersEdge aggregates fighting-game match replays, and the
                  community wanted a way to watch them passively — like a cable
                  channel that never went off the air. This worker is the engine
                  behind that channel.
                </p>
                <p>
                  It pulls shuffled playlists from the FightersEdge API, resolves
                  each video with yt-dlp, pipes the result through ffmpeg with a
                  live HTML overlay compositor, and encodes to Twitch over RTMP —
                  all in a single long-running Node.js process.
                </p>
                <p>
                  The overlay surfaces real-time now-playing metadata (game,
                  matchup, player tags) from a small Express server. Everything
                  is environment-driven, containerized, and restart-safe.
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
              Building something <em>similar?</em>
            </h2>
            <p
              className="section-lede"
              style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "2rem" }}
            >
              I love systems work — media pipelines, long-running workers, and
              anything with ffmpeg in the stack.
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
