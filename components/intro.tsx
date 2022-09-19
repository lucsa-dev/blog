import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
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
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
          Lucas Almeida
        </h1>
        <h4>lucsa.dev@gmail.com</h4>
      </motion.div>
      <div>
        <div className="mt-5 md:pl-8">
          <h4 className="text-center md:text-left text-lg">
            Hello, my name is Lucas Almeida 👋,<br /> i am a web developer.
          </h4>
          {/* <a className="float-left text-4xl p-2" href="" target="_blank"><AiFillYoutube /></a> */}
          <a className="float-left text-4xl p-2" href="https://github.com/Lucasalmeida-ux/" target="_blank"><AiFillGithub /></a>
          <a className="float-left text-4xl p-2" href="https://www.linkedin.com/in/lucassalmeida/" target="_blank"><AiFillLinkedin /></a>
          {/* <a className="float-left text-4xl p-2" href="" target="_blank"><AiFillTwitterCircle /></a> */}
        </div>
      </div>
    </section>
  )
}

export default Intro
