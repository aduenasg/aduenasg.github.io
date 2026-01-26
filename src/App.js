import Home from "./templates/Home";
import Experience from "./templates/Experience";
import AboutMe from "./templates/AboutMe";
import Technologies from "./templates/Technologies";
import Header  from "./templates/Header" ;
import { Routes, Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import "@fontsource/momo-signature";
import "@fontsource/zalando-sans";
import css from "./static/css/main.css";


function App() {
    return (
      <div>

         <Header />
         
          <section id="home"> 
            <Home />
          </section>
          
          <section id="about-me">
              <AboutMe/> 
          </section>

         <section id="technologies">
              <Technologies />
          </section>

          <section id="experience">
              <Experience />
          </section>
          
          

      </div>
       
      
     
    );
  
}

export default App;