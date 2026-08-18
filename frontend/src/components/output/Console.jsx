import { useState } from "react";
import { FiTrash2, FiMaximize2 } from "react-icons/fi";
import "./Console.css";

const INITIAL_OUTPUT = [
  { id: 1, type: "system",  text: "CodeSync Execution Engine v1.0.0" },
  { id: 2, type: "system",  text: "Docker runtime: python:3.11-slim" },
  { id: 3, type: "normal",  text: "" },
  { id: 4, type: "normal",  text: "Hello, World!" },
  { id: 5, type: "normal",  text: "" },
  { id: 6, type: "success", text: "Execution completed successfully." },
];

function Console({ output, isRunning }) {
  const [activeTab, setActiveTab] = useState("output");
  const [lines, setLines] = useState(INITIAL_OUTPUT);

  const displayLines = Array.isArray(output) ? output : lines;

  const handleClear = () => setLines([]);

  const getTextClass = (type) => {
    switch (type) {
      case "error":   return "console__line-text--error";
      case "success": return "console__line-text--success";
      case "info":    return "console__line-text--info";
      case "warn":    return "console__line-text--warn";
      case "system":  return "console__line-text--system";
      default:        return "";
    }
  };

  return (
    <div className="console" id="console-panel">
      {/* Tabs */}
      <div className="console__header">
        <div className="console__tabs">
          {["output", "errors", "terminal"].map((tab) => (
            <button
              key={tab}
              id={`console-tab-${tab}`}
              className={`console__tab ${
                activeTab === tab ? "console__tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="console__actions">
          {isRunning && (
            <span style={{ fontSize: 11, color: "var(--status-warning)", marginRight: 6 }}>
              ● Running…
            </span>
          )}
          <button
            className="console__action-btn"
            title="Clear Console"
            onClick={handleClear}
            id="console-clear-btn"
          >
            <FiTrash2 size={13} />
          </button>
          <button
            className="console__action-btn"
            title="Expand Console"
            id="console-expand-btn"
          >
            <FiMaximize2 size={13} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="console__body" id="console-body">
        {activeTab === "output" && (
          <>
            {displayLines.length === 0 ? (
              <span className="console__empty">No output yet. Run your code to see results.</span>
            ) : (
              displayLines.map((line) => (
                <div key={line.id} className="console__line">
                  <span className="console__line-prefix">›</span>
                  <span className={`console__line-text ${getTextClass(line.type)}`}>
                    {line.text}
                  </span>
                </div>
              ))
            )}
          </>
        )}

        {activeTab === "errors" && (
          <span className="console__empty">No errors detected.</span>
        )}

        {activeTab === "terminal" && (
          <div className="console__line">
            <span className="console__line-prefix" style={{ color: "var(--accent-green)" }}>$</span>
            <span className="console__line-text" style={{ color: "var(--text-muted)" }}>
              python main.py
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Console;