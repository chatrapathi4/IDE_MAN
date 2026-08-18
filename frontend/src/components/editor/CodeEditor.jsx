import Editor from "@monaco-editor/react";
import "./CodeEditor.css";

const DEFAULT_OPTIONS = {
  fontSize: 14,
  fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
  fontLigatures: true,
  lineNumbers: "on",
  minimap: { enabled: true, scale: 0.7 },
  scrollBeyondLastLine: false,
  wordWrap: "off",
  tabSize: 4,
  insertSpaces: true,
  renderWhitespace: "selection",
  bracketPairColorization: { enabled: true },
  autoClosingBrackets: "always",
  autoClosingQuotes: "always",
  suggestOnTriggerCharacters: true,
  parameterHints: { enabled: true },
  formatOnType: false,
  formatOnPaste: true,
  cursorBlinking: "smooth",
  cursorSmoothCaretAnimation: "on",
  smoothScrolling: true,
  renderLineHighlight: "all",
  padding: { top: 16, bottom: 16 },
};

function CodeEditor({ language = "python", code, onChange }) {
  const handleMount = (editor, monaco) => {
    // Register keyboard shortcut hint
    editor.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
      () => {} // Run handled in parent
    );
  };

  return (
    <div className="code-editor" id="monaco-editor-wrapper">
      <Editor
        height="100%"
        language={language}
        value={code}
        theme="vs-dark"
        options={DEFAULT_OPTIONS}
        onChange={onChange}
        onMount={handleMount}
        loading={
          <div className="code-editor__loading">
            <div className="code-editor__loading-spinner" />
            <span>Loading editor…</span>
          </div>
        }
        className="code-editor__container"
      />
    </div>
  );
}

export default CodeEditor;