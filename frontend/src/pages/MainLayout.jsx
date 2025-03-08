// import Hero from "../components/Hero"
// import { useEffect } from "react";
// import {useDispatch, useSelector} from "react-redux"
// import getImagesAct from "../store/images/actions/getImages"
import Master from "../components/Master";
import MasterGallery from "../components/MasterGallery";
import LenisSmoothScroll from "../services/LenisSmoothScroll"

function MainLayout() {

  // const dispatch = useDispatch();
  // const {images} = useSelector(state => state.images)

  // useEffect(() => {
  //   dispatch(getImagesAct())
  // }, [dispatch])

  return (
    <div className="">
      <LenisSmoothScroll>
        <Master />
        <MasterGallery />
      </LenisSmoothScroll>
    </div>
  );
}

export default MainLayout