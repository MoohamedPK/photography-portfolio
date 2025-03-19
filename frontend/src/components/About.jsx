import { useRef } from "react";
import { useSelector } from "react-redux";
import AboutImage from "../assets/images/about pic.jpg"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

function About() {

  const {media} = useSelector((state) => state.images);
  const galleryRef = useRef(null);
  const aboutImgRef = useRef(null);
  const aboutHeaderImgRef = useRef(null);
  const aboutHeaderTextRef = useRef(null);
  const aboutTextRef = useRef(null);


  useGSAP(() => {

    if (!aboutHeaderImgRef.current || !aboutHeaderTextRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutHeader",
        start: "top 80%",
        end: "bottom center",
        scrub: 2,
      },
    });

    tl.to([aboutHeaderImgRef.current, aboutHeaderTextRef.current], {
      rotateX: 0,
      duration: 2,
      ease: "power2.inOut",
    })
    
  })

  useGSAP(() => {
    if (!galleryRef.current) return;

    const imageMasks = gsap.utils.toArray(".about-image-mask");

    if (imageMasks.length === 0) return;

    gsap.set(imageMasks, {
      clipPath: "polygon(0 0, 0 0, 0 0, 0 0)",
      x: -300,
      webkitClipPath: "polygon(0 0, 0 0, 0 0, 0 0)", // Better compatibility
    });

    imageMasks.forEach((mask) => {
      gsap.to(mask, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 5,
        x: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mask,
          start: "top 80%",
          end: "top 50%",
          scrub: 2,
        },
      });
    });
  });

  return (
    <div className="w-full h-[450dvh] md:h-[350dvh] relative pt-[20vh] text-white bg-black">
      <div className="aboutContainer">
        <div className="aboutHeader relative flex flex-col items-center perspective-distant">
          <div
            ref={aboutHeaderImgRef}
            className="image relative w-[250px] h-[400px] md:w-[350px] md:h-[500px] rotate-x-[40deg] "
          >
            <img
              ref={aboutImgRef}
              src={AboutImage}
              alt=""
              className="aboutImage -skew-3 size-full object-cover "
            />
          </div>

          <div
            ref={aboutHeaderTextRef}
            className="aboutHeaderText mix-blend-difference rotate-x-[40deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-8xl uppercase font-bold z-20 w-full text-center"
          >
            <h1 className="">About Abdou</h1>
          </div>
        </div>

        <div
          ref={aboutTextRef}
          className="aboutText px-2 md:px-0 mt-[20vh] text-center flex justify-center text-2xl leading-9 font-Wagon"
        >
          <p
            className="aboutParagraph max-w-[400px]"
          
          >
            This is me Abdo, a passionate photographer, filmmaker, and video
            editor with a keen eye for storytelling. I bring over 6 years of
            experience in the world of photography and branded content. Whether
            capturing stunning shots or crafting cinematic edits, I turn moments
            into visual masterpieces.
          </p>
        </div>

        <div ref={galleryRef} className="abdouGallery mt-[20vh]">
          <div className="gallery-container">
            <div className="gallery grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-20">
              {media
                .filter((image) => {
                  return image.category === "about";
                })
                .map((img, index) => (
                  <div
                    key={index}
                    className="about-image-mask w-[300px] h-[400px]"
                  >
                    <img
                      src={img.url}
                      alt="about image"
                      className="galleryImage size-full object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About