import {motion} from "motion/react"


function Card({content}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale:0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      className="md:w-[300px] w-[600px] h-screen bg-red-400 rounded-xl grid place-content-center text-xl text-white font-semibold"
    >
      <h1>{content + 1}</h1>
    </motion.div>
  );
}

export default Card