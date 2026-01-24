import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const LoadMoreText = ({ text, maxLength = 120 }) => {
  const [expanded, setExpanded] = useState(false);

  const isLongText = text.length > maxLength;
  const displayText = !expanded && isLongText ? text.slice(0, maxLength) + "..." : text;

  return (
    <p className="mb-2" style={{ marginBottom: "0.5rem" }}>
      {displayText}{" "}
      {isLongText && (
        <span
          onClick={() => setExpanded(!expanded)}
          style={{
            color: "white",             // color rojo
            cursor: "pointer",             // cursor pointer
            fontWeight: "500",             // un poco más grueso
            textDecoration: "underline",   // subrayado
            transition: "color 0.2s ease", // transición suave
            display: "inline-flex",        // icono y texto juntos
            alignItems: "center",          // alineación vertical
            gap: "2px",                    // espacio entre icono y texto
          }}
          onMouseOver={e => (e.currentTarget.style.color = "white")} // hover rojo más fuerte
          onMouseOut={e => (e.currentTarget.style.color = "white")}
        >
          {expanded ? <FaMinus size={12} /> : <FaPlus size={12} />}
          {expanded ? "Ver menos" : "Cargar más"}
        </span>
      )}
    </p>
  );
};

export default LoadMoreText;
