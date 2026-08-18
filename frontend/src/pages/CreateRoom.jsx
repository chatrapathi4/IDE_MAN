import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiRefreshCw,
  FiArrowRight,
  FiUsers,
  FiLock,
  FiUnlock,
  FiZap,
  FiAlertCircle,
} from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import "./CreateRoom.css";

const LANGUAGES = [
  { id: "python", label: "Python 3.11" },
  { id: "javascript", label: "JavaScript (Node 20)" },
  { id: "java", label: "Java (OpenJDK 21)" },
  { id: "cpp", label: "C++ (GCC 13)" },
  { id: "go", label: "Go 1.22" },
  { id: "rust", label: "Rust 1.78" },
  { id: "typescript", label: "TypeScript 5" },
  { id: "ruby", label: "Ruby 3.3" },
];

function generateRoomId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "CS-";
  for (let i = 0; i < 6; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

function CreateRoom() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState(generateRoomId());
  const [form, setForm] = useState({
    name: "",
    language: "python",
    maxParticipants: "5",
    visibility: "private",
    collaboration: true,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (error) setError("");
  };

  const handleGenerate = () => {
    setRoomId(generateRoomId());
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Please enter a room name.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/editor");
    }, 900);
  };

  return (
    <div className="create-room-page" id="create-room-page">
      <div className="login-bg" />

      {/* ---- Logo ---- */}
      <button className="login-logo" id="create-room-logo-btn" onClick={() => navigate("/")}>
        <div className="login-logo__icon"><BsCodeSlash size={16} /></div>
        <span className="login-logo__brand">Code<span>Sync</span></span>
      </button>

      {/* ---- Card ---- */}
      <div className="create-room-card" id="create-room-card">
        <div className="create-room-card__header">
          <h1 className="create-room-card__title">Create a Room</h1>
          <p className="create-room-card__subtitle">Configure your collaborative coding session</p>
        </div>

        {/* Room ID display */}
        <div className="room-id-display" id="room-id-display">
          <div className="room-id-display__label">Room ID</div>
          <div className="room-id-display__row">
            <span className="room-id-display__id">{roomId}</span>
            <button
              id="generate-room-id-btn"
              className="room-id-display__btn"
              onClick={handleGenerate}
              title="Generate new Room ID"
            >
              <FiRefreshCw size={14} />
              Generate
            </button>
          </div>
        </div>

        {error && (
          <div className="login-error">
            <FiAlertCircle size={14} />
            {error}
          </div>
        )}

        <form className="create-room-form" onSubmit={handleCreate} id="create-room-form" noValidate>
          {/* Room Name */}
          <div className="login-field">
            <label htmlFor="room-name" className="login-label">Room Name</label>
            <input
              id="room-name"
              name="name"
              type="text"
              placeholder="e.g. Algorithm Interview, Team Sprint..."
              value={form.name}
              onChange={handleChange}
              className="login-input"
              style={{ paddingLeft: "14px" }}
            />
          </div>

          {/* Language */}
          <div className="login-field">
            <label htmlFor="room-language" className="login-label">Programming Language</label>
            <select
              id="room-language"
              name="language"
              value={form.language}
              onChange={handleChange}
              className="create-room-select"
            >
              {LANGUAGES.map((l) => (
                <option key={l.id} value={l.id}>{l.label}</option>
              ))}
            </select>
          </div>

          {/* Max participants */}
          <div className="login-field">
            <label htmlFor="room-max" className="login-label">
              <FiUsers size={12} style={{ display: "inline", marginRight: 4 }} />
              Maximum Participants
            </label>
            <div className="create-room-participants">
              {[2, 5, 10, 20].map((n) => (
                <button
                  key={n}
                  type="button"
                  id={`participants-${n}`}
                  className={`create-room-participants__btn ${form.maxParticipants === String(n) ? "create-room-participants__btn--active" : ""}`}
                  onClick={() => setForm((p) => ({ ...p, maxParticipants: String(n) }))}
                >
                  {n}
                </button>
              ))}
              <input
                id="room-max"
                name="maxParticipants"
                type="number"
                min={1}
                max={50}
                value={form.maxParticipants}
                onChange={handleChange}
                className="create-room-participants__input"
                placeholder="Custom"
              />
            </div>
          </div>

          {/* Visibility */}
          <div className="login-field">
            <label className="login-label">Room Visibility</label>
            <div className="create-room-vis">
              <button
                type="button"
                id="visibility-private"
                className={`create-room-vis__btn ${form.visibility === "private" ? "create-room-vis__btn--active" : ""}`}
                onClick={() => setForm((p) => ({ ...p, visibility: "private" }))}
              >
                <FiLock size={13} /> Private
              </button>
              <button
                type="button"
                id="visibility-public"
                className={`create-room-vis__btn ${form.visibility === "public" ? "create-room-vis__btn--active" : ""}`}
                onClick={() => setForm((p) => ({ ...p, visibility: "public" }))}
              >
                <FiUnlock size={13} /> Public
              </button>
            </div>
          </div>

          {/* Real-Time Collaboration */}
          <label className="login-remember" htmlFor="room-collab">
            <input
              id="room-collab"
              name="collaboration"
              type="checkbox"
              checked={form.collaboration}
              onChange={handleChange}
              className="login-checkbox"
            />
            <span className="login-checkmark" />
            <span>
              <FiZap size={12} style={{ display: "inline", marginRight: 4, color: "var(--accent-green)" }} />
              Enable Real-Time Collaboration
            </span>
          </label>

          {/* Buttons */}
          <div className="create-room-actions">
            <button
              id="create-room-btn"
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? (
                <span className="login-spinner" />
              ) : (
                <>Create Room <FiArrowRight size={15} /></>
              )}
            </button>
            <button
              id="join-existing-room-btn"
              type="button"
              className="create-room-secondary-btn"
              onClick={() => navigate("/join-room")}
            >
              Join Existing Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRoom;
