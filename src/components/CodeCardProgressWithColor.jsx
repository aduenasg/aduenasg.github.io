import React from "react";
import "./../static/css/cardProgressImage.css";

const CodeCardProgressWithColor = ({ data }) => {
  const { fileName, className, skills = [] } = data;

  return (
    <div className="container my-4 d-flex justify-content-center">
      {/* Terminal más ancha */}
      <div className="col-12" >
        <div className={`code-container ${className || ""}`}>
          <div className="code-window">
            {/* Header */}
            <div className="window-header">
              <div className="action-buttons">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="file-info">
                <span className="terminal-icon">{">_"}</span>
                <span>{fileName}</span>
              </div>
            </div>

            {/* Body */}
            {skills.length > 0 && (
              <div className="container-fluid mt-3">
                <div className="row g-4">
                  {skills.map((skill, index) => (
                    <div className="col-12 col-md-6" key={index}>
                      <div className="skill">
                        {/* Nombre de la skill */}
                        <div className="skill-name mb-2">{skill.name}</div>

                        {/* Barra de progreso menos ancha */}
                        <div className="d-flex align-items-center gap-2">
                          <div style={{ width: "80%" }}>
                            <div
                              className="progress"
                              style={{
                                height: "20px",
                                borderRadius: "10px",
                                width: "100%",
                              }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{
                                  width: `${skill.value}%`,
                                  backgroundColor: skill.color || "#4ade80",
                                }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>

                          {/* Porcentaje al lado */}
                          <span
                            className="fw-bold"
                            style={{ color: "#94312B" }}
                          >
                            {skill.value}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeCardProgressWithColor;
