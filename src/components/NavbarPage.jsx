import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icon from './../static/img/logo.png';
import { useState } from "react";
import { Link } from 'react-router-dom';
import NavbarCSS from "./../static/css/navbar.css";
import { 
  FaBars,
  FaTimes
} from "react-icons/fa";
import navLinks from './../config/navLinks';
import LanguageSelector from "./../components/LanguageSelector";


function NavbarPage() {
  const [expanded, setExpanded] = useState(false);
  const links = navLinks();
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
          
          <Nav className='ms-auto'>
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Nav.Item key={link.path}>
                  <Link to={link.path} className="text-white text-decoration-none d-flex align-items-center gap-2 p-2">
                    <Icon /> {link.label}
                  </Link>
                </Nav.Item>
              );
            })}
            <Nav.Item>
              <LanguageSelector />
            </Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
</header>
    
  );
}

export default NavbarPage ;