import LoopCounter from "./../components/Counter" ;
import SectionAboutMe from "./../components/SectionMe" ;
import AboutCSS from "./../static/css/aboutme.css";


function AboutMe() {
  return (
    <section className="section-about">

      <SectionAboutMe/>
  
      <div className="loopCounter">
        <LoopCounter start={0} end={5} step={1} interval={500} label="Años de experiencia" />
        <LoopCounter start={0} end={7} step={1} interval={700} label="Lenguajes usados" />
      </div>

    </section>

  );
}

export default AboutMe;