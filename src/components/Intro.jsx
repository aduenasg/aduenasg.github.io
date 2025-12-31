import IntroCss from "./../static/css/intro.css";
import { Card, Container, Row, Col, Carousel} from "react-bootstrap";
import Social from "./SocialButton";
import { useLanguage } from "../i18n/LanguageContext";

function Intro() {
  const { t } = useLanguage();
  const paragraphs = t("about.text").split("\n\n");


  return (
    
<>
     <Carousel indicators={false} controls={false} interval={6000} fade className="carousel-container background-intro">
  <Carousel.Item>
    <Container
      fluid
      className="d-flex justify-content-center align-items-center container-intro"
      
    >
      
      <Col
        md={8}                 
        className="d-flex justify-content-center align-items-center fade-in h-100"
      >
        <Card  className="border-0 bg-transparent text-light text-center w-100">
          <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
            
            
            <div>
              <div className="text-muted mb-2">
                <p className="subtitle zalando-sans">
                  {t("hero.subtitle")}
                </p>
              </div>

              <Card.Title className="fs-3 momo-signature text-light">
                ¡Hola, soy Amanda!
              </Card.Title>

              <Card.Text className="zalando-sans text-light">
               {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </Card.Text>
            </div>

            
            <div className="d-flex justify-content-center mt-3">
              <Card.Link href="#"><Social/></Card.Link>
            </div>

          </Card.Body>
        </Card>
      </Col>
    </Container>
  </Carousel.Item>
</Carousel>
   


    </>
  );
}

export default Intro;

