import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiUsers,
  FiGlobe,
  FiShield,
  FiHash,
  FiPlay,
  FiZap,
} from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import "./Home.css";

/* ---- Feature card data ---- */
const FEATURES = [
  {
    id: "collab",
    title: "Real-Time Collaboration",
    desc:
      "Edit code together with your team in real time. Every keystroke is synchronized instantly across all connected users.",
    Icon: FiUsers,
    iconBg: "rgba(0,212,106,0.12)",
    iconColor: "#00d46a",
  },
  {
    id: "multi-lang",
    title: "Multi-Language Support",
    desc:
      "Write in Python, JavaScript, Java, C++ and more. Full syntax highlighting powered by Monaco Editor.",
    Icon: FiGlobe,
    iconBg: "rgba(0,153,255,0.12)",
    iconColor: "#0099ff",
  },
  {
    id: "docker",
    title: "Secure Docker Execution",
    desc:
      "Every snippet runs inside an isolated Docker container. Safe, sandboxed, and production-grade.",
    Icon: FiShield,
    iconBg: "rgba(168,85,247,0.12)",
    iconColor: "#a855f7",
  },
  {
    id: "rooms",
    title: "Shared Coding Rooms",
    desc:
      "Create a room, share the link, and start collaborating instantly. No sign-up needed to join.",
    Icon: FiHash,
    iconBg: "rgba(249,115,22,0.12)",
    iconColor: "#f97316",
  },
];

/* ---- Stats ---- */
const STATS = [
  { value: "10k+", label: "Active Rooms" },
  { value: "50+",  label: "Languages" },
  { value: "99.9%", label: "Uptime" },
  { value: "<50ms", label: "Sync Latency" },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home" id="home-page">
      {/* ---- Navbar ---- */}
      <nav className="home-nav" id="home-navbar">
        <div className="home-nav__logo">
          <div className="home-nav__logo-icon">
            <BsCodeSlash size={18} />
          </div>
          <span className="home-nav__brand">
            Code<span>Sync</span>
          </span>
        </div>

        <div className="home-nav__links">
          <button className="home-nav__link" onClick={() => navigate("/features")}>Features</button>
          <button className="home-nav__link" onClick={() => navigate("/docs")}>Docs</button>
          <button className="home-nav__link" onClick={() => navigate("/pricing")}>Pricing</button>
          <button className="home-nav__link" onClick={() => navigate("/github")}>GitHub</button>
        </div>

        <div className="home-nav__cta">
          <button
            className="btn btn-outline"
            id="home-nav-login-btn"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
          <button
            className="btn btn-primary"
            id="home-nav-signup-btn"
            onClick={() => navigate("/create-room")}
          >
            Get Started <FiArrowRight size={13} />
          </button>
        </div>
      </nav>

      {/* ---- Hero ---- */}
      <section className="hero" id="hero-section">
        <div className="hero__inner">
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <FiZap size={11} />
            Now with real-time AI suggestions
          </div>

          {/* Title */}
          <h1 className="hero__title">
            The Future of
            <span className="hero__title-accent">Collaborative Coding</span>
          </h1>

          {/* Tagline */}
          <p className="hero__tagline">
            <span>Write.</span> <span>Run.</span> <span>Collaborate.</span>
          </p>

          {/* Description */}
          <p className="hero__description">
            CodeSync is a distributed real-time code execution and collaboration
            platform. Build, run, and share code with your team — all inside your
            browser.
          </p>

          {/* Buttons */}
          <div className="hero__actions">
            <button
              id="hero-create-room-btn"
              className="hero__btn hero__btn--primary"
              onClick={() => navigate("/create-room")}
            >
              <FiPlay size={15} />
              Create a Room
            </button>
            <button
              id="hero-join-room-btn"
              className="hero__btn hero__btn--secondary"
              onClick={() => navigate("/join-room")}
            >
              <FiHash size={15} />
              Join a Room
            </button>
          </div>

          {/* Code preview */}
          <div className="hero__preview" id="hero-code-preview">
            <div className="hero__preview-header">
              <span className="hero__preview-dot" />
              <span className="hero__preview-dot" />
              <span className="hero__preview-dot" />
              <span className="hero__preview-title">main.py — CodeSync Room: ROOM-7F3KX9</span>
            </div>
            <div className="hero__preview-body">
              <span className="code-line">
                <span className="code-cmt"># CodeSync — Real-time Python execution</span>
              </span>
              <span className="code-line">&nbsp;</span>
              <span className="code-line">
                <span className="code-kw">def </span>
                <span className="code-fn">fibonacci</span>
                <span style={{ color: "#89ddff" }}>(n):</span>
              </span>
              <span className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-cls">a</span>
                <span style={{ color: "#89ddff" }}>, </span>
                <span className="code-cls">b</span>
                <span style={{ color: "#89ddff" }}> = </span>
                <span className="code-num">0</span>
                <span style={{ color: "#89ddff" }}>, </span>
                <span className="code-num">1</span>
              </span>
              <span className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-kw">for </span>
                <span className="code-cls">_ </span>
                <span className="code-kw">in </span>
                <span className="code-fn">range</span>
                <span style={{ color: "#89ddff" }}>(n): </span>
                <span className="code-cmt">  # 🟢 Alex is editing here</span>
              </span>
              <span className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-kw">yield </span>
                <span className="code-cls">a</span>
              </span>
              <span className="code-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="code-cls">a</span>
                <span style={{ color: "#89ddff" }}>, </span>
                <span className="code-cls">b</span>
                <span style={{ color: "#89ddff" }}> = </span>
                <span className="code-cls">b</span>
                <span style={{ color: "#89ddff" }}>, </span>
                <span className="code-cls">a </span>
                <span style={{ color: "#89ddff" }}>+ </span>
                <span className="code-cls">b</span>
              </span>
              <span className="code-line">&nbsp;</span>
              <span className="code-line">
                <span className="code-fn">print</span>
                <span style={{ color: "#89ddff" }}>(</span>
                <span className="code-fn">list</span>
                <span style={{ color: "#89ddff" }}>(</span>
                <span className="code-fn">fibonacci</span>
                <span style={{ color: "#89ddff" }}>(</span>
                <span className="code-num">10</span>
                <span style={{ color: "#89ddff" }}>)))</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Stats ---- */}
      <section className="stats" id="stats-section">
        <div className="stats__inner">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-item__value">{s.value}</div>
              <div className="stat-item__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Features ---- */}
      <section className="features" id="features-section">
        <h2 className="features__heading">
          Everything you need to <span>code together</span>
        </h2>
        <p className="features__subheading">
          Built for speed, collaboration, and security — from day one.
        </p>

        <div className="features__grid">
          {FEATURES.map((f) => {
            const { Icon } = f;
            return (
              <div key={f.id} id={`feature-card-${f.id}`} className="feature-card">
                <div
                  className="feature-card__icon"
                  style={{ background: f.iconBg, color: f.iconColor }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="cta-section" id="cta-section">
        <h2 className="cta-section__title">
          Ready to <span>start coding?</span>
        </h2>
        <p className="cta-section__desc">
          Create a room in seconds and invite your teammates. No setup required.
        </p>
        <button
          id="cta-start-btn"
          className="hero__btn hero__btn--primary"
          onClick={() => navigate("/create-room")}
        >
          <FiPlay size={15} />
          Launch Editor
          <FiArrowRight size={15} />
        </button>
      </section>

      {/* ---- Footer ---- */}
      <footer className="footer" id="home-footer">
        <div className="footer__brand">
          <BsCodeSlash size={18} color="var(--accent-green)" />
          Code<span>Sync</span>
        </div>
        <span className="footer__copy">
          © 2026 CodeSync. All rights reserved.
        </span>
        <div className="footer__links">
          <button className="footer__link">Privacy</button>
          <button className="footer__link">Terms</button>
          <button className="footer__link">Contact</button>
          <button className="footer__link">GitHub</button>
        </div>
      </footer>
    </div>
  );
}

export default Home;