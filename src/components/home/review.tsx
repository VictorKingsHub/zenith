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
              <div className='flex flex-row justify-center space-center'>
                <div>
                  <Image src={item.img} alt={item.name} width={80} height={80} className='rounded-full' />
                </div>
                <div className='flex flex-col ml-2 leading-0'>
                  <span className=' name text-sm leading-0'> {item.name} </span>
                  <span className='text-xm bg-gree-500'>{item.professionn}</span>
                </div>
              </div>
              <div className="pt-1 leading-5 comment">  {item.Comment}  </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Review
