import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import TimeCSS from "./../static/css/timeline.css";
import { useLanguage } from "../i18n/LanguageContext";



function TimeExperience() {

  const { t } = useLanguage();
  const events = t("experience");

  

  return (
     <div
     
      className="d-flex justify-content-center align-items-center container"
      
    >
      <VerticalTimeline >
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${event.type}`}
            date={event.date}
            iconStyle={{ background: event.iconBg, color: "#fff" }}
            icon={event.icon}
            contentStyle={{ background: event.iconBg, color: "#black" }}
            contentArrowStyle= {{ borderRight: `7px solid ${event.iconBg}` }}
          >
            {event.title && <h3 className="vertical-timeline-element-title">{event.title}</h3>}
          <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "8px", marginTop:"8px" }}>
            {event.subtitle && (
              <h6 className="mb-0 vertical-timeline-element-subtitle" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <FaMapMarkerAlt /> {event.subtitle}
              </h6>
            )}
            {event.company && (
              <h6 className="mb-0" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <FaBuilding /> {event.company}
              </h6>
            )}
          </div>
            {event.description && <p>{event.description}</p>}
            {event.skills && event.skills.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            {event.skills.map((skill, idx) => (
              <span
                key={idx}
                style={{
                  background: "WHITE",
                  color: "BLACK",
                  padding: "3px 8px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
          )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}


export default TimeExperience;