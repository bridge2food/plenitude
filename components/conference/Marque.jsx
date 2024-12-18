import React from 'react'
import Marquee from 'react-fast-marquee'
import { attributes } from '../../content/conference.md'
const MarqueText = () => {
  let { marqeeText } = attributes
  return (
    <Marquee className="bg-secondary py-5" pauseOnHover>
      <p className="px-2.5 text-xl font-semibold text-white">{marqeeText}</p>
      <p className="px-2.5 text-xl font-semibold text-white">{marqeeText}</p>
      <p className="px-2.5 text-xl font-semibold text-white">{marqeeText}</p>
      <p className="px-2.5 text-xl font-semibold text-white">{marqeeText}</p>
      <p className="px-2.5 text-xl font-semibold text-white">{marqeeText}</p>
      <p className="px-2.5 text-xl font-semibold text-white">{marqeeText}</p>
    </Marquee>
  )
}

export default MarqueText
