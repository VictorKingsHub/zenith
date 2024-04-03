import { REVIEW } from '@/app/constants'
import Image from 'next/image'
import React from 'react'
import "./review.css"

const Review = () => {
  return (
    <div className='review-wrapper '>
      <div className=''>
        <h1 className='content-center text-center text-xl font-bold'>CLIENT'S REVIEW</h1>
      </div>
      <div className="client_comment">
        {REVIEW.map((item) => {
          return (
            <div className="client " key={item.id} >
              <Image src={item.img} alt={item.name} width={80} height={80} className='rounded-full' />
              <h5 className='pt-2 font-bold'> {item.name} </h5>
              <h6> {item.professionn} </h6>
              <p className="pt-1 leading-5">  {item.Comment}  </p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Review
