import { ICONS } from '@/app/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./iconSection.css"

const IconSection = () => {
  return (
    <div className='flex  flex-row iconSection justify-around self-center mb-3 gap-10 mx-5 w-1/2 mt-3 mb-3 py-5 '>
      {ICONS.map((item) => {
        return (
          <div className='flex flex-col gap-3 p-3 my-auto justify-center'>
            <Link href={item.ref} className='cursor: pointer'  >
              <Image src={item.src} alt={item.alt} key={item.id} width={60} height={60} className='icon' />
            </Link>
            <div className='iconText'>{item.label}</div>
          </div>
        )
      })}


    </div>
  )
}

export default IconSection
