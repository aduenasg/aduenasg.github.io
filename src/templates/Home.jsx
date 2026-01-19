
import Intro  from "./../components/Intro" ;
import Header  from "./../components/NavbarPage" ;


function Home() {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div className="content-container">
        <Intro />
      </div>
  </div>
  )
}

export default Home;