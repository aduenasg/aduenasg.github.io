import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <a 
        href="https://github.com/aduenasg" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "8px 12px",
          backgroundColor: "#f4a261",
          color: "white",
          borderRadius: "40%",
          textDecoration: "none",
        }}
      >
        <FaGithub /> 
      </a>

      <a 
        href="https://www.linkedin.com/in/amanda-dueñas-gándara-b25375203/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "8px 12px",
          backgroundColor: "#f4a261",
          color: "white",
          borderRadius: "40%",
          textDecoration: "none",
        }}
      >
        <FaLinkedin /> 
      </a>
    </div>
  );
};

export default SocialButtons;
