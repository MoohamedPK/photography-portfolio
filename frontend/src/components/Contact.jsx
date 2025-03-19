import Button from "../common/Button";
import {FaInstagram} from "react-icons/fa"
function Contact() {
  return (
    <div className="w-full h-[120dvh] bg-black text-white grid place-content-center pt-[8vh]">
      <div className="headingText text-center text-[60px] md:text-[130px] font-bold uppercase">
        <h1>
          let us work <br /> together
        </h1>
      </div>

      <Button text="Contact Me" />

      <div className="contact-footer mt-[10vh]">
        <hr />

        <div className="flex flex-col space-y-15 md:space-y-0 md:flex-row md:justify-between items-center pt-8"> 
          <div className="email">
            <a href="">abdouhaml@gmail.com</a>
          </div>

          <div className="social">
            <a target="_blank" href="https://www.instagram.com/_abdou_hml/">
              <FaInstagram size={30}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact