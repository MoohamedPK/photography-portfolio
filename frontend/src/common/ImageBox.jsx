import gsap from 'gsap'
import {ScrollTrigger} from "gsap/all"
import {useGSAP} from "@gsap/react"
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function ImageBox({img, containerClass}) {

  const ImageBox = useRef(null)
  const Image = useRef(null)

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ImageBox.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    tl.from(Image.current, {
      scale: 0.1,
      autoAlpha: 0,
      duration: 1.5,
      ease: "power3.inOut",
    })
  }, []);

  return (
    <div ref={ImageBox} className={`w-full h-screen relative cursor-pointer`}>
      <div className="image-box-content"></div>

      <div className={`w-[400px] h-[500px] absolute ${containerClass}`}>
        <img
          ref={Image}
          className="w-full h-full object-cover brightness-70"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default ImageBox