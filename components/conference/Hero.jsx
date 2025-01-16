import { attributes } from '../../content/conference.md'
import { motion } from 'framer-motion'
import { Plenitude } from '../common/Shapes'
import { sectionHeaderAnimation } from '../../utils/helper'
import Markdown from 'react-markdown'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'
const Hero = () => {
  const { heroTitle, heroDescription, heroBtnLink, heroVideoLink, heroImage } = attributes
  const [isClient, setIsClient] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Set playing to true after component mounts
    setIsPlaying(true)
  }, [])

  const handleReady = () => {
    // Ensure video plays when player is ready
    setIsPlaying(true)
  }
  return (
    <>
      <section className="conference-hero">
        <div className="container">
          <div className="conference-hero-container">
            <motion.div {...sectionHeaderAnimation} className="conference-hero-details relative z-10">
              <div className="max-w-[510px]">
                <h1 className="mb-8 text-[68px] uppercase text-white max-md:text-[48px]">{heroTitle}</h1>
                <Markdown className="conference-hero-description mb-8">{heroDescription}</Markdown>
                <Link href={heroBtnLink} className="nav-btn cta-animate group items-center">
                  <span className="flex items-center gap-2.5">
                    Apply to Attend Now
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
            {heroVideoLink && (
              <motion.div {...sectionHeaderAnimation} className="conference-hero-video">
                {!isClient && <div>Loading...</div>}
                {isClient && (
                  <ReactPlayer
                    playing={isPlaying}
                    loop
                    controls
                    url={heroVideoLink}
                    className="react-player"
                    width="100%"
                    height="100%"
                    onReady={handleReady}
                    muted={true}
                    playsinline
                  />
                )}
              </motion.div>
            )}
            {heroImage && (
              <motion.div {...sectionHeaderAnimation} className="cta-wrapper">
                <div className="cta-video relative !w-full">
                  <Image
                    src={heroImage}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className=" aspect-square h-auto max-h-[720px] w-full"
                    alt="Conference Hero Image"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="hero-shape absolute bottom-20 left-1/3">
          <Plenitude />
        </div>
        <div className="hero-shape absolute -left-10 top-1/2 ">
          <Plenitude />
        </div>
        <div className="hero-shape absolute left-[45%] top-[50%] max-lg:hidden">
          <Plenitude />
        </div>
        <div className="hero-shape absolute left-[10%] top-28 ">
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
