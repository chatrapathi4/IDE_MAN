# ⚡ CodeSync — Real-Time Collaborative Coding IDE

<div align="center">

![CodeSync Banner](https://img.shields.io/badge/CodeSync-Real--Time%20IDE-00d46a?style=for-the-badge&logo=visualstudiocode&logoColor=black)

**The Future of Collaborative Coding — Write. Run. Collaborate.**

[![React](https://img.shields.io/badge/React-18.x-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Monaco Editor](https://img.shields.io/badge/Monaco_Editor-VS_Code_Core-00d46a?style=flat-square&logo=visualstudiocode&logoColor=black)](https://microsoft.github.io/monaco-editor/)
[![Theme](https://img.shields.io/badge/Theme-Dark%20%26%20Green-0a0a0a?style=flat-square&logo=color-switch&logoColor=00d46a)](https://github.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[Features](#-features) • [Pages & Routes](#-pages--routes) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure) • [Getting Started](#-getting-started) • [Design System](#-design-system)

</div>

---

## 📖 Overview

**CodeSync** is a distributed, browser-based real-time code execution and collaboration platform. Built with a sleek black-and-green terminal aesthetic, it empowers developers and teams to create shared coding rooms, write in 50+ languages with Monaco Editor, run snippets inside sandboxed Docker containers, and collaborate live with sub-50ms latency.

---

## ✨ Features

- 👥 **Real-Time Collaboration** — Multi-user simultaneous editing powered by WebSockets with Operational Transformation (OT) and live cursor presence.
- 💻 **Monaco Editor Integration** — Full VS Code editing experience with IntelliSense, syntax highlighting, code folding, and multi-cursor support.
- 🐳 **Secure Docker Execution** — Sandboxed, isolated container execution environments with strict CPU and memory limits.
- 🌐 **Multi-Language Support** — Python, JavaScript, Java, C++, Go, Rust, TypeScript, Ruby, and more.
- ⚡ **Redis Queue Management** — Asynchronous job scheduling, output streaming, and resilient execution dispatching.
- 🎨 **Modern Dark Aesthetics** — Curated dark theme (`#0a0a0a`) with glowing emerald accents (`#00d46a`), glassmorphic panels, and smooth micro-animations.

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Landing page with hero section, animated code preview, stats counter, feature highlights, and interactive CTAs. |
| `/features` | **Features** | Showcase of core capabilities with 6 detailed cards, capability checklists, and explore links. |
| `/docs` | **Documentation** | Interactive docs with sticky sidebar navigation, table of contents, expandable sections, code samples, and API reference. |
| `/pricing` | **Pricing** | 3-tier pricing breakdown (**Free**, **Student**, **Professional**) with monthly/annual billing toggle and FAQ accordion. |
| `/github` | **GitHub Showcase** | Repository statistics, architecture overview, tech stack grid, core contributors, and release roadmap. |
| `/login` | **Login** | Authentication UI with OAuth (Google, GitHub), credential inputs, password visibility toggle, and session persistence. |
| `/create-room` | **Create Room** | Room configuration studio with instant Room ID generator (`CS-XXXXXX`), language dropdown, participant caps, and visibility toggles. |
| `/join-room` | **Join Room** | Fast room entry interface with 1-click clipboard Room ID extraction and validation. |
| `/editor` | **Editor Workspace** | Complete IDE layout featuring Monaco Editor, sidebar navigation, execution toolbar, live terminal console, execution status metrics, and participant list. |
| `*` | **Not Found (404)** | Custom 404 error page with quick return navigation and mock error snippet. |

---

## 🛠️ Tech Stack

### Frontend Core
- **Framework:** [React 18](https://react.dev/)
- **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Code Editor:** [Monaco Editor (`@monaco-editor/react`)](https://github.com/suren-atoyan/monaco-react)
- **Icons:** [React Icons (`react-icons/fi`, `react-icons/bs`)](https://react-icons.github.io/react-icons/)
- **Styling:** Vanilla CSS with custom design tokens & CSS variables

### Backend & Infrastructure (Architecture Target)
- **Runtime:** Node.js & Express
- **Real-Time Sync:** WebSockets (`ws` / Socket.IO)
- **Execution Sandboxing:** Docker Engine
- **Queue & State:** Redis

---

## 📂 Project Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/               # Static assets & icons
│   ├── components/
│   │   ├── collaboration/    # UserList & presence components
│   │   ├── editor/           # Monaco CodeEditor, EditorToolbar, LanguageSelector, RunButton
│   │   ├── layout/           # Navbar, Sidebar
│   │   └── output/           # Terminal Console, ExecutionStatus indicators
│   ├── pages/
│   │   ├── CreateRoom.jsx    # Create room form & ID generator
│   │   ├── CreateRoom.css
│   │   ├── Docs.jsx          # Documentation with sidebar & TOC
│   │   ├── Docs.css
│   │   ├── EditorPage.jsx    # Main collaborative IDE page
│   │   ├── EditorPage.css
│   │   ├── Features.jsx      # Feature showcase page
│   │   ├── Features.css
│   │   ├── GitHub.jsx        # GitHub repository showcase & roadmap
│   │   ├── GitHub.css
│   │   ├── Home.jsx          # Landing page
│   │   ├── Home.css
│   │   ├── JoinRoom.jsx      # Join room with clipboard auto-paste
│   │   ├── JoinRoom.css
│   │   ├── Login.jsx         # Authentication card & OAuth buttons
│   │   ├── Login.css
│   │   ├── NotFound.jsx      # 404 Not Found page
│   │   ├── Pricing.jsx       # Pricing tiers & billing toggle
│   │   └── Pricing.css
│   ├── App.jsx               # Application routing table
│   ├── App.css
│   ├── index.css             # Global design tokens & CSS resets
│   └── main.jsx              # Application entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18.0 or higher) and `npm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/codesync-io/codesync.git
   cd IDE_MAN/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

### Production Build

To build the static application bundle for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🎨 Design System

CodeSync uses a custom-tailored dark theme defined in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0a;          /* Deep onyx canvas */
  --bg-secondary: #111111;        /* Card & sidebar surface */
  --bg-tertiary: #1a1a1a;         /* Input & badge background */
  --bg-card: #141414;             /* Elevated panels */
  --bg-hover: #1e1e1e;            /* Hover state */

  --accent-green: #00d46a;        /* Primary brand accent */
  --accent-green-hover: #00ff7f;  /* Active glow */
  --accent-green-dim: rgba(0, 212, 106, 0.12);
  --accent-green-glow: 0 0 20px rgba(0, 212, 106, 0.35);

  --text-primary: #f0f0f0;        /* High-contrast headings */
  --text-secondary: #a0a0a0;      /* Body copy */
  --text-muted: #5a5a5a;          /* Subdued labels */

  --font-ui: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
