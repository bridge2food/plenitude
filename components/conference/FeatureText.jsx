import React from 'react'
import { motion } from 'framer-motion'
import Markdown from 'react-markdown'
import { attributes } from '../../content/conference.md'
import { withMotionAnimation } from '../../utils/withMotionAnimation'

const FeatureText = () => {
  let { featureText } = attributes
  return (
    <div className="conference-feature">
      <div className="container">
        <Markdown className="conference-feature-text">{featureText}</Markdown>
      </div>
    </div>
  )
}
export default withMotionAnimation(FeatureText)
