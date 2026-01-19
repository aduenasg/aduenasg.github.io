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
import { Link as ScrollLink } from "react-scroll";

function NavbarPage() {
  const [expanded, setExpanded] = useState(false);
  const links = navLinks();
  return (
    
     <header className="nav-header p-4">
  <div>
    <Navbar
      expanded={expanded}
      expand="md"
      style={{ background: "transparent" }}
    >
      <Container className="justify-content-center"> {/* Centra todo */}
        
        <Navbar.Brand
          href="/"
          className="fw-bold text-white d-flex align-items-center gap-2"
        >
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
            {/* Aquí va tu logo o texto */}
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          style={{ border: "none" }}
        >
          {expanded ? <FaTimes size={22} color="white" /> : <FaBars size={22} color="white" />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center"> {/* Items centrados */}
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <ScrollLink
                    to={link.path}  // id de la sección
                    smooth={true}
                    duration={500}
                    className="text-white text-decoration-none d-flex align-items-center gap-2 p-2"
                  >
                    <Icon /> {link.label}
                </ScrollLink>
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