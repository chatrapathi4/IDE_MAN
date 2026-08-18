# ⚡ CodeSync — Distributed Real-Time Code Execution & Collaboration Platform

<div align="center">

![CodeSync Banner](https://img.shields.io/badge/CodeSync-Real--Time%20IDE-00d46a?style=for-the-badge&logo=visualstudiocode&logoColor=black)

**The Future of Collaborative Coding — Write. Run. Collaborate.**

[![React](https://img.shields.io/badge/React-18.x-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Monaco Editor](https://img.shields.io/badge/Monaco_Editor-VS_Code_Core-00d46a?style=flat-square&logo=visualstudiocode&logoColor=black)](https://microsoft.github.io/monaco-editor/)
[![Theme](https://img.shields.io/badge/Theme-Dark%20%26%20Green-0a0a0a?style=flat-square&logo=color-switch&logoColor=00d46a)](https://github.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📖 About CodeSync

**CodeSync** is a distributed, browser-based collaborative coding environment and execution engine. It allows developers to collaborate in real-time on shared rooms, run code securely inside sandboxed Docker containers, and customize their coding workflows with support for over 50 programming languages.

---

## 🌟 Key Highlights

- ⚡ **Real-Time Collaboration:** OT-backed WebSocket synchronization, live multi-cursor indicators, and user presence tracking.
- 💻 **Monaco Editor:** Integrated VS Code engine with syntax highlighting, IntelliSense, and multi-language support.
- 🐳 **Isolated Docker Containers:** Safe, sandboxed code execution with memory & CPU quotas.
- 🏎️ **Redis Job Queue:** Scalable queueing and worker management for reliable execution.
- 🎨 **Black-and-Green Theme:** Tailored dark mode aesthetic with smooth micro-animations.

---

## 🗺️ Application Routes

- `/` — **Home:** Landing page with hero, live editor animation preview, stats, and CTAs.
- `/features` — **Features:** 6 interactive cards showcasing real-time collaboration, execution, and security.
- `/docs` — **Docs:** Interactive documentation with sticky sidebar, table of contents, and API overview.
- `/pricing` — **Pricing:** Free, Student, and Professional tier breakdowns with billing toggles and FAQs.
- `/github` — **GitHub:** Architecture breakdown, technology stack, contributor showcase, and roadmap.
- `/login` — **Login:** Authentication with Google & GitHub OAuth and credential inputs.
- `/create-room` — **Create Room:** Room configuration form with automated Room ID generation (`CS-XXXXXX`).
- `/join-room` — **Join Room:** Room joining interface with clipboard Room ID auto-detection.
- `/editor` — **IDE Workspace:** Full collaborative IDE with editor, toolbar, terminal console, and user list.

---

## 🚀 Quick Start

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

For more details, check out the [Frontend README](frontend/README.md).
