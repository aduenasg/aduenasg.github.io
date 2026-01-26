// Intro.jsx
import { Container, Row, Col } from "react-bootstrap";
import Social from "./SocialButton";
import Terminal from "./Terminal";
import { useLanguage } from "../i18n/LanguageContext";
import "../static/css/intro.css";

function Intro() {
  const { t } = useLanguage();
  const paragraphs = t("about.text").split("\n\n");

  return (
    <div className="background-intro">
      <Container fluid className="container-intro">
        <Row className="h-100">

          {/* Columna izquierda */}
          <Col md={6} className="d-flex align-items-center fade-in">
            <div className="intro-box text-light text-start w-100 d-flex flex-column justify-content-center">
              <p className="subtitle zalando-sans text-muted mb-2">{t("hero.subtitle")}</p>
              <h1 className="fs-1 momo-signature text-light title">{t("hero.title")}</h1>
              <div className="zalando-sans text-light">
                {paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
              </div>
              <div className="mt-3">
                <Social />
              </div>
            </div>
          </Col>

          {/* Columna derecha */}
          <Col md={6} className="d-flex align-items-center justify-content-center fade-in">
            <div className="terminal-wrapper w-100">
              <Terminal /> 
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Intro;
