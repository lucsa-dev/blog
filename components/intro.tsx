import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import Avatar from "./avatar";
import Logo from "./logo";

const Intro = () => {
  return (
    <section className="flex-col bg-pink-700 p-2 md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h4 className="text-center md:text-left text-lg">
        Hello, my name is Lucas dos Santos Almeida 🖖🏻,
        <br /> i am a stranger🧙🏽‍♂️ web developer.
      </h4>
      {/* <a className="float-left text-4xl p-2" href="" target="_blank"><AiFillYoutube /></a> */}
      <a
        className="hover:text-pink-500 transition-colors float-left text-4xl p-2"
        href="https://github.com/lucsa-dev/"
        target="_blank"
      >
        <AiFillGithub className="inline" />
        <span className="text-lg">/lucsa-dev</span>
      </a>
      <a
        className="hover:text-pink-500 transition-colors float-left text-4xl p-2"
        href="https://www.linkedin.com/in/lucassalmeida/"
        target="_blank"
      >
        <AiFillLinkedin className="inline" />
        <span className="text-lg">/lucassalmeida</span>
      </a>
    </section>
  );
};

export default Intro;
