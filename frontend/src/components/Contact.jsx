import Button from "../common/Button";
import {FaInstagram} from "react-icons/fa"
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useForm } from "react-hook-form";
import {ScrollTrigger} from "gsap/all";
import {useDispatch, useSelector} from "react-redux"
import contactAction from "../store/contact/actions/contactAction";
import EmailRes from "./EmailRes";

gsap.registerPlugin(ScrollTrigger);

function Contact() {

  const dispatch = useDispatch();
  const {message} = useSelector(state => state.contact);
  const {register, handleSubmit} = useForm()
  const [emailResVisibility, setEmailResVisibility] = useState(false); 


  const onSubmit = (data) => {
    dispatch(contactAction(data)).then((data) => {
      if (data.payload.success) {
        setEmailResVisibility(true);
      }
    })
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
      className={
        isFormVisible
          ? `relative w-full md:h-[200dvh] h-[180dvh] bg-black text-white grid place-content-center`
          : "relative w-full md:h-[100dvh] h-[100dvh] bg-black text-white grid place-content-center"
      }
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
        <div className="contactForm md:w-1/2 w-full mx-auto mt-15">
          <form
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
            className="flex flex-col items-center space-y-7 "
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

      <div className="contact-footer mt-[100px]">
        <hr />

        <div className="flex justify-between items-center mx-5 md:space-y-0 pt-8">
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

      {emailResVisibility && (
        <EmailRes
          setEmailResVisibility={setEmailResVisibility}
          message={message}
        />
      )}
    </div>
  );
}

export default Contact