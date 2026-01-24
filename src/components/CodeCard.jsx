import React from "react";
import CSSPy from "./../static/css/terminalPython.css";


const CodeCard = ({ data }) => {
  const { fileName, className, content } = data;

  return (
    <div className="code-container">
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
        <div className="code-content">
          <pre>
            <code>
              <span className="keyword">class</span>{" "}
              <span className="class-name">{className}</span>
              <span className="punctuation">:</span>
              {"\n"}

              {Object.entries(content).map(([key, value], index) => (
                <div className="indent" key={index}>
                  <span className="variable">{key} {"="} </span> 
                  {Array.isArray(value) ? (
                    <>
                      [
                      {value.map((item, i) => (
                        <span key={i}>
                          <span className="string">"{item}"</span>
                          {i < value.length - 1 && ", "}
                        </span>
                      ))}
                      ]
                    </>
                  ) : (
                    <span className="string">"{value}"</span>
                  )}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeCard;
