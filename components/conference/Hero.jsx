import React, { useRef } from 'react'
import { attributes } from '../../content/conference.md'
import { motion } from 'framer-motion'
import { Plenitude } from '../common/Shapes'
import { sectionHeaderAnimation } from '../../utils/helper'
import HeroVideo from './HeroVideo'
import Link from 'next/link'

const Hero = () => {
  let { conferenceHero } = attributes
  return (
    <>
      <section className="conference-hero">
        {conferenceHero.map((item, index) => (
          <div className="container" key={index}>
            <div className="conference-hero-container">
              <motion.div {...sectionHeaderAnimation} className="conference-hero-details">
                <div className="max-w-[510px]">
                  <h1 className="mb-8 text-[68px] text-white max-md:text-[48px]">{item.heroTitle}</h1>
                  <p className="mb-8 text-white">{item.heroDescription}</p>
                  <Link href={item.heroBtnLink} className="nav-btn cta-animate group items-center">
                    <span className="flex items-center gap-2.5">
                      Get your ticket now
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.2063 3.90396L1.59976 12.5105L0.185547 11.0963L8.79214 2.48975H1.20637V0.489746H12.2063V11.4897H10.2063V3.90396Z"
                          fill=""
                          className="fill-primary group-hover:fill-white"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </motion.div>
              <div className="conference-hero-video">
                <HeroVideo videoImage={item.heroImage} videoLink={item.heroVideoLink} />
              </div>
            </div>
          </div>
        ))}

        <div className="hero-shape absolute bottom-20 left-1/3">
          <Plenitude />
        </div>
        <div className="hero-shape absolute -left-10 top-1/2 ">
          <Plenitude />
        </div>
        <div className="hero-shape absolute left-[45%] top-[50%] max-lg:hidden">
          <Plenitude />
        </div>
        <div className="hero-shape absolute left-[10%] top-44 ">
          <Plenitude />
        </div>
        <div className="hero-shape absolute left-[43%] top-28 max-lg:hidden">
          <Plenitude />
        </div>
      </section>
    </>
  )
}

export default Hero
