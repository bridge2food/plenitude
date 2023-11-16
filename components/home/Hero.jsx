import React, { useRef } from 'react'
import { attributes } from '../../content/home.md'
import Image from 'next/image'
import Markdown from 'react-markdown'
import { motion } from 'framer-motion'
import {
  ShapeOne,
  ShapeTwo,
  ShapeThree,
  ShapeFour,
  ShapeFive,
  ShapeSix,
  ShapeSeven,
  ShapeEight,
  ShapeNine,
} from '../common/Shapes'
import useAnimation from '../../hooks/useAnimation'
import { sectionHeaderAnimation } from '../../utils/helper'

const Hero = () => {
  let { heroItems, heroImage, heroFund } = attributes
  const ref = useRef(null)
  const animation = useAnimation(ref)

  return (
    <>
      <section className="hero z-10 min-h-screen text-center">
        <div className="container mx-auto max-w-[985px]">
          <motion.div {...sectionHeaderAnimation} className="hero-content">
            <Markdown>{heroItems}</Markdown>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -25 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: 0.5 }}
            className="hero-content-image ">
            <Image
              loading="eager"
              src={heroImage}
              width="0"
              height="0"
              sizes="100vw"
              className=" h-auto w-full "
              alt="hero-image"
            />
          </motion.div>
        </div>

        <svg
          className="absolute -bottom-[1px] -z-10 h-auto w-full"
          viewBox="0 0 1440 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0 169H1440C1440 169 1112 0 720 0C328 0 0 169 0 169Z" fill="white" />
        </svg>

        <div className="hero-shape absolute -left-10 bottom-20">
          <ShapeOne />
        </div>
        <div className="hero-shape absolute -left-10 top-48 ">
          <ShapeTwo />
        </div>
        <div className="hero-shape absolute left-[22%] top-[50%] max-lg:hidden">
          <ShapeThree />
        </div>
        <div className="hero-shape absolute left-[30%] top-28 ">
          <ShapeFour />
        </div>
        <div className="hero-shape absolute left-[43%] top-28 max-lg:hidden">
          <ShapeFive />
        </div>
        <div className="hero-shape absolute left-[60%] top-[43%] max-lg:hidden">
          <ShapeSix />
        </div>
        <div className="hero-shape absolute right-[175px] top-96 ">
          <ShapeSeven />
        </div>
        <div className="hero-shape absolute -right-20 top-36">
          <ShapeEight />
        </div>
        <div className="hero-shape absolute -right-10 bottom-40">
          <ShapeNine />
        </div>
      </section>
      <div className="container mx-auto text-center">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, delay: 0.3 }}
          initial="hidden"
          animate={animation}
          className="hero-funded mx-auto max-w-[479px]">
          <h3>Funded By</h3>
          <Image src={heroFund} width="0" height="0" sizes="100vw" className="h-auto w-full" alt="hero-image" />
        </motion.div>
      </div>
    </>
  )
}

export default Hero
