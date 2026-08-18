import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheck, FiArrowRight, FiZap, FiStar } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import "./Pricing.css";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Perfect for individuals and hobby projects.",
    badge: null,
    color: "#a0a0a0",
    btnLabel: "Start Free",
    btnClass: "pricing-btn--outline",
    features: [
      { label: "Max rooms", value: "3 active rooms" },
      { label: "Execution limits", value: "20 runs / hour" },
      { label: "Timeout", value: "10 seconds" },
      { label: "Storage", value: "50 MB" },
      { label: "Private rooms", value: false },
      { label: "Collaboration tools", value: "Basic (2 users)" },
      { label: "Console history", value: "24 hours" },
      { label: "API access", value: false },
      { label: "Priority support", value: false },
    ],
  },
  {
    id: "student",
    name: "Student",
    price: "$4",
    period: "/ month",
    desc: "Built for learners, bootcamps, and academic projects.",
    badge: "Most Popular",
    color: "#00d46a",
    btnLabel: "Choose Plan",
    btnClass: "pricing-btn--primary",
    features: [
      { label: "Max rooms", value: "20 active rooms" },
      { label: "Execution limits", value: "100 runs / hour" },
      { label: "Timeout", value: "30 seconds" },
      { label: "Storage", value: "500 MB" },
      { label: "Private rooms", value: true },
      { label: "Collaboration tools", value: "Full (up to 10 users)" },
      { label: "Console history", value: "30 days" },
      { label: "API access", value: "Read-only" },
      { label: "Priority support", value: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "$18",
    period: "/ month",
    desc: "For teams, interviews, and production workflows.",
    badge: "Best Value",
    color: "#a855f7",
    btnLabel: "Upgrade",
    btnClass: "pricing-btn--pro",
    features: [
      { label: "Max rooms", value: "Unlimited" },
      { label: "Execution limits", value: "Unlimited" },
      { label: "Timeout", value: "60 seconds" },
      { label: "Storage", value: "5 GB" },
      { label: "Private rooms", value: true },
      { label: "Collaboration tools", value: "Full (up to 20 users)" },
      { label: "Console history", value: "365 days" },
      { label: "API access", value: "Full REST + WebSocket" },
      { label: "Priority support", value: true },
    ],
  },
];

const FAQ = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time from your account settings. Billing is prorated automatically.",
  },
  {
    q: "Do you offer team billing?",
    a: "Professional plan supports team billing with a single invoice for up to 50 seats. Contact sales for enterprise pricing.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Yes — both Student and Professional plans include a 14-day free trial with no credit card required.",
  },
  {
    q: "What happens when I exceed my execution limit?",
    a: "Additional runs will be queued and processed when your limit resets at the start of the next hour. No charges are incurred.",
  },
];

function Pricing() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [annual, setAnnual] = useState(false);

  const getPrice = (plan) => {
    if (plan.id === "free") return "$0";
    const base = plan.id === "student" ? 4 : 18;
    return annual ? `$${Math.round(base * 0.75)}` : plan.price;
  };

  return (
    <div className="pricing-page" id="pricing-page">
      {/* ---- Navbar ---- */}
      <nav className="home-nav" id="pricing-navbar">
        <div className="home-nav__logo">
          <div className="home-nav__logo-icon"><BsCodeSlash size={18} /></div>
          <span className="home-nav__brand">Code<span>Sync</span></span>
        </div>
        <div className="home-nav__links">
          <button className="home-nav__link" onClick={() => navigate("/features")}>Features</button>
          <button className="home-nav__link" onClick={() => navigate("/docs")}>Docs</button>
          <button className="home-nav__link active" onClick={() => navigate("/pricing")}>Pricing</button>
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
      <section className="pricing-hero" id="pricing-hero">
        <div className="pricing-hero__inner">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <FiStar size={11} />
            Simple, transparent pricing
          </div>
          <h1 className="pricing-hero__title">
            Choose your <span>plan</span>
          </h1>
          <p className="pricing-hero__desc">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="pricing-toggle" id="pricing-billing-toggle">
            <span className={!annual ? "pricing-toggle__label--active" : "pricing-toggle__label"}>Monthly</span>
            <button
              className={`pricing-toggle__switch ${annual ? "pricing-toggle__switch--on" : ""}`}
              onClick={() => setAnnual(!annual)}
              id="pricing-annual-toggle"
            >
              <span className="pricing-toggle__knob" />
            </button>
            <span className={annual ? "pricing-toggle__label--active" : "pricing-toggle__label"}>
              Annual <span className="pricing-toggle__save">Save 25%</span>
            </span>
          </div>
        </div>
      </section>

      {/* ---- Plans ---- */}
      <section className="pricing-cards" id="pricing-cards">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            id={`pricing-card-${plan.id}`}
            className={`pricing-card ${plan.badge === "Most Popular" ? "pricing-card--featured" : ""}`}
          >
            {plan.badge && (
              <div
                className="pricing-card__badge"
                style={{ background: plan.color + "22", color: plan.color, border: `1px solid ${plan.color}44` }}
              >
                <FiZap size={11} /> {plan.badge}
              </div>
            )}

            <div className="pricing-card__header">
              <h3 className="pricing-card__name" style={{ color: plan.color }}>{plan.name}</h3>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">{getPrice(plan)}</span>
                <span className="pricing-card__period">{plan.period}</span>
              </div>
              <p className="pricing-card__desc">{plan.desc}</p>
            </div>

            <ul className="pricing-card__features">
              {plan.features.map((f) => (
                <li key={f.label} className="pricing-card__feature">
                  <span className="pricing-card__feature-label">{f.label}</span>
                  {typeof f.value === "boolean" ? (
                    <span className={`pricing-card__feature-bool ${f.value ? "pricing-card__feature-bool--yes" : "pricing-card__feature-bool--no"}`}>
                      {f.value ? <FiCheck size={13} /> : "—"}
                    </span>
                  ) : (
                    <span className="pricing-card__feature-value">{f.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <button
              id={`pricing-btn-${plan.id}`}
              className={`pricing-btn ${plan.btnClass}`}
              style={plan.btnClass === "pricing-btn--pro" ? { background: plan.color, borderColor: plan.color } : {}}
              onClick={() => navigate(plan.id === "free" ? "/create-room" : "/login")}
            >
              {plan.btnLabel}
            </button>
          </div>
        ))}
      </section>

      {/* ---- FAQ ---- */}
      <section className="pricing-faq" id="pricing-faq">
        <h2 className="pricing-faq__title">Frequently asked questions</h2>
        <div className="pricing-faq__list">
          {FAQ.map((item, i) => (
            <div key={i} className="pricing-faq__item" id={`faq-item-${i}`}>
              <button
                className={`pricing-faq__q ${openFaq === i ? "pricing-faq__q--open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                id={`faq-btn-${i}`}
              >
                {item.q}
                <span className="pricing-faq__icon">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <p className="pricing-faq__a">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---- Footer ---- */}
      <footer className="footer" id="pricing-footer">
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

export default Pricing;
