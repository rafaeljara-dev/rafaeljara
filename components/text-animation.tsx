import { motion } from 'framer-motion'
import React from 'react'

export const TextAnimation = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: '-100%',
    },
    visible: {
      opacity: 1,
      x: -1.5,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.65,
      },
    },
  }

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="mb-4 pt-10 hidden md:flex"
      >
        <motion.span>Materializo su visión<br />en un sitio web profesional.</motion.span>
      </motion.div>

      {/* Mobile Version*/}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="mb-4 pt-10 lg:hidden md:hidden flex"
      >
        <motion.span>Materializo su visión en un sitio web profesional.</motion.span>
      </motion.div>
    </>

  )
}

export default TextAnimation;