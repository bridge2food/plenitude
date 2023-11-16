import React from 'react'
import Marquee from 'react-fast-marquee'
import { attributes } from '../../content/home.md'
const MarqueText = () => {
  let { marqeeText } = attributes
  return (
    <Marquee className="marqueText" pauseOnHover>
      <h1 className="px-10">{marqeeText}</h1>
    </Marquee>
  )
}

export default MarqueText
