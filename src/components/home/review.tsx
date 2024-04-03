import { REVIEW } from '@/app/constants'
import Image from 'next/image'
import React from 'react'
import "./review.css"

const Review = () => {
  return (
    <div className='review-wrapper '>
      <div className=''>
        <h1 className="font-semibold text-sm pb-2">CLIENT'S REVIEW</h1>
      </div>
      <div className="client_comment">
        {REVIEW.map((item) => {
          return (
            <div className="client " key={item.id} >
              <Image src={item.img} alt={item.name} width={80} height={80} className='rounded-full' />
              <div > <span className=' name mt-2 leading-1'> {item.name} </span>  </div>
              <span>{item.professionn}</span>
              <div className="pt-1 leading-5 comment">  {item.Comment}  </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Review
