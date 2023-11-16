import React from 'react'
import Layout from '../components/layout/Layout'
import { sectionHeaderAnimation } from '../utils/helper'
import { motion } from 'framer-motion'
import { ShapeTwo, ShapeFour, ShapeFive, ShapeSeven, ShapeEight } from '../components/common/Shapes'
import Link from 'next/link'
import Image from 'next/image'

const Custom404 = () => {
  return (
    <Layout>
      <section className={`pageHero z-10 text-center`}>
        <div className="container mx-auto max-w-[985px]">
          <motion.div {...sectionHeaderAnimation} className="hero-content">
            <h1>
              404 <br /> Page Not Found
            </h1>
            <Link href="/" className="btn btn-primary mt-3">
              Back to Home
            </Link>
          </motion.div>
        </div>
        <Image
          src="/img/pageHero.svg"
          width="0"
          height="0"
          sizes="100vw"
          className=" absolute bottom-0 -z-10 h-auto w-full"
          alt="hero_shape"
        />
        <div className="hero-shape absolute -left-10 bottom-24">
          <ShapeTwo />
        </div>

        <div className="hero-shape absolute left-[30%] top-28">
          <ShapeFour />
        </div>
        <div className="hero-shape absolute left-[43%] top-28 max-lg:hidden">
          <ShapeFive />
        </div>
        <div className="hero-shape absolute -right-[50px] bottom-[100px] lg:right-[200px]">
          <ShapeSeven />
        </div>
        <div className="hero-shape absolute -right-10 top-32">
          <ShapeEight />
        </div>
      </section>
    </Layout>
  )
}

export default Custom404
