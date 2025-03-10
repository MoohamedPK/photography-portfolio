import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

gsap.registerPlugin(ScrollTrigger);

function NavBar() {
  const linkHolderRefs = useRef([]);
  const navLinks = ["home", "about", "works", "contact"];
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        linkHolderRefs.current,
        { opacity: 0, y: 20 }, // Start state
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1, // Delay between each item
        }
      );
    }
  }, [isOpen]); // Run when `isOpen` changes

  return (
    <div className="w-full h-[80px] fixed px-6 z-80 text-white">
      <header className="w-full h-full flex justify-between items-center">
        <div className="logo ">
          <h1 className="text-4xl">HML</h1>
        </div>

        <ul className="nav-links uppercase  items-center space-x-8 md:flex hidden">
          {navLinks.map((link, index) => (
            <div className="linkHolder relative" key={index}>
              <li className="px-3 py-1 hover:bg-white/80 hover:text-black transition-all duration-300">
                <a href={link}>{link}</a>
              </li>
            </div>
          ))}
        </ul>

        <div className="mobileNav md:hidden relative">
          <div className="menuIcon">
            {!isOpen ? <CiMenuBurger onClick={toggleNav} size={25} /> : ""}
          </div>

          {isOpen && (
            <div className="overlay fixed left-0 top-0 z-90 w-screen h-screen bg-black px-6 py-5 flex justify-between">
              <ul className="flex flex-col flex-1 items-center mt-[10vh] space-y-6 ">
                {navLinks.map((link, index) => (
                  <div
                    ref={(el) => (linkHolderRefs.current[index] = el)}
                    className="linkHolder text-white relative bg-pink- w-full text-center uppercase"
                    key={index}
                  >
                    <li className="px-3 py-1 hover:bg-white/80 hover:text-black transition-all duration-300">
                      <a href={link}>{link}</a>
                    </li>
                  </div>
                ))}
              </ul>

              {isOpen && <TfiClose onClick={toggleNav} size={25} />}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

//px-3 py-1 hover:bg-white/80 hover:text-black transition-all duration-300

export default NavBar