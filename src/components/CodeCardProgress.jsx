import React from "react";
import "./../static/css/cardProgress.css";

const CodeCardProgress = ({ data }) => {
  const { fileName, className, skills = [] } = data;

  return (
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
            <span className="terminal-icon">{`>_`}</span>
            <span>{fileName}</span>
          </div>
        </div>

        {/* Body */}
        

        {skills.length > 0 && (
          <div className="progress-container">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-name">{skill.name}</div>
                <div className="progress-bar-wrapper">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                  <span className="progress-percentage">{skill.value}%</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeCardProgress;
