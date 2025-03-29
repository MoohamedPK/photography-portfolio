import NavBar from "../components/NavBar"
import About from "../components/About"
import FeaturedWork from "../components/FeaturedWork"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import { useDispatch, useSelector } from "react-redux";
import getImagesAct from "../store/images/actions/getImages";
import { useEffect } from "react";

function Home() {

    const dispatch = useDispatch();
    const { media } = useSelector((state) => state.media);

    useEffect(() => {
    dispatch(getImagesAct());
    }, [dispatch]);

  return (
    <>
        <Hero/>
        <About/>
        <FeaturedWork media={media}/>
    </>
  )
}

export default Home