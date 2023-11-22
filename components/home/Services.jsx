import React from 'react'
import { attributes } from '../../content/home.md'
import Markdown from 'react-markdown'
import { ShapeOne, ShapeTwo, ShapeFour, ShapeSix, ShapeEight, ShapeNine } from '../common/Shapes'
import { withMotionAnimation } from '../../utils/withMotionAnimation'
import rehypeRaw from 'rehype-raw'
const Services = () => {
  let { serviceTitle, services } = attributes
  return (
    <div className="services relative z-10 overflow-hidden">
      <div className=" absolute -left-16 bottom-11">
        <ShapeOne />
      </div>
      <div className=" absolute -left-16 top-36">
        <ShapeTwo />
      </div>
      <div className=" absolute left-[23%] top-20">
        <ShapeFour />
      </div>
      <div className=" absolute left-[61%] top-[200px]">
        <ShapeSix />
      </div>
      <div className=" absolute -right-1 top-28">
        <ShapeEight />
      </div>
      <div className=" absolute -right-12 bottom-12">
        <ShapeNine />
      </div>
      <div className="container relative z-10 mx-auto">
        <div className="services-title mb-[60px] text-center">
          <Markdown className="section-header-title-white" rehypePlugins={[rehypeRaw]}>
            {serviceTitle}
          </Markdown>
        </div>
        <div className="services-wrapper">
          {services.map((item, index) => (
            <Markdown key={index} className="services-content bg-primary" rehypePlugins={[rehypeRaw]}>
              {item.serviceItems}
            </Markdown>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withMotionAnimation(Services)
