import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import Image from 'next/image'

const HeroVideo = ({ videoImage, videoLink }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const handleVideoError = () => {
    setVideoError(true)
    setIsPlaying(false)
  }
  return (
    <>
      {!isPlaying ? (
        <div className="cta z-10 !pb-0">
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
                  <div
                    className="cta-video-icon lg:!h-[100px] lg:!w-[100px]"
                    onClick={() => !videoError && setIsPlaying(true)}>
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
      ) : (
        <ReactPlayer
          playing
          controls
          url={videoLink}
          className="modal-video-item"
          width="100%"
          height="100%"
          onError={handleVideoError}
        />
      )}
    </>
  )
}

export default withMotionAnimation(HeroVideo)
