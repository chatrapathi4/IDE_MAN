import { useState } from "react";
import { FiFolder, FiPlus, FiSettings, FiSearch } from "react-icons/fi";
import { SiPython, SiJavascript, SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "./Sidebar.css";

const FILES = [
  { id: 1, name: "main.py",       lang: "py",   Icon: SiPython,     iconClass: "sidebar__file-icon--py" },
  { id: 2, name: "solution.py",   lang: "py",   Icon: SiPython,     iconClass: "sidebar__file-icon--py" },
  { id: 3, name: "helper.py",     lang: "py",   Icon: SiPython,     iconClass: "sidebar__file-icon--py" },
  { id: 4, name: "algorithm.js",  lang: "js",   Icon: SiJavascript, iconClass: "sidebar__file-icon--js" },
  { id: 5, name: "Solution.java", lang: "java", Icon: FaJava,       iconClass: "sidebar__file-icon--java" },
  { id: 6, name: "solution.cpp",  lang: "cpp",  Icon: SiCplusplus,  iconClass: "sidebar__file-icon--cpp" },
];

function Sidebar({ activeFile, onFileSelect }) {
  const [selected, setSelected] = useState(activeFile || FILES[0].id);

  const handleSelect = (file) => {
    setSelected(file.id);
    if (onFileSelect) onFileSelect(file);
  };

  return (
    <aside className="sidebar" id="sidebar">
      {/* Explorer Header */}
      <div className="sidebar__section-header">
        <span className="sidebar__section-title">Explorer</span>
        <div style={{ display: "flex", gap: 4 }}>
          <FiSearch size={13} className="sidebar__section-icon" />
          <FiPlus size={13} className="sidebar__section-icon" />
        </div>
      </div>

      {/* File List */}
      <div className="sidebar__file-list">
        {FILES.map((file) => {
          const { Icon } = file;
          return (
            <div
              key={file.id}
              id={`sidebar-file-${file.id}`}
              className={`sidebar__file-item ${
                selected === file.id ? "sidebar__file-item--active" : ""
              }`}
              onClick={() => handleSelect(file)}
              title={file.name}
            >
              <Icon
                size={14}
                className={`sidebar__file-icon ${file.iconClass}`}
              />
              <span className="sidebar__file-name">{file.name}</span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="sidebar__footer">
        <div className="sidebar__footer-item">
          <FiFolder size={13} />
          <span>Open Folder</span>
        </div>
        <div className="sidebar__footer-item">
          <FiSettings size={13} />
          <span>Settings</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;