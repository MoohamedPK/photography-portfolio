import { useEffect, useRef } from "react";
import AboutImage from "../assets/images/about pic.jpg"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

function About() {

  const imgMaskRef = useRef(null);
  const aboutSecRef = useRef(null);

  
  gsap.set(imgMaskRef.current, {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    opacity: 0
  });
  
  useEffect(() => {

    if (!imgMaskRef.current || !aboutSecRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSecRef.current,
        start: "top center",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    tl.to(imgMaskRef.current, {
      clipPath: "polygon(7% 91%, 99% 95%, 100% 20%, 8% 11%)",
      opacity: 1,
      duration: 2,
      ease: "power2.inOut",
    });

  }, [])


  return (
    <div
      ref={aboutSecRef}
      className="w-full h-[120dvh] relative bg-black grid place-content-center text-white overflow-hidden"
    >
      <div className="sec-title text-center md:mb-[15vh] mb-[8vh] md:text-3xl text-xl uppercase">
        <h1>About Me</h1>
      </div>
      {/* <div className="circle-mask size-30 bg-pink-300 rounded-full absolute mix-blend-difference z-50"></div> */}

      <div className="about-container grid md:grid-cols-2 grid-cols-1 gap-15 ">
        <div className="about-img-container md:size-[500px] size-[300px]">
          <div ref={imgMaskRef} className="img-mask rounded-lg size-full">
            <img src={AboutImage} alt="" className="object-cover rounded-lg" />
          </div>
        </div>

        <div className="about-text size-[350px] md:size-[500px] md:text-4xl leading-12">
          <p>
            This is me Abdo, a passionate photographer,
            filmmaker, and video editor with a keen eye for storytelling.
            Whether capturing stunning shots or crafting cinematic edits,
            I turn moments into visual masterpieces.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About