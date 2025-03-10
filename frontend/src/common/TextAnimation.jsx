import gsap from "gsap";
import { useEffect, useRef } from "react";

function TextAnimation({ text }) {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".text-line", {
      opacity: 1,
      transform: "translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg)",
      duration: 1,
      stagger: 0.4,
    });
  }, []);

  return (
    <div
      ref={textRef}
      className="absolute top-[50%] left-[50%] translate-x-[-45%] translate-y-[-50%] text-[90px] font-bold font-Robert uppercase w-full leading-[1.5] text-white/70 mix-blend-difference"
    >
      {text.split("<br />").map((line, i) => (
        <div className="text-line" key={i}>
          {line.split("  ").map((word, index) => (
            <span
              className="word"
              key={index}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default TextAnimation