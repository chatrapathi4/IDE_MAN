import { FiPlay, FiSave, FiRefreshCw, FiLoader } from "react-icons/fi";
import LanguageSelector from "./LanguageSelector";
import "./EditorToolbar.css";

function EditorToolbar({ language, onLanguageChange, onRun, onSave, onReset, isRunning }) {
  return (
    <div className="toolbar" id="editor-toolbar">
      <div className="toolbar__left">
        <LanguageSelector selected={language} onSelect={onLanguageChange} />

        <div className="toolbar__divider" />

        <button
          id="toolbar-run-btn"
          className="toolbar__btn toolbar__btn--run"
          onClick={onRun}
          disabled={isRunning}
          title="Run Code (Ctrl+Enter)"
        >
          {isRunning ? (
            <FiLoader size={13} className="toolbar__spinner" />
          ) : (
            <FiPlay size={13} />
          )}
          {isRunning ? "Running..." : "Run"}
        </button>

        <button
          id="toolbar-save-btn"
          className="toolbar__btn toolbar__btn--save"
          onClick={onSave}
          title="Save (Ctrl+S)"
        >
          <FiSave size={13} />
          Save
        </button>

        <button
          id="toolbar-reset-btn"
          className="toolbar__btn toolbar__btn--reset"
          onClick={onReset}
          title="Reset to Default"
        >
          <FiRefreshCw size={13} />
          Reset
        </button>
      </div>

      <div className="toolbar__status">
        <span
          className={`toolbar__status-dot ${
            isRunning ? "toolbar__status-dot--running" : ""
          }`}
        />
        {isRunning ? "Executing..." : "Ready"}
      </div>
    </div>
  );
}

export default EditorToolbar;