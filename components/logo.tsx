import Link from 'next/link'
import { motion } from 'framer-motion';


const Logo = () => {
    return (
       <div className='text-2xl font-normal'>
          <Link href="/" >
          <a><span className='text-pink-600'>&lt;</span><span className="font-bold">luc<span className="text-pink-600">S</span>A.dev</span> <span className="text-pink-600">/&gt;</span></a>
        </Link> 
        </div>
        )
}

export default Logo