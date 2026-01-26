import React, { useState, useEffect } from "react";
import  terminalcss from "./../static/css/terminal.css";

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");

  // Opcional: líneas iniciales
  useEffect(() => {
    setLines([
      "Welcome to my portfolio terminal!",
      "Type 'help' to see commands."
    ]);
  }, []);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input) return;

    let newLines = [...lines, `> ${input}`];

    // Simulamos respuestas según comando
    switch (input.toLowerCase()) {
      case "help":
        newLines.push("Commands: help, about, projects, contact");
        break;
      case "about":
        newLines.push("I am a web developer.");
        break;
      case "projects":
        newLines.push("Check my projects at /projects");
        break;
      case "contact":
        newLines.push("");
        break;
      default:
        newLines.push(`Command not found: ${input}`);
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