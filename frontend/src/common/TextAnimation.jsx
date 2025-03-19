// import { useRef } from "react";
// import {useGSAP} from "@gsap/react"
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import SplitType from "split-type"

// gsap.registerPlugin(ScrollTrigger);

// function TextAnimation({ targetClass, animationTarget }) {
//   const myText = new SplitType(targetClass);

//   useGSAP(() => {
//     if (!targetClass) return;

//     gsap.to(myText.lines, {
//       opacity: 1,
//       stagger: 0.05,
//       delay: 0.2,
//       duration: 0.2,
//       scrollTrigger: {
//         trigger: animationTarget,
//         start: "top top",
//         end: "bottom 20%",
//       },
//     });
//   });

//   return;
// }

// export default TextAnimation;
