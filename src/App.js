import Home from "./templates/Home";
import Experience from "./templates/Experience";
import AboutMe from "./templates/AboutMe";
import { Routes, Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "@fontsource/momo-signature";
import "@fontsource/zalando-sans";
import css from "./static/css/main.css";


function App() {
    return (
      <div>
          <section id="home">
            <Home />
          </section>
          
          <section id="about-me">
              <AboutMe/> 
          </section>
         
          <section id="experience">
              <Experience />
          </section>
          
          

      </div>
       
      
     
    );
  
}

export default App;