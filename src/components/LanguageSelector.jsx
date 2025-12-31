import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { FaGlobe } from "react-icons/fa";
import "../static/css/language.css"; // CSS para animaciones y posición



const languages = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const btnRef = useRef();

  const handleSelect = (code) => {
    changeLanguage(code);
    setOpen(false);
  };

  useEffect(() => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setCoords({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    }
  }, [open]);

  return (
    <>
      <button ref={btnRef} className="main-btn" onClick={() => setOpen(!open)}>
        <FaGlobe /> {languages.find((l) => l.code === language)?.flag}
      </button>
      {open &&
        createPortal(
          <div className="dropdown-portal" style={{ top: coords.top, left: coords.left }}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-btn ${lang.code === language ? "active" : ""}`}
                onClick={() => handleSelect(lang.code)}
              >
                {lang.flag} {lang.label}
              </button>
            ))}
          </div>,
          document.body
        )}
    </>
  );
};

export default LanguageSelector;