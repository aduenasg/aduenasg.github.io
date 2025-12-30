import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap, FaStar, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import { Card, Container, Row, Col, Carousel} from "react-bootstrap";
import TimeCSS from "./../static/css/timeline.css";

const events = [
   {
    type: "work",
    date: "octubre 2024 - actualidad",
    title: "Desarrolladora Web",
    subtitle:  "Madrid, ES",
    company: "CSA",
    description: "Desarrollo Full Stack con Python y sus principales frameworks, orientado a la creación de soluciones tecnológicas seguras, escalables y alineadas con las necesidades del mercado.Implementación de algoritmos avanzados y desarrollo de aplicaciones destinadas a la optimización de procesos y mejora de la toma de decisiones, aplicando buenas prácticas de ingeniería de software y altos estándares de calidad.Además, del uso y la integración de tecnologías modernas y altamente demandadas en el mercado, garantizando la eficiencia, estabilidad y competitividad de los sistemas desarrollados.",
    icon: <FaBriefcase />,
    iconBg: "#f4a261",
    skills:["Flask", "MariaDB", "Docker", "HTML", "CSS",  "Bootstrap", "Python", "JSON", "Trabajo en equipo", "Api Rest", "DevSecOps", "GO", "SQL Server", "MongoDB"]

  },
    {
    type: "work",
    date: "marzo 2024 - agosto 2024",
    title: "Engineer",
    subtitle:  "Madrid, ES",
    company: "Nttdata",
    description: "Desarrollo Full Stack en Python, con una notable trayectoria en soluciones bancarias a través de la implementación de algoritmos avanzados y modelos de ML. Gestión, administración y despliegue de servidores mediante tecnología Docker para la aplicación de los algoritmos creados.Supervisión y gestión de equipo así como contacto directo con los clientes, asegurando una comunicación fluida y el entendimiento de sus necesidades para proporcionar soluciones a medida.",
    icon: <FaBriefcase />,
    iconBg: "#f4a261",
    skills:["Gestión de equipo técnico", "Inteligencia artificial", "Dash", "Flask", "MariaDB", "Docker", "Pandas", "Numpy", "Análisis de datos", "HTML", "React", "Matplotlib", "CSS", "Java", "Bootstrap", "Python", "JSON", "Anaconda", "Trabajo en equipo" ]

  },
  {
    type: "work",
    date: "diciembre 2023 - marzo 2024",
    title: "Junior Engineer",
    subtitle:  "Madrid, ES",
    company: "Nttdata",
    description: "Desarrollo Full Stack en Python, con experiencia destacada en soluciones bancarias mediante la implementación de algoritmos avanzados y modelos de ML.Administración, gestión y despliegue de servidores bajo tecnología Docker en la implementación de los algoritmos desarrollados.Coordinación de personal en prácticas, asegurando un aprendizaje efectivo.",
    icon: <FaBriefcase />,
    iconBg: "#f4a261",
    skills:["Gestión de equipo técnico", "Inteligencia artificial", "Dash", "Flask", "MariaDB", "Docker", "Pandas", "Numpy", "Análisis de datos", "HTML", "React", "Matplotlib", "CSS", "Java", "Bootstrap", "Python", "JSON", "Anaconda", "Trabajo en equipo" ]

  },
  {
    type: "work",
    date: "julio 2021 - diciembre 2023",
    title: "Solutions Assistant",
    subtitle:  "Madrid, ES",
    company: "Nttdata",
    description: "",
    icon: <FaBriefcase />,
    iconBg: "#f4a261",
    skills:["Inteligencia artificial", "Dash", "Flask", "MariaDB", "Docker", "Pandas", "Numpy", "Análisis de datos", "HTML", "React", "Matplotlib", "CSS", "Java", "Bootstrap", "Python", "JSON", "Anaconda", "Trabajo en equipo" ]
  },
   {
    type: "work",
    date: "marzo 2021 - junio 2021",
    title: "Desarrolladora Web",
    subtitle:  "Madrid, ES",
    company: "Nttdata",
    description: "Contrato en practicas",
    icon: <FaBriefcase />,
    iconBg: "#f4a261",
    skills:["HTML", "React", "Matplotlib", "CSS", "Java", "Bootstrap", "Python", "JSON", "Anaconda", "Trabajo en equipo"]
  }
];

function TimeExperience() {
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