import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icon from './../static/img/logo.png';
import { useState } from "react";
import NavbarCSS from "./../static/css/navbar.css";
import { 
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
  FaBars,
  FaTimes
} from "react-icons/fa";

function NavbarPage() {
  const [expanded, setExpanded] = useState(false);
  return (
    
     <header className="nav-header">
  <div
    style={{
      background: "linear-gradient(135deg, rgba(255,120,0,0.55), rgba(255,70,0,0.45))",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      boxShadow: "0 4px 25px rgba(255,120,0,0.45)",
      borderBottom: "1px solid rgba(255,160,0,0.5)",
      padding: "0px",
    }}
  >
    <Navbar expanded={expanded} expand="md" style={{ background: "transparent" }}>
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-white d-flex align-items-center gap-2">
          <div
            style={{
              borderRadius: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              boxShadow: "0px 0px 12px rgba(255,120,0,0.65)",
            }}
          >
            <img src={Icon} alt="Icono" style={{ width: "80px", height: "80px", borderRadius: "20%" }} />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} style={{ border: "none" }}>
          {expanded ? <FaTimes size={22} color="white" /> : <FaBars size={22} color="white" />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-white d-flex align-items-center gap-2"><FaHome /> Inicio</Nav.Link>
            <Nav.Link href="/about-me" className="text-white d-flex align-items-center gap-2"><FaUser /> Sobre Mi</Nav.Link>
            <Nav.Link href="/experience" className="text-white d-flex align-items-center gap-2"><FaBriefcase /> Experiencia</Nav.Link>
            <Nav.Link href="#proyectos" className="text-white d-flex align-items-center gap-2"><FaProjectDiagram /> Proyectos</Nav.Link>
            <Nav.Link href="#tecnologias" className="text-white d-flex align-items-center gap-2"><FaTools /> Tecnologías</Nav.Link>
            <Nav.Link href="#contacto" className="text-white d-flex align-items-center gap-2"><FaEnvelope /> Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
</header>
    
  );
}

export default NavbarPage ;