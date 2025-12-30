import Home from "./templates/Home";
import Experience from "./templates/Experience";
import Layout from "./templates/MainTemplate";
import { Routes, Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "@fontsource/momo-signature";
import "@fontsource/zalando-sans";


function App() {
    return (
      <Routes>
        <Route element={<Layout />}>  
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    );
  
}

export default App;