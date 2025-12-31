
import ProfileImage from "../static/img/imagen_perfil.jpg"; 

function SectionAboutMe() {
  return (
    <div>
  <img
    src={ProfileImage}
    alt="Descripción"
    style={{
      width: "200px",
      height: "200px",
      borderRadius: "50%", // redondeada
      objectFit: "cover",
      marginBottom: "20px",
    }}
  />

  <p style={{ maxWidth: "800px", lineHeight: "1.6" }}>
    Soy una profesional especializada en el desarrollo de aplicaciones web y soluciones de machine learning, destacándome por mi dedicación, resolución efectiva de problemas y compromiso con la excelencia. Tengo una sólida disposición para aprender y la capacidad de desempeñarme de manera autónoma o colaborativa en equipos.<br />   

    Mi orientación hacia la mejora continua y la aplicación efectiva de conocimientos se traduce en una actitud proactiva y en la consecución de objetivos. Estoy abierta a asumir responsabilidades adicionales y a contribuir de manera significativa al éxito del equipo, siempre con inquietud por el aprendizaje.<br />   

    Me enfoco en crear aplicaciones robustas, escalables y seguras, garantizando soluciones confiables y eficientes para cualquier proyecto.
  </p>

</div>

  
  
  );
}

export default SectionAboutMe;