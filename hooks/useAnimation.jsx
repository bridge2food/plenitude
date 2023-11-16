import { useEffect } from 'react'
import { useInView, useAnimation as FramerAnimation } from 'framer-motion'

const useAnimation = (ref) => {
  const inInView = useInView(ref, { once: true })
  const controlAnimation = FramerAnimation()

  useEffect(() => {
    if (inInView) {
      controlAnimation.start('visible')
    }
  }, [inInView, controlAnimation])
  return controlAnimation
}

export default useAnimation
