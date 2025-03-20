import Button from "../common/Button";
import {FaInstagram} from "react-icons/fa"
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Contact() {

  const formRef = useRef(null)
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleFormVisibility = () => {
    setIsFormVisible(true)
  }

  useEffect(() => {

    if(!formRef.current) return;

    const inputs = gsap.utils.toArray(".input")

    gsap.set(inputs, {
      autoAlpha: 0,
      y: 20,
    })

    if (isFormVisible && formRef.current) {
        gsap.to(inputs, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.06,
          delay: .4,
      })
    }

  }, [isFormVisible])

  return (
    <div
      id="contact"
      className="w-full h-[230dvh] bg-black text-white grid place-content-center pt-[8vh]"
    >
      <div className="headingText text-center text-[60px] md:text-[130px] font-bold uppercase">
        <h1>
          let us work <br /> together
        </h1>
      </div>

      <div className="mx-auto" onClick={handleFormVisibility}>
        <Button text="Contact Me" />
      </div>

      {isFormVisible && (
        <div className="contactForm w-1/2 mx-auto mt-[15vh]">
          <form ref={formRef} className="flex flex-col items-center space-y-7">
            <input
              className="input w-full py-3 px-5"
              type="text"
              placeholder="name"
            />

            <input
              className="input w-full py-3 px-5"
              type="email"
              placeholder="email"
            />

            <textarea
              className="input w-full py-3 px-5"
              placeholder="subject"
            ></textarea>

            <textarea
              className="input w-full py-3 px-5"
              placeholder="message (optional)"
            ></textarea>

            <label htmlFor="date" className="text-neutral-500 font-semibold">
              Pick your session date
            </label>
            <input
              className="input w-full py-3 px-5"
              placeholder="session date"
              type="date"
              id="date"
            />

            <Button text="Book now" type="submit" />
          </form>
        </div>
      )}

      <div className="contact-footer mt-[10vh]">
        <hr />

        <div className="flex flex-col space-y-15 md:space-y-0 md:flex-row md:justify-between items-center pt-8">
          <div className="email">
            <a href="">abdouhaml@gmail.com</a>
          </div>

          <div className="social">
            <a target="_blank" href="https://www.instagram.com/_abdou_hml/">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact