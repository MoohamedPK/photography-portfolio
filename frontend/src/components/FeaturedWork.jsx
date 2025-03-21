import TestImg from "../assets/images/mee.jpg.JPG";
import TestImg2 from "../assets/images/DSC07180.JPG";
import TestImg3 from "../assets/images/DSC07334.JPG";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import { useEffect, useRef } from "react";

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
      gsap.set(imagePrevRef.current, {opacity: 0,duration:1 , ease: "power2.inOut"});

      const projects = gsap.utils.toArray('.project');

      gsap.set(projects, {opacity: 0, y: 20})

      gsap.to(projects, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
  }, [])

  const handleMouseEnter = (e, imageSrc) => {

    if(!imagePrevRef.current) return;

    imagePrevRef.current.src = imageSrc;

    const tl = gsap.timeline({});


    tl.to(imagePrevRef.current, {opacity: 1}, 0)
    .to('.project', {opacity: 0.3,}, 0)
    .to(e.currentTarget, {opacity: 1,}, 0)
  }

  const handleMouseLeave = () => {

    const tl = gsap.timeline();

    tl.to(imagePrevRef.current, {
      opacity: 0,
    }, 0)

    .to('.project', {opacity: 1,}, 0)
  }

  return (
    <section
      id="featuredWork"
      ref={sectionRef}
      className="relative w-full h-[110dvh] md:h-[134dvh] bg-black overflow-hidden"
    >
      <div className="text-xl md:text-3xl text-center uppercase font-bold py-[100px] text-white">
        <h1>selected works</h1>
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
}
// mt-[10vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
export default FeaturedWork