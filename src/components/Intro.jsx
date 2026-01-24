import IntroCss from "./../static/css/intro.css";
import { Card, Container, Row, Col, Carousel} from "react-bootstrap";
import Social from "./SocialButton";
import { useLanguage } from "../i18n/LanguageContext";
import Terminal from "./Terminal";
import LoadMoreParagraphs from  "./LoadMoreParagraphs";

function Intro() {
  const { t } = useLanguage();
  const paragraphs = t("about.text").split("\n\n");


  return (
<div className="d-flex align-items-center container-fluid background-intro">
  <Container fluid className="container-intro">
    <Row className="h-100">

      {/* Columna izquierda con contenido */}
      <Col
        md={6}
        className="d-flex align-items-center fade-in"
      >
        <div className="intro-box text-light text-start w-100 d-flex flex-column justify-content-center">
          
          <div className="text-muted mb-2">
            <p className="subtitle zalando-sans">
              {t("hero.subtitle")}
            </p>
          </div>

          <h1 className="fs-1 momo-signature text-light title">
            {t("hero.title")}
          </h1>

          <div className="zalando-sans text-light">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
            
          </div>

          <div className="mt-3">
            <a href="#" className="text-light">
              <Social />
            </a>
          </div>

        </div>
      </Col>

    
      <Col
        md={6}
        className="d-flex align-items-center justify-content-center fade-in"
      >
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

