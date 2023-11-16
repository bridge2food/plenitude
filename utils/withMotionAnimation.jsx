import { motion } from 'framer-motion'
import { useRef } from 'react'
import useAnimation from '../hooks/useAnimation'

export const withMotionAnimation = (WrappedComponent) => {
  return function WithMotionAnimation(props) {
    const animationVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }

    const animationTransition = {
      duration: 0.3,
      delay: 0.5,
    }
    const ref = useRef(null)
    const animate = useAnimation(ref)

    return (
      <motion.section
        variants={animationVariants}
        transition={animationTransition}
        initial="hidden"
        animate={animate}
        ref={ref}>
        <WrappedComponent {...props} />
      </motion.section>
    )
  }
}
