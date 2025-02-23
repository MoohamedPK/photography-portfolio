import {useScroll, useTransform, motion} from "motion/react"

function Section() {

    const {scrollYProgress} = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.section style={{y}} className="h-screen sticky top-0">
        <img  className="h-full w-full object-contain" src="http://res.cloudinary.com/doisj6e2s/image/upload/v1740138277/test/x3kngw4xtqwtifcbnyih.jpg" alt="" />
    </motion.section>
  ) 
}

export default Section