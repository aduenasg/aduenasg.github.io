import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

const LoadMoreParagraphs = ({ paragraphs = [], maxLength = 120 }) => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  // Convierte todos los párrafos en un solo texto para medir longitud
  const fullText = paragraphs.join(" ");
  const isLongText = fullText.length > maxLength;

  // Texto a mostrar
  let displayText = expanded || !isLongText
    ? paragraphs
    : (() => {
        let count = 0;
        const result = [];
        for (const p of paragraphs) {
          if (count + p.length <= maxLength) {
            result.push(p);
            count += p.length;
          } else {
            const remaining = maxLength - count;
            if (remaining > 0) {
              result.push(p.slice(0, remaining) + "...");
            }
            break;
          }
        }
        return result;
      })();

  return (
    <div className="zalando-sans text-light">
      {displayText.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
      {isLongText && (
        <span
          onClick={() => setExpanded(!expanded)}
          style={{
            color: "#94312B",
            cursor: "pointer",
            fontWeight: "500",
            textDecoration: "underline",
            display: "inline-flex",
            alignItems: "center",
            gap: "2px",
            transition: "color 0.2s ease",
          }}
          onMouseOver={e => (e.currentTarget.style.color = "#b34141")}
          onMouseOut={e => (e.currentTarget.style.color = "#94312B")}
        >
          {expanded ? <FaMinus size={12} /> : <FaPlus size={12} />}
          {expanded ? t("common.seeLess") : t("common.seeMore")}
        </span>
      )}
    </div>
  );
};

export default LoadMoreParagraphs;
