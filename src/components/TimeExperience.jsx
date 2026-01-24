import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaMapMarkerAlt, FaBuilding, FaPlus, FaMinus } from "react-icons/fa";
import "./../static/css/timeline.css";
import { useLanguage } from "../i18n/LanguageContext";
import LoadMoreText  from "./LoadMoreText";

function TimeExperience() {
  const { t } = useLanguage();
  const events = t("experience");

  const [showAll, setShowAll] = useState(false);

  // Mostrar solo los primeros 2 si showAll es false
  const displayedEvents = showAll ? events : events.slice(0, 2);

  return (

    <div className="about-me-wrapper">

    
    <div className="about-me-snippet">
            <pre>
              <code>
                <span className="keyword">def</span>{" "}
                <span className="function-name class-name">experiencia</span>
                <span className="punctuation class-name">():</span>
              </code>
            </pre>
    </div>
    <div className="d-flex justify-content-center align-items-center container" >

      <VerticalTimeline>
        {displayedEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${event.type}`}
            date={event.date}
            iconStyle={{ backgroundColor: "black", color: "#fff" }}
            icon={event.icon}
            contentStyle={{ backgroundColor: "rgba(148, 49, 43, 0.7)", color: "black", border: "none", }}
            contentArrowStyle={{ borderRight: "12px solid rgba(148, 49, 43, 0.7)" }}
            
          >
            {event.title && (
              <h3 className="vertical-timeline-element-title text-center">{event.title}</h3>
            )}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "8px",
                marginTop: "8px",
                justifyContent:"center",
                
              }}
            >
              {event.subtitle && (
                <h6
                  className="mb-0 vertical-timeline-element-subtitle"
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <FaMapMarkerAlt /> {event.subtitle}
                </h6>
              )}
              {event.company && (
                <h6
                  className="mb-0"
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <FaBuilding /> {event.company}
                </h6>
              )}
            </div>

            {event.description &&  <LoadMoreText text={event.description} maxLength={120} />}

            {event.skills && event.skills.length > 0 && (
              <div className="timeline-skills" style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "8px",
            }}>
                {event.skills.map((skill, idx) => (
                  <span key={idx} className="timeline-skill" style={{
                  background: "WHITE",
                  color: "BLACK",
                  padding: "3px 8px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                }}>
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </VerticalTimelineElement>
        ))}

        {/* Bola interactiva para Ver más / Ver menos */}
        {events.length > 2 && (
          <VerticalTimelineElement
            iconStyle={{
              background: "black",
              color: "#fff",
              cursor: "pointer",
            }}
            contentStyle={{ display: "none" }}
            icon={
              <div
                onClick={() => setShowAll(!showAll)}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                title={showAll ? "Ver menos" : "Ver más"}
              >
                {showAll ? <FaMinus style={{ fontSize: "1.2rem", lineHeight: 1 }} /> : <FaPlus style={{ fontSize: "1.2rem", lineHeight: 1 }} />}
              </div>
            }
          />
        )}
      </VerticalTimeline>
    </div>
    </div>
  );
}

export default TimeExperience;
