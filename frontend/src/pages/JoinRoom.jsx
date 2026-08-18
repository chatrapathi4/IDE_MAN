import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiClipboard,
  FiAlertCircle,
  FiUser,
  FiHash,
} from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import "./JoinRoom.css";

function JoinRoom() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ roomId: "", displayName: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pasted, setPasted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const roomIdMatch = text.match(/CS-[A-Z0-9]{6}/);
      if (roomIdMatch) {
        setForm((prev) => ({ ...prev, roomId: roomIdMatch[0] }));
        setPasted(true);
        setTimeout(() => setPasted(false), 2000);
      } else {
        setForm((prev) => ({ ...prev, roomId: text.trim().toUpperCase() }));
        setPasted(true);
        setTimeout(() => setPasted(false), 2000);
      }
    } catch {
      setError("Could not read clipboard. Please paste manually.");
    }
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (!form.roomId.trim()) {
      setError("Room ID is required. Please enter or paste a valid Room ID.");
      return;
    }
    if (!form.displayName.trim()) {
      setError("Please enter a display name.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/editor");
    }, 900);
  };

  return (
    <div className="join-room-page" id="join-room-page">
      <div className="login-bg" />

      {/* ---- Logo ---- */}
      <button className="login-logo" id="join-room-logo-btn" onClick={() => navigate("/")}>
        <div className="login-logo__icon"><BsCodeSlash size={16} /></div>
        <span className="login-logo__brand">Code<span>Sync</span></span>
      </button>

      {/* ---- Card ---- */}
      <div className="join-room-card" id="join-room-card">
        <div className="create-room-card__header">
          <h1 className="create-room-card__title">Join a Room</h1>
          <p className="create-room-card__subtitle">Enter a Room ID to join a coding session</p>
        </div>

        {error && (
          <div className="login-error" id="join-room-error-msg">
            <FiAlertCircle size={14} />
            {error}
          </div>
        )}

        <form className="create-room-form" onSubmit={handleJoin} id="join-room-form" noValidate>
          {/* Room ID */}
          <div className="login-field">
            <div className="login-label-row">
              <label htmlFor="join-room-id" className="login-label">
                <FiHash size={12} style={{ display: "inline", marginRight: 4 }} />
                Room ID
              </label>
              <button
                type="button"
                id="join-paste-btn"
                className={`join-room-paste-btn ${pasted ? "join-room-paste-btn--pasted" : ""}`}
                onClick={handlePaste}
              >
                <FiClipboard size={12} />
                {pasted ? "Pasted!" : "Paste Room ID"}
              </button>
            </div>
            <div className="login-input-wrap">
              <FiHash size={15} className="login-input-icon" />
              <input
                id="join-room-id"
                name="roomId"
                type="text"
                placeholder="CS-8F4A92"
                value={form.roomId}
                onChange={handleChange}
                className="login-input join-room-id-input"
              />
            </div>
            <p className="join-room-hint">Format: CS-XXXXXX (provided by the room host)</p>
          </div>

          {/* Display Name */}
          <div className="login-field">
            <label htmlFor="join-display-name" className="login-label">
              <FiUser size={12} style={{ display: "inline", marginRight: 4 }} />
              Display Name
            </label>
            <div className="login-input-wrap">
              <FiUser size={15} className="login-input-icon" />
              <input
                id="join-display-name"
                name="displayName"
                type="text"
                placeholder="How others will see you"
                value={form.displayName}
                onChange={handleChange}
                className="login-input"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="create-room-actions">
            <button
              id="join-room-btn"
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? (
                <span className="login-spinner" />
              ) : (
                <>Join Room <FiArrowRight size={15} /></>
              )}
            </button>
            <button
              id="join-back-btn"
              type="button"
              className="create-room-secondary-btn"
              onClick={() => navigate(-1)}
            >
              <FiArrowLeft size={14} style={{ display: "inline", marginRight: 4 }} />
              Back
            </button>
          </div>
        </form>

        <div className="join-room-divider">
          <span>No room yet?</span>
        </div>
        <button
          id="join-create-room-btn"
          className="join-room-create-btn"
          onClick={() => navigate("/create-room")}
        >
          Create a new Room
        </button>
      </div>
    </div>
  );
}

export default JoinRoom;
