import React from 'react'
import Marquee from 'react-fast-marquee'
import { attributes } from '../../content/conference.md'
const MarqueText = () => {
  let { marqeeText } = attributes
  return (
    <Marquee className="bg-secondary py-5" pauseOnHover>
      <p className="font-sora px-2.5 text-xl font-semibold uppercase tracking-[2px] text-white">{marqeeText}</p>
      <p className="font-sora px-2.5 text-xl font-semibold uppercase tracking-[2px] text-white">{marqeeText}</p>
      <p className="font-sora px-2.5 text-xl font-semibold uppercase tracking-[2px] text-white">{marqeeText}</p>
      <p className="font-sora px-2.5 text-xl font-semibold uppercase tracking-[2px] text-white">{marqeeText}</p>
      <p className="font-sora px-2.5 text-xl font-semibold uppercase tracking-[2px] text-white">{marqeeText}</p>
      <p className="font-sora px-2.5 text-xl font-semibold uppercase tracking-[2px] text-white">{marqeeText}</p>
      <p className="font-sora px-2.5 text-xl font-semibold uppercase tracking-[2px] text-white">{marqeeText}</p>
      <p className="font-sora px-2.5 text-xl font-semibold uppercase tracking-[2px] text-white">{marqeeText}</p>
      <p className="font-sora px-2.5 text-xl font-semibold uppercase tracking-[2px] text-white">{marqeeText}</p>
    </Marquee>
  )
}

export default MarqueText
