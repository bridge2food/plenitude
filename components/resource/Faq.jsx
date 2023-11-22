import React from 'react'
import { attributes } from '../../content/resource.md'
import Markdown from 'react-markdown'
import { useState } from 'react'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import rehypeRaw from 'rehype-raw'
const Faq = () => {
  let { faqTitle, faq } = attributes
  const [activeIndex, setActiveIndex] = useState(null)

  const handleToggle = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <div className="faq py-24">
      <div className="container mx-auto">
        <div className="faq-title section-header-title mb-6 text-center">
          <Markdown rehypePlugins={[rehypeRaw]}>{faqTitle}</Markdown>
        </div>
        <div className="faq-content">
          {faq.map((items, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''} `}>
              <div className="faq-question select-none" onClick={() => handleToggle(index)}>
                <h3>{items.faqQustion}</h3>
                {activeIndex === index ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 18V6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                <p>{items.faqAnswer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(Faq)
