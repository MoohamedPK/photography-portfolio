import { useRef } from "react";
import Image from "../assets/images/WhatsApp Image 2025-03-22 at 16.33.59_8219df68.jpg"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {useGSAP} from "@gsap/react"
import Button from "../common/Button";

gsap.registerPlugin(ScrollTrigger);

function Hero() {

    const imageMaskRef = useRef(null);
    const textHolderRef = useRef(null);

    useGSAP(() => {
        gsap.set(imageMaskRef.current, {
          clipPath: "polygon(40% 0, 60% 0, 60% 100%, 40% 100%)",
          scale: 0.5
        });

        gsap.to(textHolderRef.current, {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
        });

        gsap.to(imageMaskRef.current, {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
          delay: 0.5, // Adjust the delay as needed
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#content-holder",
            start: "top top",
            end: "+=300%",
            scrub: 1,
            pin: true,
          },
        });

        tl.to(imageMaskRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          duration: 2,
          ease: "power1.inOut",
            
        });

        tl.to(textHolderRef.current, {
          transform: "translate3d(-50%, 90%, 1200px)",
          duration: 2,
          ease: "power3.inOut",
        }, "0");
    }, [])


  return (
    <div
      id="content-holder"
      className="relative w-full h-screen overflow-hidden bg-black perspective-distant z-10"
    >
      <div ref={imageMaskRef} className="mask-clip invisible">
        <div className="img-holder">
          <img src={Image} alt="" className="w-full h-screen object-cover" />
        </div>
      </div>

      <div
        ref={textHolderRef}
        className="text-holder w-full text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] invisible"
      >
        <div className="text text-white/70 text-[25px] md:text-[70px] uppercase font-Robert font-bold">
          <h1 className="">
            Welcome to my lens <br /> where light, emotion, and creativity come
            to life
          </h1>

          <Button text="Explore My Work" link="#featuredWork" />
        </div>
      </div>
    </div>
  );
}

export default Hero