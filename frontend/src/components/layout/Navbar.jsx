import { useState } from "react";
import { FiShare2, FiCopy, FiCheck, FiUser } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import "./Navbar.css";

const ROOM_ID = "ROOM-7F3KX9";

function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const link = `${window.location.origin}/editor?room=${ROOM_ID}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <nav className="navbar" id="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <div className="navbar__logo-icon">
          <BsCodeSlash size={16} />
        </div>
        <span className="navbar__brand">
          Code<span>Sync</span>
        </span>
      </div>

      {/* Room Badge */}
      <div className="navbar__room">
        <span className="navbar__room-dot" />
        <span>Room:</span>
        <span className="navbar__room-id">{ROOM_ID}</span>
      </div>

      {/* Actions */}
      <div className="navbar__actions">
        <button
          id="navbar-share-btn"
          className="navbar__btn navbar__btn--share"
          title="Share Room"
        >
          <FiShare2 size={13} />
          Share Room
        </button>

        <button
          id="navbar-copy-btn"
          className={`navbar__btn ${
            copied ? "navbar__btn--copied" : "navbar__btn--copy"
          }`}
          onClick={handleCopy}
          title="Copy Invite Link"
        >
          {copied ? <FiCheck size={13} /> : <FiCopy size={13} />}
          {copied ? "Copied!" : "Copy Invite"}
        </button>

        <div className="navbar__profile" title="Profile">
          <FiUser size={14} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;