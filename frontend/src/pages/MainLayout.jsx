import NavBar from "../components/NavBar"
import Home from "../components/Hero"
import About from "../components/About"
import LenisSmoothScroll from "../services/LenisSmoothScroll"
import FeaturedWork from "../components/FeaturedWork"

import Contact from "../components/Contact"
import { Outlet } from "react-router-dom"

function MainLayout() {

  return (
    <LenisSmoothScroll className="font-Robert">
      <NavBar />

        <div>
          <Outlet/>
        </div>
        
      <Contact />
    </LenisSmoothScroll>
  );
}

export default MainLayout