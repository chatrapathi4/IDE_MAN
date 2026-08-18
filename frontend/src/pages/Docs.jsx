import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiChevronDown,
  FiChevronRight,
  FiArrowRight,
  FiBook,
  FiPlay,
  FiUsers,
  FiCode,
  FiServer,
  FiGlobe,
  FiShield,
  FiZap,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import "./Docs.css";

const SECTIONS = [
  {
    id: "getting-started",
    icon: FiPlay,
    label: "Getting Started",
    content: {
      title: "Getting Started with CodeSync",
      body: `CodeSync is a browser-based collaborative coding platform. No installation is required — open your browser and start coding in seconds.

**Prerequisites**
- A modern browser (Chrome 90+, Firefox 90+, Edge 90+)
- Internet connection

**Quick Start**
1. Navigate to codesync.io and click **Get Started**
2. Choose **Create a Room** to start a new coding session
3. Select your preferred programming language
4. Share the room link with your collaborators
5. Write code and click **Run** to execute it instantly

**First Run**
When you first open the editor, you'll see a pre-loaded example program. Click the green **Run** button in the toolbar to execute it and see output in the console below.`,
    },
  },
  {
    id: "creating-room",
    icon: FiCode,
    label: "Creating a Room",
    content: {
      title: "Creating a Coding Room",
      body: `Rooms are the core unit of CodeSync. Each room is an isolated coding environment shared between all participants.

**Room Configuration**
- **Room Name** — Give your room a descriptive name (e.g., "Algorithm Interview", "Team Sprint")
- **Programming Language** — Select the language you'll be working in. You can change it later from the editor toolbar
- **Max Participants** — Set between 1 and 20 participants
- **Visibility** — Public rooms can be found via search; private rooms require a direct invite link
- **Real-Time Collaboration** — Enable or disable live cursor synchronization

**Room ID**
Every room gets a unique ID like \`CS-8F4A92\`. Share this with anyone you want to invite. Click **Copy Invite** in the editor navbar to get a shareable link.

**Room Lifecycle**
Rooms persist for 24 hours after the last participant leaves. Code is auto-saved to the server every 30 seconds.`,
    },
  },
  {
    id: "joining-room",
    icon: FiUsers,
    label: "Joining a Room",
    content: {
      title: "Joining an Existing Room",
      body: `To join an existing CodeSync room, you need the Room ID from the session host.

**Via Room ID**
1. Navigate to **/join-room**
2. Enter the Room ID (format: \`CS-XXXXXX\`)
3. Enter your display name
4. Click **Join Room**

**Via Invite Link**
If someone shared an invite link, simply click it. You'll be taken directly to the room with the Room ID pre-filled.

**Display Name**
Your display name appears in the collaborator list and on your cursor label. Choose something recognisable to your team.

**Troubleshooting**
- *"Room not found"* — The room may have expired (rooms expire after 24 hours of inactivity). Ask the host to create a new one.
- *"Room is full"* — The host has set a participant limit. Contact the host to increase it.`,
    },
  },
  {
    id: "running-code",
    icon: FiPlay,
    label: "Running Code",
    content: {
      title: "Running Code",
      body: `CodeSync executes your code inside isolated Docker containers on the server. This ensures safe, sandboxed execution for every run.

**Execution Flow**
1. Click **Run** in the editor toolbar (or press \`Ctrl+Enter\`)
2. CodeSync packages your code and sends it to the execution queue
3. A Docker container is spun up for your selected language
4. Your code runs with a 10-second time limit and 256 MB memory cap
5. Output appears in the Console panel below the editor

**Console Output**
The console shows:
- **Standard output** — anything you print/log
- **Standard error** — runtime errors and stack traces
- **Execution metadata** — runtime duration and memory usage
- **System messages** — container spin-up and queue info

**Keyboard Shortcut**
Press \`Ctrl+Enter\` (Windows/Linux) or \`Cmd+Enter\` (macOS) to run code instantly from the editor.`,
    },
  },
  {
    id: "languages",
    icon: FiGlobe,
    label: "Supported Languages",
    content: {
      title: "Supported Languages",
      body: `CodeSync supports over 20 programming languages with dedicated Docker images for each.

| Language | Runtime | Image |
|----------|---------|-------|
| Python | 3.11 | python:3.11-slim |
| JavaScript | Node 20 | node:20-slim |
| Java | OpenJDK 21 | openjdk:21-slim |
| C++ | GCC 13 | gcc:13 |
| Go | 1.22 | golang:1.22-alpine |
| Rust | 1.78 | rust:1.78-slim |
| TypeScript | Node 20 | node:20-slim |
| Ruby | 3.3 | ruby:3.3-slim |

**Language Switching**
You can switch languages at any time from the **Language Selector** dropdown in the editor toolbar. Note: switching languages will reset the current code to the default example for that language.

**Custom Runtimes**
Professional plan subscribers can request custom Docker images for niche languages or specific versions. Contact support to configure.`,
    },
  },
  {
    id: "collaboration",
    icon: FiUsers,
    label: "Real-Time Collaboration",
    content: {
      title: "Real-Time Collaboration",
      body: `CodeSync's real-time collaboration is built on WebSockets with Operational Transformation (OT) to handle concurrent edits.

**How It Works**
- Every keystroke generates an operation that is broadcast to all room participants
- OT ensures that concurrent edits are merged correctly without conflicts
- Cursors and selections are synchronised in real time with colour-coded indicators

**Presence System**
The **Collaborators** panel on the right side of the editor shows:
- All online users with their display names
- Colour-coded cursor indicators
- Typing activity status

**Permissions**
By default, all participants have full edit access. Room creators can restrict editing to read-only mode from Room Settings.

**Conflict Resolution**
If two users type at the same position simultaneously, OT ensures both changes are applied in a deterministic order without data loss.`,
    },
  },
  {
    id: "docker",
    icon: FiShield,
    label: "Docker Execution",
    content: {
      title: "Docker Execution Architecture",
      body: `CodeSync's execution engine uses Docker to provide safe, isolated code execution environments.

**Security Model**
- Each submission spawns a fresh, ephemeral container
- No persistent filesystem between runs
- Network access is disabled inside containers
- Containers are destroyed immediately after execution completes

**Resource Limits**
| Resource | Free | Student | Professional |
|----------|------|---------|-------------|
| CPU | 0.5 core | 1 core | 2 cores |
| Memory | 128 MB | 256 MB | 512 MB |
| Timeout | 10 s | 30 s | 60 s |
| Runs/hour | 20 | 100 | Unlimited |

**Queue Architecture**
Execution requests are placed in a Redis-backed queue. Workers poll the queue, spin up containers, and stream output back via WebSocket. This architecture allows horizontal scaling of workers independently of the API layer.`,
    },
  },
  {
    id: "api",
    icon: FiServer,
    label: "API Overview",
    content: {
      title: "API Overview",
      body: `CodeSync exposes a REST + WebSocket API for programmatic access.

**Base URL**
\`\`\`
https://api.codesync.io/v1
\`\`\`

**Authentication**
All API requests require a Bearer token obtained via the \`/auth/token\` endpoint.

**Key Endpoints**

\`POST /rooms\` — Create a new room
\`\`\`json
{ "name": "My Room", "language": "python", "maxParticipants": 5 }
\`\`\`

\`GET /rooms/:id\` — Get room details

\`POST /execute\` — Submit code for execution
\`\`\`json
{ "roomId": "CS-8F4A92", "language": "python", "code": "print('Hello')" }
\`\`\`

**WebSocket Events**
Connect to \`wss://api.codesync.io/v1/rooms/:id/ws\` to receive:
- \`code:delta\` — Code changes from other participants
- \`cursor:move\` — Cursor position updates
- \`execution:output\` — Streamed execution output
- \`user:join\` / \`user:leave\` — Presence events

**Rate Limits**
Free tier: 60 API requests/minute. Professional: 1000 requests/minute.`,
    },
  },
];

function Docs() {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState("getting-started");
  const [expanded, setExpanded] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const active = SECTIONS.find((s) => s.id === activeId);

  const toggle = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const renderBody = (text) =>
    text.split("\n\n").map((block, i) => {
      if (block.startsWith("|")) {
        const rows = block.trim().split("\n");
        const headers = rows[0].split("|").filter(Boolean).map((h) => h.trim());
        const dataRows = rows.slice(2).map((r) =>
          r.split("|").filter(Boolean).map((c) => c.trim())
        );
        return (
          <table key={i} className="docs-table">
            <thead>
              <tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {dataRows.map((r, ri) => (
                <tr key={ri}>{r.map((c, ci) => <td key={ci}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        );
      }
      if (block.startsWith("```")) {
        const code = block.replace(/```[a-z]*\n?/, "").replace(/```$/, "");
        return <pre key={i} className="docs-code"><code>{code}</code></pre>;
      }
      const parts = block.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="docs-para">
          {parts.map((part, pi) => {
            if (part.startsWith("**") && part.endsWith("**"))
              return <strong key={pi}>{part.slice(2, -2)}</strong>;
            if (part.startsWith("`") && part.endsWith("`"))
              return <code key={pi} className="docs-inline-code">{part.slice(1, -1)}</code>;
            return part;
          })}
        </p>
      );
    });

  return (
    <div className="docs-page" id="docs-page">
      {/* ---- Navbar ---- */}
      <nav className="home-nav" id="docs-navbar">
        <div className="home-nav__logo">
          <div className="home-nav__logo-icon"><BsCodeSlash size={18} /></div>
          <span className="home-nav__brand">Code<span>Sync</span></span>
        </div>
        <div className="home-nav__links">
          <button className="home-nav__link" onClick={() => navigate("/features")}>Features</button>
          <button className="home-nav__link active" onClick={() => navigate("/docs")}>Docs</button>
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

      {/* ---- Layout ---- */}
      <div className="docs-layout" id="docs-layout">
        {/* Sidebar */}
        <button
          className="docs-sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          id="docs-sidebar-toggle"
        >
          {sidebarOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>

        <aside className={`docs-sidebar ${sidebarOpen ? "docs-sidebar--open" : ""}`} id="docs-sidebar">
          <div className="docs-sidebar__header">
            <FiBook size={14} />
            Documentation
          </div>
          <nav className="docs-sidebar__nav">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  id={`docs-nav-${s.id}`}
                  className={`docs-sidebar__item ${activeId === s.id ? "docs-sidebar__item--active" : ""}`}
                  onClick={() => { setActiveId(s.id); setSidebarOpen(false); }}
                >
                  <Icon size={14} />
                  {s.label}
                  {activeId === s.id && <FiChevronRight size={12} className="docs-sidebar__arrow" />}
                </button>
              );
            })}
          </nav>

          {/* TOC */}
          <div className="docs-toc">
            <div className="docs-toc__label">On this page</div>
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                className={`docs-toc__item ${activeId === s.id ? "docs-toc__item--active" : ""}`}
                onClick={() => setActiveId(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main className="docs-main" id="docs-main">
          <div className="docs-breadcrumb">
            <span>Documentation</span>
            <FiChevronRight size={12} />
            <span className="docs-breadcrumb__active">{active?.label}</span>
          </div>

          {SECTIONS.map((s) => (
            <div key={s.id} className="docs-section" id={`docs-section-${s.id}`}>
              <button
                className="docs-section__toggle"
                onClick={() => toggle(s.id)}
                id={`docs-toggle-${s.id}`}
              >
                <span className="docs-section__toggle-left">
                  <s.icon size={16} />
                  <span>{s.label}</span>
                </span>
                <FiChevronDown
                  size={16}
                  className={`docs-section__chevron ${expanded[s.id] || activeId === s.id ? "docs-section__chevron--open" : ""}`}
                />
              </button>

              {(expanded[s.id] || activeId === s.id) && (
                <div className="docs-section__body">
                  <h2 className="docs-content__title">{s.content.title}</h2>
                  <div className="docs-content__body">
                    {renderBody(s.content.body)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>

      {/* ---- Footer ---- */}
      <footer className="footer" id="docs-footer">
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

export default Docs;
