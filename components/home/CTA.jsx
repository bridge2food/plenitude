import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { attributes } from '../../content/home.md'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import { ShapeFour, ShapeSix, ShapeText, ShapeTwo } from '../common/Shapes'

const CTA = () => {
  let { ctaTitle, ctaImage, ctaVideoLink, ctaBtnLink } = attributes
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(!modal)
  }

  useEffect(() => {
    if (modal) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [modal])

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animationTransition = {
    duration: 0.3,
    delay: 0.2,
  }

  return (
    <div className="cta">
      {modal ? (
        <motion.section
          variants={animationVariants}
          transition={animationTransition}
          initial="hidden"
          animate="visible"
          className="modal-bg">
          <div className="modal-align">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="modal-content"
              modal={modal.toString()}>
              <span className=" modal-close" onClick={openModal}>
                <X size={20} weight="bold" />
              </span>
              <div className="modal-video-align">
                <ReactPlayer controls url={ctaVideoLink} className="modal-video-item" width="100%" height="100%" />
              </div>
            </motion.div>
          </div>
        </motion.section>
      ) : null}
      <div className="cta-wrapper flex flex-col lg:flex-row">
        <div className="cta-video relative shrink-0">
          <Image src={ctaImage} width="0" height="0" sizes="100vw" className=" h-auto w-full" alt="CTA Image" />
          <div className="cta-video-link">
            <div className="cta-video-icon " onClick={openModal}>
              <svg
                className="ml-1 stroke-secondary stroke-2 "
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75 2.40673L17.5 11.5L1.75 20.5933L1.75 2.40673Z" stroke="" strokeWidth="" />
              </svg>
            </div>
            <p className="text-white">WATCH THE FILM</p>
          </div>
        </div>
        <div className="cta-content">
          <h2 className="mb-7 max-w-[600px] uppercase text-white">{ctaTitle}</h2>
          <Link href={ctaBtnLink} className="cta-btn cta-animate">
            Get In Touch
          </Link>
          <div className="absolute left-[10px] top-28 -z-10">
            <ShapeTwo />
          </div>
          <div className="absolute right-[180px] top-9 -z-10">
            <ShapeFour />
          </div>
          <div className="absolute bottom-5 left-[50%] -z-10">
            <ShapeSix />
          </div>
          <div className="absolute -right-[108px] bottom-0 -z-10 opacity-60">
            <ShapeText />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(CTA)
