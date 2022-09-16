import { AiFillYoutube } from "react-icons/ai";
import { motion } from 'framer-motion';
import Avatar from "./avatar";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        },      
      }}>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Lucas Almeida
        </h1>
      </motion.div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Hello, my name is Lucas Almeida 👋,<br /> i am a web developer.
        
      <a href="" target="_blank"><AiFillYoutube /></a>

      </h4>
    </section>
  )
}

export default Intro
