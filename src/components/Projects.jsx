

import { FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import projectsCSS from "./../static/css/projects.css";

function SectionProjects() {
  const { t } = useLanguage();
  const items = t("projects.items") || [];

  return (
      <div className="about-me-wrapper">

  <div className="about-me-snippet">
    <pre>
      <code>
        <span className="keyword">Class</span>{" "}
        <span className="function-name class-name">{t("navbar.projects")}</span>
        <span className="punctuation class-name">:</span>
      </code>
    </pre>
  </div>

  <div className="container text-light text-center ">

       <div className="projects-grid">
         {items.map((project, index) => (
           <div
             className="project-card"
             key={index}
             style={{ animationDelay: `${index * 0.15}s` }}
           >
             <h3 className="project-card-title">{project.title}</h3>
             <p className="project-card-description">{project.description}</p>

             {project.tags && project.tags.length > 0 && (
               <div className="project-card-tags">
                 {project.tags.map((tag, i) => (
                   <span className="project-card-tag" key={i}>{tag}</span>
                 ))}
               </div>
             )}

             <a
               className="project-card-button"
               href={project.link}
               target="_blank"
               rel="noopener noreferrer"
             >
               {t("projects.visit")} <FaExternalLinkAlt />
             </a>
           </div>
         ))}
       </div>

  </div>


</div>


  );
}

export default SectionProjects;