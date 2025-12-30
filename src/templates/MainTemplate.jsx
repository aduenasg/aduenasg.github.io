import Header from "./../components/NavbarPage" ;
import { Outlet } from "react-router-dom";
import MainCSS from "./../static/css/main.css";


export default function Layout() {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>

      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}