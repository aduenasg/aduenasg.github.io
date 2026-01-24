
import CodeCardProgressWithColor from "./CodeCardProgressWithColor"


function Technologies() {
  return (
    <div className="about-me-wrapper">
  
  <div className="about-me-snippet">
    <pre>
      <code>
        <span className="keyword">class</span>{" "}
        <span className="function-name class-name">{"<Technologies />"}:</span>
      </code>
    </pre>
  </div>

    <div>
        <blockquote className="blockquote">
           <p className="lead text-center color-text mb-0 fs-4 fst-italic">&ldquo;Building powerful automations with the right tools and technologies&rdquo;</p> 
        </blockquote>
     
        <CodeCardProgressWithColor data={{
  skills: [
    { name: "Python", value: 90, color: "#3776AB" },   // Azul Python
    { name: "Golang", value: 70, color: "#00BFA5" },   // Verde-azulado Go
    { name: "Java", value: 80, color: "#E53935" },     // Rojo intenso Java
    { name: "Django", value: 70, color: "#43A047" },   // Verde vibrante Django
    { name: "Flask", value: 90, color: "#FDD835" },    // Amarillo brillante Flask
    { name: "React", value: 80, color: "#00D8FF" },    // Cyan brillante React
    { name: "MongoDB", value: 90, color: "#FF5722" },  // Naranja MongoDB
    { name: "MySQL", value: 90, color: "#1976D2" },    // Azul vivo MySQL
    { name: "Pandas", value: 80, color: "#8E24AA" },   // Morado Pandas
    { name: "APIs/REST", value: 80, color: "#FF9800" } // Naranja más claro APIs
    ],
    fileName: "technologies.py",
    className: "Technologies"
    }} />
 
</div>



  
</div>


  );
}

export default Technologies;