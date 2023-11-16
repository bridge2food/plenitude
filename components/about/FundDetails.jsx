import React from 'react'
import { attributes } from '../../content/about.md'
import Markdown from 'react-markdown'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
const FundDetails = () => {
  let { fundDetails } = attributes
  return (
    <div className="fundDetails bg-[#F8F8F8] pb-12 pt-24">
      <div className="container mx-auto">
        <div className="fundDetails-content mx-auto max-w-[925px] text-center  ">
          <Markdown>{fundDetails}</Markdown>
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(FundDetails)
