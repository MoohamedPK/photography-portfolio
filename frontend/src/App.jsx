import Card from "./Card"
import {motion, useTransform, useScroll, easeOut} from "motion/react"
import { useRef } from "react";

function App() {

    const max = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    const targetRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target:targetRef,
    })

    const x = useTransform(scrollYProgress, [0,1], ["3%", "-80%"])

  return (
    <>
      <section className="h-screen bg-neutral-800 grid place-content-center text-3xl text-white">
        <HeaderText>Hello It's Me MOHAMED</HeaderText>
      </section>

      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            
          style={{ x }} className="flex gap-8">
            {max.map((card, index) => {
              return <Card key={card} content={index}/>;
            })}
          </motion.div>
        </div>
      </section>

      <section className="h-screen bg-neutral-800 grid place-content-center text-3xl text-white overflow-hidden">
        <motion.div
        initial={{width: 0, height: 0}}
        whileInView={{width: "100vh", height:"100vh"}}
        transition={[{ease: easeOut}, {duration: 1}]}

        
        className=" bg-neutral-900 grid place-content-center rounded-full">
            <div className="">Scroll Up</div>
        </motion.div>
      </section>
    </>
  );
}

const HeaderText = ({children}) => {

  const container = {
    hidden: {
      opacity:0,
      
    },

    show: {opacity: 1,
      transition: {
        staggerChildren: 0.08
      },

    }
  }

  const item = {
    hidden : {opacity: 0, y:-20, scale:2},
    show : {opacity: 1, y: 0, scale: 1}
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children.split("").map((letter, i) => {
        return (
          
          
          <motion.span
            className="inline-block"
            variants={item}
            key={i}
          >
            {letter }
          </motion.span>
        );
      })}
    </motion.div>
  )
}

export default App