import NavBar from "../components/NavBar"
import Home from "./Home"
import About from "../components/About"
import LenisSmoothScroll from "../services/LenisSmoothScroll"
import FeaturedWork from "../components/FeaturedWork"
import {useDispatch, useSelector} from "react-redux"
import getImagesAct from "../store/images/actions/getImages"
import { useEffect } from "react"

function MainLayout() {

  const dispatch = useDispatch();
  const {images} = useSelector(state => state.images);

  console.log(images)

  useEffect(() => {
    dispatch(getImagesAct())
  }, [dispatch])


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