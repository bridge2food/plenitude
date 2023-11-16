import React from 'react'
import { attributes } from '../../content/about.md'
import Markdown from 'react-markdown'
import {
  ShapeOne,
  ShapeTwo,
  ShapeFour,
  ShapeSix,
  ShapeEight,
  ShapeNine,
  PrevButton,
  NextButton,
} from '../common/Shapes'
import Slider from 'react-slick'
import { withMotionAnimation } from '../../utils/withMotionAnimation'

const PrevArrow = (props) => {
  const { onClick, className } = props
  return (
    <button onClick={onClick} type="button" className={className}>
      <PrevButton />
      Previous
    </button>
  )
}
const NextArrow = (props) => {
  const { onClick, className } = props
  return (
    <button onClick={onClick} type="button" className={className}>
      <NextButton />
    </button>
  )
}

const Target = () => {
  let { targetTitle, targets } = attributes
  const settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  }
  return (
    <div className="target relative z-10 overflow-hidden">
      <div className="absolute -left-16 bottom-11">
        <ShapeOne />
      </div>
      <div className="absolute -left-16 top-36">
        <ShapeTwo />
      </div>
      <div className="absolute left-[23%] top-20">
        <ShapeFour />
      </div>
      <div className="absolute left-[61%] top-[200px]">
        <ShapeSix />
      </div>
      <div className="absolute -right-1 top-28">
        <ShapeEight />
      </div>
      <div className="absolute -right-12 bottom-12">
        <ShapeNine />
      </div>
      <div className="container relative z-10 mx-auto">
        <div className="target-title mb-[48px]">
          <Markdown className="section-header-title-white">{targetTitle}</Markdown>
        </div>
        <Slider {...settings}>
          {targets.map((item, index) => (
            <Markdown key={index} className="target-content h-full bg-secondary">
              {item.targetItems}
            </Markdown>
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default withMotionAnimation(Target)
