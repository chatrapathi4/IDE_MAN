import { useNavigate } from "react-router-dom";
import {
  FiUsers,
  FiGlobe,
  FiShield,
  FiHash,
  FiZap,
  FiServer,
  FiArrowRight,
  FiArrowUpRight,
  FiPlay,
} from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import "./Features.css";

const FEATURES = [
  {
    id: "realtime",
    icon: FiUsers,
    color: "#00d46a",
    bg: "rgba(0,212,106,0.12)",
    title: "Real-Time Collaboration",
    desc:
      "Edit code with your team simultaneously. Every keystroke is propagated in under 50 ms via WebSockets, giving all participants a perfectly synchronised view.",
    details: ["Conflict-free merges via OT", "Cursor presence indicators", "Typing notifications", "Session persistence"],
  },
  {
    id: "monaco",
    icon: BsCodeSlash,
    color: "#0099ff",
    bg: "rgba(0,153,255,0.12)",
    title: "Monaco Editor Integration",
    desc:
      "The same powerful editor that powers VS Code — with IntelliSense, multi-cursor editing, code folding, and rich keyboard shortcuts built in from day one.",
    details: ["IntelliSense & auto-complete", "Multi-cursor editing", "Code folding", "Vim / Emacs key bindings"],
  },
  {
    id: "docker",
    icon: FiShield,
    color: "#a855f7",
    bg: "rgba(168,85,247,0.12)",
    title: "Secure Docker Execution",
    desc:
      "Every submission runs inside a fresh, isolated Docker container with strict resource limits. No persistent state, no cross-user contamination.",
    details: ["CPU & memory caps", "No network access", "Ephemeral containers", "Timeout enforcement"],
  },
  {
    id: "multilang",
    icon: FiGlobe,
    color: "#f97316",
    bg: "rgba(249,115,22,0.12)",
    title: "Multi-Language Support",
    desc:
      "Python, JavaScript, Java, C++, Go, Rust, TypeScript and more. Switch languages at any time while keeping your room live.",
    details: ["50+ languages", "Custom runtime images", "Language-specific defaults", "Syntax highlighting for all"],
  },
  {
    id: "redis",
    icon: FiServer,
    color: "#ff4757",
    bg: "rgba(255,71,87,0.12)",
    title: "Redis Queue Management",
    desc:
      "Execution jobs are dispatched through a Redis-backed queue, ensuring fair scheduling, retry logic, and horizontal scaling without dropped requests.",
    details: ["Priority queue support", "Auto-retry on failure", "Job status streaming", "Horizontally scalable"],
  },
  {
    id: "sync",
    icon: FiZap,
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.12)",
    title: "Live User Synchronization",
    desc:
      "See who's online, where their cursor is, and what they're typing — all in real time. Designed for pair programming and group coding sessions.",
    details: ["Presence avatars", "Live cursor tracking", "Activity feed", "Role-based permissions"],
  },
];

function Features() {
  const navigate = useNavigate();

  return (
    <div className="features-page" id="features-page">
      {/* ---- Navbar ---- */}
      <nav className="home-nav" id="features-navbar">
        <div className="home-nav__logo">
          <div className="home-nav__logo-icon">
            <BsCodeSlash size={18} />
          </div>
          <span className="home-nav__brand">
            Code<span>Sync</span>
          </span>
        </div>

        <div className="home-nav__links">
          <button className="home-nav__link active" onClick={() => navigate("/features")}>Features</button>
          <button className="home-nav__link" onClick={() => navigate("/docs")}>Docs</button>
          <button className="home-nav__link" onClick={() => navigate("/pricing")}>Pricing</button>
          <button className="home-nav__link" onClick={() => navigate("/github")}>GitHub</button>
        </div>

        <div className="home-nav__cta">
          <button className="btn btn-outline" onClick={() => navigate("/login")}>Log In</button>
          <button className="btn btn-primary" onClick={() => navigate("/create-room")}>
            Get Started <FiArrowRight size={13} />
          </button>
        </div>
      </nav>

      {/* ---- Hero ---- */}
      <section className="feat-hero" id="features-hero">
        <div className="feat-hero__inner">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <FiZap size={11} />
            Powerful by design
          </div>
          <h1 className="feat-hero__title">
            Everything you need to<br />
            <span className="feat-hero__accent">code together</span>
          </h1>
          <p className="feat-hero__desc">
            CodeSync ships with a complete suite of collaboration and execution tools — no plugins, no configuration, no overhead.
          </p>
          <div className="feat-hero__actions">
            <button id="features-try-btn" className="hero__btn hero__btn--primary" onClick={() => navigate("/create-room")}>
              <FiPlay size={14} /> Try it Free
            </button>
            <button id="features-docs-btn" className="hero__btn hero__btn--secondary" onClick={() => navigate("/docs")}>
              Read the Docs <FiArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ---- Cards ---- */}
      <section className="feat-grid-section" id="features-grid">
        <div className="feat-grid">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.id} id={`feat-card-${f.id}`} className="feat-card">
                <div className="feat-card__top">
                  <div className="feat-card__icon" style={{ background: f.bg, color: f.color }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="feat-card__title">{f.title}</h3>
                  <p className="feat-card__desc">{f.desc}</p>
                </div>
                <ul className="feat-card__list">
                  {f.details.map((d) => (
                    <li key={d} className="feat-card__item">
                      <span className="feat-card__dot" style={{ background: f.color }} />
                      {d}
                    </li>
                  ))}
                </ul>
                <button
                  className="feat-card__btn"
                  style={{ color: f.color, borderColor: f.color + "40" }}
                  onClick={() => navigate("/docs")}
                >
                  Learn More <FiArrowUpRight size={13} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="feat-cta" id="features-cta">
        <h2 className="feat-cta__title">Ready to <span>build something great?</span></h2>
        <p className="feat-cta__desc">Start for free. No credit card required.</p>
        <button id="features-cta-btn" className="hero__btn hero__btn--primary" onClick={() => navigate("/create-room")}>
          <FiPlay size={14} /> Create a Room
        </button>
      </section>

      {/* ---- Footer ---- */}
      <footer className="footer" id="features-footer">
        <div className="footer__brand">
          <BsCodeSlash size={18} color="var(--accent-green)" />
          Code<span>Sync</span>
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

export default Features;
