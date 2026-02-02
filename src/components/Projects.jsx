

import { useLanguage } from "../i18n/LanguageContext";
import projectsCSS from "./../static/css/projects.css";

function SectionProjects() {
  const { t } = useLanguage();

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
    
       <p className="projectCard text-center px-4 py-4">
            {t("projects.text")}
        </p> 
    
  </div>


</div>


  );
}

export default SectionProjects;