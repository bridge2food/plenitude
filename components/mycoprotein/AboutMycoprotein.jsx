import React from 'react'
import Markdown from 'react-markdown'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import rehypeRaw from 'rehype-raw'
const AboutMycoprotein = ({ title, contentData, spacing }) => {
  return (
    <section className={`mycoprotein ${spacing}`}>
      <div className="container relative z-10 mx-auto">
        <div className="section-header-title mx-auto mb-12 max-w-[800px] text-center">
          <Markdown rehypePlugins={[rehypeRaw]}>{title}</Markdown>
        </div>
        <div className="mycoprotein-wrapper grid grid-cols-1 gap-8 md:grid-cols-2">
          {contentData.map((item, index) => (
            <Markdown key={index} className="mycoprotein-content border border-gray p-10" rehypePlugins={[rehypeRaw]}>
              {item.content}
            </Markdown>
          ))}
        </div>
      </div>
    </section>
  )
}

export default withMotionAnimation(AboutMycoprotein)
