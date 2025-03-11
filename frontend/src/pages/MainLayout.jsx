import NavBar from "../components/NavBar"
import Home from "./Home"
import About from "../components/About"
import LenisSmoothScroll from "../services/LenisSmoothScroll"


function MainLayout() {
  return (
    <LenisSmoothScroll className="font-Robert">
      <NavBar/>
      <Home/>
      <About/>



      {/* footer */}
      <div>footer</div>
    </LenisSmoothScroll>
  )
}

export default MainLayout