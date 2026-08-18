import { useNavigate } from "react-router-dom";
import {
  FiGithub,
  FiStar,
  FiGitBranch,
  FiEye,
  FiArrowRight,
  FiExternalLink,
  FiUsers,
  FiCode,
  FiZap,
} from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import "./GitHub.css";

const TECH_STACK = [
  { name: "React", color: "#61dafb", desc: "UI framework" },
  { name: "Vite", color: "#646cff", desc: "Build tool" },
  { name: "Monaco Editor", color: "#00d46a", desc: "Code editor" },
  { name: "Node.js", color: "#68a063", desc: "Backend runtime" },
  { name: "Docker", color: "#2496ed", desc: "Execution engine" },
  { name: "Redis", color: "#ff6b6b", desc: "Queue & cache" },
  { name: "WebSockets", color: "#fbbf24", desc: "Real-time sync" },
];

const CONTRIBUTORS = [
  { name: "Alex Chen", role: "Lead Engineer", avatar: "AC", color: "#00d46a" },
  { name: "Sarah Kim", role: "Backend Architect", avatar: "SK", color: "#0099ff" },
  { name: "Marcus T.", role: "DevOps / Docker", avatar: "MT", color: "#a855f7" },
  { name: "Priya R.", role: "Frontend Dev", avatar: "PR", color: "#f97316" },
];

const ROADMAP = [
  { status: "done", label: "v1.0 — Core editor & execution engine" },
  { status: "done", label: "v1.1 — Real-time collaboration via WebSockets" },
  { status: "done", label: "v1.2 — Multi-language Docker support" },
  { status: "done", label: "v1.3 — Redis queue & horizontal scaling" },
  { status: "active", label: "v2.0 — AI-powered code suggestions (in progress)" },
  { status: "planned", label: "v2.1 — GitHub integration & file import" },
  { status: "planned", label: "v2.2 — Custom Docker image support" },
  { status: "planned", label: "v2.3 — Mobile-responsive editor" },
];

const STATS = [
  { icon: FiStar, value: "2.4k", label: "Stars" },
  { icon: FiGitBranch, value: "183", label: "Forks" },
  { icon: FiEye, value: "12k", label: "Watchers" },
  { icon: FiUsers, value: "28", label: "Contributors" },
];

function GitHub() {
  const navigate = useNavigate();

  return (
    <div className="github-page" id="github-page">
      {/* ---- Navbar ---- */}
      <nav className="home-nav" id="github-navbar">
        <div className="home-nav__logo">
          <div className="home-nav__logo-icon"><BsCodeSlash size={18} /></div>
          <span className="home-nav__brand">Code<span>Sync</span></span>
        </div>
        <div className="home-nav__links">
          <button className="home-nav__link" onClick={() => navigate("/features")}>Features</button>
          <button className="home-nav__link" onClick={() => navigate("/docs")}>Docs</button>
          <button className="home-nav__link" onClick={() => navigate("/pricing")}>Pricing</button>
          <button className="home-nav__link active" onClick={() => navigate("/github")}>GitHub</button>
        </div>
        <div className="home-nav__cta">
          <button className="btn btn-outline" onClick={() => navigate("/login")}>Log In</button>
          <button className="btn btn-primary" onClick={() => navigate("/create-room")}>
            Get Started <FiArrowRight size={13} />
          </button>
        </div>
      </nav>

      {/* ---- Hero ---- */}
      <section className="gh-hero" id="github-hero">
        <div className="gh-hero__inner">
          <div className="gh-hero__icon">
            <FiGithub size={40} />
          </div>
          <h1 className="gh-hero__title">
            Open Source &amp; <span>Transparent</span>
          </h1>
          <p className="gh-hero__desc">
            CodeSync is proudly open source. Explore the codebase, contribute, or fork it to build your own collaborative coding tool.
          </p>
          <div className="gh-hero__actions">
            <a
              id="github-view-repo-btn"
              href="https://github.com/codesync-io/codesync"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--primary gh-repo-link"
            >
              <FiGithub size={16} /> View Repository <FiExternalLink size={13} />
            </a>
            <button
              id="github-docs-btn"
              className="hero__btn hero__btn--secondary"
              onClick={() => navigate("/docs")}
            >
              Read the Docs <FiArrowRight size={14} />
            </button>
          </div>

          {/* Stats row */}
          <div className="gh-stats" id="github-stats">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="gh-stat">
                  <Icon size={16} className="gh-stat__icon" />
                  <span className="gh-stat__value">{s.value}</span>
                  <span className="gh-stat__label">{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Overview ---- */}
      <section className="gh-section" id="github-overview">
        <div className="gh-section__inner">
          <div className="gh-section__header">
            <FiCode size={18} className="gh-section__icon" />
            <h2>Project Overview</h2>
          </div>
          <div className="gh-overview-grid">
            <div className="gh-overview-card">
              <h4>What is CodeSync?</h4>
              <p>
                CodeSync is a distributed real-time code collaboration and execution platform. It combines the power of Monaco Editor, WebSocket-based OT (Operational Transformation), and Docker-based sandboxed execution into a single, browser-accessible tool.
              </p>
            </div>
            <div className="gh-overview-card">
              <h4>Architecture</h4>
              <p>
                The system is split into three services: a React frontend, a Node.js collaboration server, and a Docker execution worker. These communicate via WebSockets and a Redis job queue — allowing each component to scale independently.
              </p>
            </div>
            <div className="gh-overview-card">
              <h4>Why Open Source?</h4>
              <p>
                We believe developer tools should be transparent. By open-sourcing CodeSync, we invite the community to audit our security model, contribute features, and adapt the platform for their own use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Tech Stack ---- */}
      <section className="gh-section gh-section--alt" id="github-tech-stack">
        <div className="gh-section__inner">
          <div className="gh-section__header">
            <FiZap size={18} className="gh-section__icon" />
            <h2>Technology Stack</h2>
          </div>
          <div className="gh-tech-grid">
            {TECH_STACK.map((t) => (
              <div key={t.name} id={`tech-${t.name.toLowerCase().replace(/\s/g, "-")}`} className="gh-tech-card">
                <div className="gh-tech-card__dot" style={{ background: t.color }} />
                <span className="gh-tech-card__name" style={{ color: t.color }}>{t.name}</span>
                <span className="gh-tech-card__desc">{t.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Contributors ---- */}
      <section className="gh-section" id="github-contributors">
        <div className="gh-section__inner">
          <div className="gh-section__header">
            <FiUsers size={18} className="gh-section__icon" />
            <h2>Core Contributors</h2>
          </div>
          <div className="gh-contributors">
            {CONTRIBUTORS.map((c) => (
              <div key={c.name} className="gh-contributor">
                <div className="gh-contributor__avatar" style={{ background: c.color + "22", color: c.color, border: `2px solid ${c.color}44` }}>
                  {c.avatar}
                </div>
                <div className="gh-contributor__info">
                  <span className="gh-contributor__name">{c.name}</span>
                  <span className="gh-contributor__role">{c.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Roadmap ---- */}
      <section className="gh-section gh-section--alt" id="github-roadmap">
        <div className="gh-section__inner">
          <div className="gh-section__header">
            <FiGitBranch size={18} className="gh-section__icon" />
            <h2>Project Roadmap</h2>
          </div>
          <div className="gh-roadmap">
            {ROADMAP.map((item, i) => (
              <div key={i} className={`gh-roadmap__item gh-roadmap__item--${item.status}`}>
                <div className="gh-roadmap__dot" />
                <span className="gh-roadmap__label">{item.label}</span>
                <span className="gh-roadmap__badge">
                  {item.status === "done" ? "Released" : item.status === "active" ? "In Progress" : "Planned"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Footer ---- */}
      <footer className="footer" id="github-footer">
        <div className="footer__brand">
          <BsCodeSlash size={18} color="var(--accent-green)" />Code<span>Sync</span>
        </div>
        <span className="footer__copy">© 2026 CodeSync. All rights reserved.</span>
        <div className="footer__links">
          <button className="footer__link" onClick={() => navigate("/docs")}>Help</button>
          <button className="footer__link">Privacy</button>
          <button className="footer__link">Terms</button>
          <button className="footer__link" onClick={() => navigate("/docs")}>Documentation</button>
          <button className="footer__link" onClick={() => navigate("/github")}>GitHub</button>
        </div>
      </footer>
    </div>
  );
}

export default GitHub;
