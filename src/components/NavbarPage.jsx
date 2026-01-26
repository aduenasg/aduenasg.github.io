import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import navLinks from '../config/navLinks';
import LanguageSelector from "./LanguageSelector";
import "../static/css/navbar.css";

function NavbarPage() {
  const [expanded, setExpanded] = useState(false);
  const links = navLinks();

  return (
    <header className="nav-header">
      <Navbar
        expanded={expanded}
        expand="md"
        fixed="top"              
        style={{ background: "black" }}
      >
        <Container className="justify-content-center">

          <Navbar.Brand href="/" className="fw-bold text-white d-flex align-items-center gap-2">
            {/* Aquí tu logo */}
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            style={{ border: "none" }}
          >
            {expanded ? <FaTimes size={22} color="white" /> : <FaBars size={22} color="white" />}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto justify-content-center">
              {links.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <ScrollLink
                    key={idx}
                    to={link.path}
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
    </header>
  );
}

export default NavbarPage;