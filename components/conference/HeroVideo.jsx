import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { withMotionAnimation } from '../../utils/withMotionAnimation'

const HeroVideo = ({ videoImage, videoLink }) => {
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
    <div className="cta z-10 !pb-0">
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
                <ReactPlayer controls url={videoLink} className="modal-video-item" width="100%" height="100%" />
              </div>
            </motion.div>
          </div>
        </motion.section>
      ) : null}
      <div className="cta-wrapper">
        <div className="cta-video relative !w-full">
          <Image
            src={videoImage}
            width="0"
            height="0"
            sizes="100vw"
            className=" aspect-square h-auto max-h-[720px] w-full"
            alt="hero Image"
          />
          {videoLink && (
            <div className="cta-video-link">
              <div className="cta-video-icon lg:!h-[100px] lg:!w-[100px]" onClick={openModal}>
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
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(HeroVideo)
