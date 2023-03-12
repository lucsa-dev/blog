import Link from 'next/link'
import { motion } from 'framer-motion';


const Logo = () => {
    return (<motion.h3 initial="visible" animate="visible" whileHover={{
        scale: [1, 1.1],
        scaleX: [1, 1.1, 1.1, 1, 1],
        scaleY: [1, 1, 1.1, 1.1, 1],
        rotate: [0, 0, 0, 0],
        transition: {
          duration: .2
        }
      }}>
       <div className='text-3xl text-center font-normal'>
          <Link href="/" >
          <a><span className='text-pink-600'>&lt;</span><span className="font-bold">luc<span className="text-pink-600">S</span>A.dev</span> <span className="text-pink-600">/&gt;</span></a>
        </Link> 
        </div>
        </motion.h3>)
}

export default Logo