import TestImg from "../assets/images/mee.jpg.JPG";
import TestImg2 from "../assets/images/DSC07180.JPG";
import TestImg3 from "../assets/images/DSC07334.JPG";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);


const items = [
  { title: "Dreams in Focus", image: TestImg, place: "new york", year: 2025 },
  { title: "Visual Poetry", image: TestImg2, place: "beni mellal", year: 2023 },
  { title: "Surreal Perspectives", image: TestImg3, place: "casablanca", year: 2024 },
  { title: "The Hustle & Flow", image: TestImg, place: "texas", year: 2022 },
  { title: "Neon Nights", image: TestImg3, place: "las veags", year: 2024 },
  { title: "Concrete Jungle", image: TestImg2, place: "rabat", year: 2021 },
  { title: "Lost in Nature", image: TestImg2, place: "rabat", year: 2021 },
  { title: "Cityscapes & Skylines", image: TestImg2, place: "rabat", year: 2021 },
  { title: "Frozen in Time", image: TestImg3, place: "rabat", year: 2021 },
  { title: "Shadows & Light", image: TestImg, place: "rabat", year: 2021 },
];

function FeaturedWork() {

  const imagePrevRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imagePrevRef.current, {opacity: 0, duration:0.3, ease: "power2.inOut"});

      const projects = gsap.utils.toArray('.project');

      gsap.set(projects, {opacity: 0, y: 20})

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "-=200px",
          scrub:2,
        }
      })

      tl.to(projects, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.inOut",
        stagger: 0.1,
      });
    })
    return () => ctx.revert(); // clean up the animation
  }, [])

  const handleMouseEnter = (e, imageSrc) => {

    if(!imagePrevRef.current) return;

    imagePrevRef.current.src = imageSrc;

    gsap.to(imagePrevRef.current, {opacity: 1});
    gsap.to('.project', {opacity: 0.3, duration: .2, ease: "power1.inOut"})
    gsap.to(e.currentTarget, {opacity: 1, duration: .2, ease: "power1.inOut"})
  }

  const handleMouseLeave = () => {

    gsap.to(imagePrevRef.current, {
      opacity: 0,
    });

    gsap.to('.project', {opacity: 1, duration: .2, ease: "power1.inOut"})
  }

  // JUST FOR TESTING 
  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[134dvh] bg-black overflow-hidden"
    >
      <div className="text-xl md:text-3xl text-center uppercase font-bold py-[100px] text-white">
        <h1>selected work</h1>
      </div>

      <div className="projects relative text-white md:size-2/3 mx-auto flex flex-col items-center">
        <div className="image-preview absolute top-0 left-0 size-full">
          <img
            ref={imagePrevRef}
            src={TestImg}
            alt=""
            className="object-cover size-full brightness-75"
          />
        </div>

        {items.map((item, index) => (
          <div
            onMouseLeave={handleMouseLeave}
            onMouseEnter={(e) => handleMouseEnter(e, item.image)}
            className="project z-20 text-center cursor-pointer hover:bg-white hover:text-black w-full my-auto py-3 text-xl md:text-3xl uppercase transition-all duration-300"
            key={index}
          >
            <div className="project-title">
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );



  // const container = useRef(null);
  // const section = useRef(null);

  // useEffect(() => {

  //   if (!container.current || !section.current) return;

  //   const sections = gsap.utils.toArray(".featured-item");

  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1), // moves to the left based on the sections length
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container.current,
  //       start: "top top",
  //       end: `+=${section.current.scrollWidth}`,
  //       scrub: true,
  //       pin: true,
  //       pinSpacing: true,
  //     },
  //   });

  // }, [])

  // return (
  //   <div ref={container} className="h-[280vh] overflow-hidden">
  //     <h1 className="text-2xl md:text-4xl font-bold uppercase pt-[10vh] pb-[20vh] text-center">
  //       Featured Work
  //     </h1>

  //     <div ref={section} className="featured-grid flex w-[400vw] h-screen">
  //       <div className="featured-item w-[50vw] h-screen bg-pink-300">
  //         <img
  //           className="w-[300px] h-[400px] object-cover"
  //           src={TestImg}
  //           alt=""
  //         />
  //       </div>

  //       <div className="featured-item w-[50vw] h-screen bg-pink-300">
  //         <img
  //           className="w-[300px] h-[400px] object-cover"
  //           src={TestImg}
  //           alt=""
  //         />
  //       </div>

  //       <div className="featured-item w-[50vw] h-screen bg-pink-300">
  //         <img
  //           className="w-[300px] h-[400px] object-cover"
  //           src={TestImg}
  //           alt=""
  //         />
  //       </div>

  //       <div className="featured-item w-[50vw] h-screen bg-pink-300">
  //         <img
  //           className="w-[300px] h-[400px] object-cover"
  //           src={TestImg}
  //           alt=""
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
}
// mt-[10vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
export default FeaturedWork