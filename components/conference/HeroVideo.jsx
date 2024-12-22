import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { withMotionAnimation } from '../../utils/withMotionAnimation'

const HeroVideo = ({ videoLink }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      {!isClient && <div>Loading...</div>}
      {isClient && (
        <ReactPlayer playing loop url={videoLink} className="react-player vp-center" width="100%" height="100%" />
      )}
    </>
  )
}

export default withMotionAnimation(HeroVideo)
