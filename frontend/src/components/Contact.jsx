import Button from "../common/Button";
import {FaInstagram} from "react-icons/fa"
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useForm } from "react-hook-form";
import {ScrollTrigger} from "gsap/all";
import {useDispatch} from "react-redux"
import contactAction from "../store/contact/actions/contactAction";

gsap.registerPlugin(ScrollTrigger);

function Contact() {

  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    dispatch(contactAction(data))
  }; 


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
          <form
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
            className="flex flex-col items-center space-y-7"
          >
            <input
              {...register("name")}
              className="input w-full py-3 px-5 border border-white outline-0"
              type="text"
              placeholder="name"
              required
            />

            <input
              {...register("email")}
              className="input w-full py-3 px-5 border border-white outline-0"
              type="email"
              placeholder="email"
              required
            />

            <textarea
              {...register("subject")}
              className="input w-full py-3 px-5 border border-white outline-0"
              placeholder="subject"
              required
            ></textarea>

            <textarea
              {...register("message")}
              className="input w-full py-3 px-5 border border-white outline-0"
              placeholder="message (optional)"
            ></textarea>

            <label htmlFor="date" className="text-neutral-500 font-semibold">
              Pick your session date
            </label>
            <input
              {...register("sessionDate")}
              className="input w-full py-3 px-5 border border-white outline-0"
              placeholder="session date"
              required
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