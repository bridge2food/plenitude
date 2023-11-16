import React from 'react'
import Markdown from 'react-markdown'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
const AboutMycoprotein = ({ title, contentData, spacing }) => {
  return (
    <section className={`mycoprotein ${spacing}`}>
      <div className="container relative z-10 mx-auto">
        <div className="section-header-title mx-auto mb-12 max-w-[800px] text-center">
          <Markdown>{title}</Markdown>
        </div>
        <div className="mycoprotein-wrapper grid grid-cols-1 gap-8 md:grid-cols-2">
          {contentData.map((item, index) => (
            <Markdown key={index} className="mycoprotein-content border border-gray p-10">
              {item.content}
            </Markdown>
          ))}
        </div>
      </div>
    </section>
  )
}

export default withMotionAnimation(AboutMycoprotein)
