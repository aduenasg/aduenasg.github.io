import React, { useState, useEffect } from "react";
import terminalcss from "./../static/css/terminal.css";
import { useLanguage } from "../i18n/LanguageContext";

export default function Terminal() {
  const { t } = useLanguage();
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");

  // Líneas iniciales según idioma
  useEffect(() => {
    setLines([
      t("terminal.welcome") || "Welcome to my portfolio terminal!",
      t("terminal.instructions") || "Type 'help' to see commands."
    ]);
  }, [t]);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input) return;

    let newLines = [...lines, `> ${input}`];

    // Convertimos a minúsculas para comparar
    const command = input.toLowerCase();

    switch (command) {
      case "help":
      case "ayuda":
        newLines.push(t("terminal.commands.help"));
        break;
      case "about":
      case "acerca de":
        newLines.push(t("terminal.commands.about"));
        break;
      case "projects":
      case "proyecto":
      case "proyectos":
        newLines.push(t("terminal.commands.projects"));
        break;
      case "contact":
      case "contacto":
        newLines.push(t("terminal.commands.contact"));
        break;
      default:
        // notFound es función que recibe input
        newLines.push(t("terminal.commands.notFound", { input }));
    }

    setLines(newLines);
    setInput("");
  };

  return (
    <div className="terminal-container">
      <div className="terminal-output">
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleCommand}>
        <span className="prompt">&gt; </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="terminal-input"
          autoFocus
        />
      </form>
    </div>
  );
}
