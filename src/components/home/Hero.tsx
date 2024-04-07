"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const EmblaCarousel = ()=> {
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])

  return (
    <div style={{zIndex: -10}} className="embla"  ref={emblaRef}>
      <div className="embla__container" style={{zIndex: -10}}>
        <div className="embla__slide" >
          <Image src={"/health.jpg"}  width={2000} height={1000} alt='health Carousel Image'/>
        </div>
        <div className="embla__slide">

          <Image src={"/about-us-corporate-governance-catchprase.jpg"} width={2000} height={1000} alt='Sme Bankig Carousel Image' />
        </div>
        <div className="embla__slide">

          <Image src={"/sme-banking-merchant-services-catchprase.jpg"} width={2000} height={1000} alt='merchant carousel image ' />
        </div>
      </div>
    </div>
  )
}
export default EmblaCarousel
