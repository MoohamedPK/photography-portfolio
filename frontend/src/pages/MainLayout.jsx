import NavBar from "../components/NavBar"
import Home from "./Home"
import About from "../components/About"
import LenisSmoothScroll from "../services/LenisSmoothScroll"
import FeaturedWork from "../components/FeaturedWork"


function MainLayout() {
  return (
    <LenisSmoothScroll className="font-Robert">
      <NavBar/>
      <Home/>
      <About/>
      <FeaturedWork/>


      {/* footer */}
      <div className="h-screen">footer</div>
    </LenisSmoothScroll>
  )
}

export default MainLayout