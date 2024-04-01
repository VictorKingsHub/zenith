import { ICONS } from '@/app/constants'
import Image from 'next/image'
import React from 'react'

const IconSection = () => {
  return (
    <div className='flex flex-row justify-around self-center mb-3 gap-10 mx-5 w-1/2 mt-3 mb-3'>
    {ICONS.map((item) => {
      return(
        <div className='flex flex-col gap-3 p-3 cursor-pointer' >
        <Image src={item.src}  alt={item.alt} key={item.id} width={80} height={80}/>
          <div>{item.label}</div>
        </div>
      )
    })}


    </div>
  )
}

export default IconSection
