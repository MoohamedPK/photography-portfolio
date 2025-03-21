import NavBar from "../components/NavBar"
import Home from "../components/Home"
import About from "../components/About"
import LenisSmoothScroll from "../services/LenisSmoothScroll"
import FeaturedWork from "../components/FeaturedWork"
import {useDispatch} from "react-redux"
import getImagesAct from "../store/images/actions/getImages"
import { useEffect } from "react"
import { cleanUpImagesState } from "../store/images/imagesSlice"
import Contact from "../components/Contact"

function MainLayout() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getImagesAct());

    return () => {
      dispatch(cleanUpImagesState());
    }
  }, [dispatch])
  
  return (
    <LenisSmoothScroll className="font-Robert">
      <NavBar/>
      <Home/>
      <About/>
      <FeaturedWork/>
      <Contact/>
    </LenisSmoothScroll>
  )
}

export default MainLayout