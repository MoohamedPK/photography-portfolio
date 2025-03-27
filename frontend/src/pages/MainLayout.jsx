import NavBar from "../components/NavBar"
import Home from "../components/Home"
import About from "../components/About"
import LenisSmoothScroll from "../services/LenisSmoothScroll"
import FeaturedWork from "../components/FeaturedWork"
import {useDispatch, useSelector} from "react-redux"
import getImagesAct from "../store/images/actions/getImages"
import { useEffect } from "react"
import Contact from "../components/Contact"

function MainLayout() {

  const dispatch = useDispatch();
  const {media} = useSelector(state => state.media);

  useEffect(() => {
    dispatch(getImagesAct());

  }, [dispatch])
  
  return (
    <LenisSmoothScroll className="font-Robert">
      <NavBar/>
      <Home/>
      <About/>
      <FeaturedWork media={media}/>
      <Contact/>
    </LenisSmoothScroll>
  )
}

export default MainLayout