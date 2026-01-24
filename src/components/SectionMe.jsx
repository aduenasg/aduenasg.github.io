
import ProfileImage from "../static/img/imagen_perfil.jpg"; 
import CodeCard from "./CodeCard"
import CodeCardProgress from "./CodeCardProgress"
import Button from "./Button"

function SectionAboutMe() {
  return (
      <div className="about-me-wrapper">
  
  <div className="about-me-snippet">
    <pre>
      <code>
        <span className="keyword">def</span>{" "}
        <span className="function-name class-name">about_me</span>
        <span className="punctuation class-name">():</span>
      </code>
    </pre>
  </div>

  {/* Profile section */}
  <div className="about-me-content">
    <img
      src={ProfileImage}
      alt="Descripción"
      className="profile-image"
    />

     <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
           <CodeCard 
              data={{
            fileName: "developer.py",
            className: "Developer",
            content: {
              name: "Amanda Dueñas Gándara",
              role: "FullStack & ML Engineer",
              description:
                "Soy una profesional especializada en el \n desarrollo de aplicaciones web e soluciones \n de machine learning.",
              tools: ["Python", "Go", "React"],
            },
          }} />

          <Button />
          




        </div>
        <div className="col-12 col-md-6 mb-3">
         <CodeCardProgress data={{
  skills: [
    { name: "Python skills", value: 90 },
    { name: "Frameworks", value: 90 },
    { name: "APIs/REST", value: 80 },
    { name: "Golang skills", value: 70 },
    { name: "Machine Learning", value: 80 },
  ],
  fileName: "skills.py",
  className: "Skills"
}} />
        </div>
      </div>
    </div>

    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-3 mb-3">
          <div className="p-3 text-white text-center icons-color" style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: "8px" }}>
            <i className="bi bi-code-square icons-color"></i>
             <p className="fs-3 mb-0 fw-bold"> 3+ </p>
             <p className="text-secondary small">Lenguajes</p>

          </div>
        </div>
        <div className="col-12 col-md-3 mb-3">
          <div className="p-3 text-white text-center " style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: "8px" }}>
            <i className="bi bi-braces icons-color"></i>
             <p className="fs-3 mb-0 fw-bold"> 5+ </p>
             <p className="text-secondary small"> Framework</p>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-3">
          <div className="p-3 text-white text-center " style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: "8px" }}>
             <i className="bi bi-code-slash icons-color"></i>
             <p className="fs-3 mb-0 fw-bold"> 0 </p>
             <p className="text-secondary small"> Proyectos</p>
          </div>
        </div>
        <div className="col-12 col-md-3 mb-3">
          <div className="p-3 text-white text-center " style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: "8px" }}>
            <i className="bi bi-graph-up icons-color"></i>
             <p className="fs-3 mb-0 fw-bold"> 4+ años</p>
             <p className="text-secondary small">Experiencia </p>
          </div>
        </div>
      </div>
    </div>

   
      
    
  </div>
</div>


  );
}

export default SectionAboutMe;