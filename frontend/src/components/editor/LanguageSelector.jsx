import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import { SiPython, SiJavascript, SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "./LanguageSelector.css";

const LANGUAGES = [
  { id: "python",     label: "Python",     Icon: SiPython,     monacoLang: "python",     color: "#3572A5" },
  { id: "javascript", label: "JavaScript", Icon: SiJavascript, monacoLang: "javascript", color: "#F7DF1E" },
  { id: "java",       label: "Java",       Icon: FaJava,       monacoLang: "java",        color: "#b07219" },
  { id: "cpp",        label: "C++",        Icon: SiCplusplus,  monacoLang: "cpp",         color: "#f34b7d" },
];

function LanguageSelector({ selected, onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGUAGES.find((l) => l.id === selected) || LANGUAGES[0];

  useEffect(() => {
    const handleOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleSelect = (lang) => {
    onSelect(lang);
    setOpen(false);
  };

  return (
    <div className="lang-selector" ref={ref} id="language-selector">
      <button
        className="lang-selector__trigger"
        onClick={() => setOpen((o) => !o)}
        title="Select Language"
      >
        <current.Icon
          size={15}
          className="lang-selector__trigger-icon"
          style={{ color: current.color }}
        />
        <span className="lang-selector__label">{current.label}</span>
        <FiChevronDown
          size={13}
          className={`lang-selector__caret ${open ? "lang-selector__caret--open" : ""}`}
        />
      </button>

      {open && (
        <div className="lang-selector__dropdown">
          {LANGUAGES.map((lang) => {
            const { Icon } = lang;
            const isActive = lang.id === selected;
            return (
              <div
                key={lang.id}
                id={`lang-option-${lang.id}`}
                className={`lang-selector__option ${
                  isActive ? "lang-selector__option--active" : ""
                }`}
                onClick={() => handleSelect(lang)}
              >
                <Icon
                  size={16}
                  className="lang-selector__option-icon"
                  style={{ color: lang.color }}
                />
                <span className="lang-selector__option-name">{lang.label}</span>
                {isActive && <FiCheck size={12} className="lang-selector__option-check" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export { LANGUAGES };
export default LanguageSelector;