import { useNavigate } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      id="not-found-page"
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
        gap: "0",
        fontFamily: "var(--font-ui)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: 56,
          height: 56,
          background: "linear-gradient(135deg, var(--accent-green), #00a855)",
          borderRadius: "var(--radius-md)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
          boxShadow: "var(--accent-green-glow)",
        }}
      >
        <BsCodeSlash size={28} color="#000" />
      </div>

      {/* 404 */}
      <div
        style={{
          fontSize: 96,
          fontWeight: 900,
          lineHeight: 1,
          marginBottom: 8,
          background: "linear-gradient(135deg, var(--accent-green), #00ff7f)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontFamily: "var(--font-mono)",
        }}
      >
        404
      </div>

      <h1
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: "var(--text-primary)",
          marginBottom: 10,
          letterSpacing: "-0.5px",
        }}
      >
        Page Not Found
      </h1>

      <p
        style={{
          fontSize: 15,
          color: "var(--text-secondary)",
          maxWidth: 420,
          lineHeight: 1.7,
          marginBottom: 36,
        }}
      >
        Looks like this route doesn&apos;t exist. The page you&apos;re looking
        for may have been moved, deleted, or never existed.
      </p>

      {/* Actions */}
      <div style={{ display: "flex", gap: 12 }}>
        <button
          id="not-found-home-btn"
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          <FiHome size={14} />
          Go Home
        </button>
        <button
          id="not-found-back-btn"
          className="btn btn-outline"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={14} />
          Go Back
        </button>
      </div>

      {/* Code decoration */}
      <div
        style={{
          marginTop: 48,
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          color: "var(--text-muted)",
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-primary)",
          borderRadius: "var(--radius-md)",
          padding: "12px 20px",
        }}
      >
        <span style={{ color: "#c792ea" }}>raise </span>
        <span style={{ color: "#ffcb6b" }}>NotFoundError</span>
        <span style={{ color: "#89ddff" }}>(</span>
        <span style={{ color: "#c3e88d" }}>&quot;page does not exist&quot;</span>
        <span style={{ color: "#89ddff" }}>)</span>
      </div>
    </div>
  );
}

export default NotFound;
