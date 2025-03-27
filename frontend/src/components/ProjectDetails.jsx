import { useEffect, useLayoutEffect, useRef } from "react";
import {useSelector, useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import getImageById from "../store/images/actions/getImageById";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

function ProjectDetails() {
  
  const {id} = useParams()
  const dispatch = useDispatch();
  const {currentMedia} = useSelector(state => state.media)
  
  useEffect(() => {
    if (id) {
      dispatch(getImageById(id));
    }
    
  }, [dispatch, id])

  // GSAP REFS 
  const imageDivRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const images = gsap.utils.toArray(".image")
      
      images.forEach((image) => {

        gsap.set(image, {
          clipPath: "polygon(0 0, 2% 0, 2% 60%, 0 100%)",
        });

        gsap.to(image, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: image,
            start: "top top",
            pin:true,
            toggleActions: "play none none reverse"
          }
        });

      })
    }, imageDivRef)

    return () => ctx.revert();
  })
  
  return (
    <section className="w-full bg-black text-white overflow-hidden">
      <div className="container ">
        {currentMedia.map((media, index) => (
          <>
            <div
              key={index}
              className="w-full h-screen space-y-10 text-center pt-12"
            >
              <h1 className="font-bold uppercase text-7xl" key={media._id}>
                {media.title}
              </h1>
              <p className="font-semibold text-gray-500 uppercase">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br /> Culpa in vitae velit dolorem vero vel voluptates pariatur
                nulla id voluptas!
              </p>
            </div>

            <div
              ref={imageDivRef}
              className="gallery flex flex-col items-center w-screen sm:h-[300dvh] md:h-[400dvh] lg:h-[450dvh]"
            >
              {media.assets.map((img, index) => (
                <div className="image md:w-[700px] md:h-[600px]">
                  <img
                    src={img.url}
                    alt=""
                    className="size-full object-cover brightness-90"
                  />
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
export default ProjectDetails;