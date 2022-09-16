import { ThemeProvider } from "next-themes";
import { AppProps } from 'next/app'
import '../styles/index.css'
import { motion } from 'framer-motion';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
      }}>
        <Component {...pageProps} />
      </motion.div>
    </ThemeProvider>
  );
}
