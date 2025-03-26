import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import getImageById from "../store/images/actions/getImageById";
import {useNavigate} from "react-router-dom"

gsap.registerPlugin(ScrollTrigger);

function FeaturedWork({media}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imagePrevRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
      gsap.set(imagePrevRef.current, {opacity: 0,duration:1 , ease: "power2.inOut"});

      const projects = gsap.utils.toArray('.project');

      if (!projects.length || !sectionRef.current) return;

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
          toggleActions: "play none none reverse"
        }
      });
  }, [])
  
  const handleMouseEnter = (e, imageSrc) => {
    
    const projects = gsap.utils.toArray(".project");
    if(!imagePrevRef.current) return;

    if (imagePrevRef.current.src !== imageSrc) {
      imagePrevRef.current.src = imageSrc;
    }

    gsap.set(imagePrevRef.current, {autoAlpha: 0, scale: 0.3})
    gsap.to(imagePrevRef.current, {autoAlpha: 1, scale: 1, duration: 1, ease: "power3.inOut"})
    imagePrevRef.current.src = imageSrc;
    
    const tl = gsap.timeline();

    tl.to(projects, {autoAlpha: 0.3, duration: .4, ease: "power2.inOut"})
    .to(e.currentTarget, {autoAlpha: 1, duration: .4, ease: "power2.inOut"}, "-=0.3")

  }

  const handleMouseLeave = () => {
    const projects = gsap.utils.toArray(".project");
    const tl = gsap.timeline();

    tl.to(projects, {
      autoAlpha:1,
      duration: 0.4,
      ease: "power2.inOut",
    })
    
    gsap.to(imagePrevRef.current, {autoAlpha: 0, duration: 0.4, ease: "power2.inOut"})
  }

  
  const handleImageId = (id) => {
    dispatch(getImageById(id)).then(() => {
      navigate("/project")
    })
  };

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
            src={null}
            alt=""
            className="object-cover size-full brightness-75"
          />
        </div>

        {media.map((item, index) => (
          <div
            onClick={() => handleImageId(item._id)}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={(e) => handleMouseEnter(e, item.thumbnail)}
            className="project z-20 text-center cursor-pointer w-full my-auto py-3 text-xl md:text-3xl uppercase hover:bg-white hover:text-black transition-colors duration-300"
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

export default FeaturedWork