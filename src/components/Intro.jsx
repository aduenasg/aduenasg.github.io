import IntroCss from "./../static/css/intro.css";
import { Card, Container, Row, Col, Carousel} from "react-bootstrap";
import Social from "./SocialButton";

function Intro() {
  


  return (
    
<>
     <Carousel indicators={false} controls={false} interval={6000} fade className="carousel-container background-intro">
  <Carousel.Item>
    <Container
      fluid
      className="d-flex justify-content-center align-items-center container-intro"
      
    >
      {/* Columna centrada verticalmente */}
      <Col
        md={8}                 
        className="d-flex justify-content-center align-items-center fade-in h-100"
      >
        <Card  className="border-0 bg-transparent text-light text-center w-100">
          <Card.Body className="d-flex flex-column justify-content-center align-items-center h-100">
            
            {/* TEXTO CENTRADO */}
            <div>
              <div className="text-muted mb-2">
                <p className="subtitle zalando-sans">
                  Desarrolladora Web | Entusiasta del Código
                </p>
              </div>

              <Card.Title className="fs-3 momo-signature text-light">
                ¡Hola, soy Amanda!
              </Card.Title>

              <Card.Text className="zalando-sans text-light">
                Me encanta sumergirme en el maravilloso mundo de la programación 🌐💻.<br /> 
                Desde que escribí mi primera línea de código, descubrí que no hay nada más emocionante<br /> 
                que ver cómo ideas locas se transforman en páginas web y aplicaciones.<br /><br />

                Creé esta página con el propósito de compartir mis proyectos, mis locuras por la programación <br /> 
                y quizás también algunas anécdotas de mis batallas épicas con bugs que parecían invencibles 🐞⚔️.<br /> 
                Me encanta aprender cosas nuevas cada día y siempre estoy buscando maneras de mejorar mis habilidades,<br /> 
                ya sea con JavaScript, React, o simplemente jugando con algún nuevo framework que me haga decir “wow, esto es increíble”.<br /><br />

                Así que si estás aquí, <strong>¡bienvenido a mi pequeño rincón del código! 🚀</strong><br /> 
                Espero que disfrutes explorando mis proyectos y te animes a contactarme para compartir ideas. 
              </Card.Text>
            </div>

            {/* BOTONES CENTRADOS */}
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

