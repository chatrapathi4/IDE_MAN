import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiAlertCircle,
  FiGithub,
} from "react-icons/fi";
import { BsCodeSlash, BsGoogle } from "react-icons/bs";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.trim()) { setError("Please enter your username or email."); return; }
    if (!form.password) { setError("Please enter your password."); return; }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/editor");
    }, 1000);
  };

  const handleOAuth = (provider) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/editor");
    }, 800);
  };

  return (
    <div className="login-page" id="login-page">
      {/* Background grid */}
      <div className="login-bg" />

      {/* ---- Logo top-left ---- */}
      <button className="login-logo" id="login-logo-btn" onClick={() => navigate("/")}>
        <div className="login-logo__icon"><BsCodeSlash size={16} /></div>
        <span className="login-logo__brand">Code<span>Sync</span></span>
      </button>

      {/* ---- Card ---- */}
      <div className="login-card" id="login-card">
        <div className="login-card__header">
          <h1 className="login-card__title">Welcome back</h1>
          <p className="login-card__subtitle">Sign in to your CodeSync account</p>
        </div>

        {/* OAuth */}
        <div className="login-oauth">
          <button
            id="login-google-btn"
            className="login-oauth__btn"
            onClick={() => handleOAuth("google")}
            disabled={loading}
          >
            <BsGoogle size={16} />
            Continue with Google
          </button>
          <button
            id="login-github-btn"
            className="login-oauth__btn"
            onClick={() => handleOAuth("github")}
            disabled={loading}
          >
            <FiGithub size={16} />
            Continue with GitHub
          </button>
        </div>

        <div className="login-divider">
          <span>or continue with email</span>
        </div>

        {/* Form */}
        <form className="login-form" onSubmit={handleSubmit} id="login-form" noValidate>
          {error && (
            <div className="login-error" id="login-error-msg">
              <FiAlertCircle size={14} />
              {error}
            </div>
          )}

          {/* Email */}
          <div className="login-field">
            <label htmlFor="login-email" className="login-label">Username or Email</label>
            <div className="login-input-wrap">
              <FiMail size={15} className="login-input-icon" />
              <input
                id="login-email"
                name="email"
                type="text"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="login-input"
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="login-field">
            <div className="login-label-row">
              <label htmlFor="login-password" className="login-label">Password</label>
              <button
                type="button"
                id="login-forgot-btn"
                className="login-forgot"
                onClick={() => {}}
              >
                Forgot Password?
              </button>
            </div>
            <div className="login-input-wrap">
              <FiLock size={15} className="login-input-icon" />
              <input
                id="login-password"
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="login-input"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="login-eye"
                id="login-toggle-password"
                onClick={() => setShowPass(!showPass)}
                tabIndex={-1}
              >
                {showPass ? <FiEyeOff size={15} /> : <FiEye size={15} />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <label className="login-remember" htmlFor="login-remember">
            <input
              id="login-remember"
              name="remember"
              type="checkbox"
              checked={form.remember}
              onChange={handleChange}
              className="login-checkbox"
            />
            <span className="login-checkmark" />
            <span>Remember me for 30 days</span>
          </label>

          {/* Submit */}
          <button
            id="login-submit-btn"
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading ? (
              <span className="login-spinner" />
            ) : (
              <>Sign In <FiArrowRight size={15} /></>
            )}
          </button>
        </form>

        <p className="login-signup">
          Don't have an account?{" "}
          <button
            id="login-signup-link"
            className="login-signup__link"
            onClick={() => navigate("/create-room")}
          >
            Sign up free
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
