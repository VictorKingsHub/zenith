import { ICONS } from '@/app/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./iconSection.css"

import { PiGraduationCapThin } from "react-icons/pi";
import { PiAirplaneTiltThin } from "react-icons/pi";

const IconSection = () => {
  return (
    <div className='flex  flex-row iconSection justify-around self-center mb-3 gap-10 mx-5 w-1/2 mt-3 mb-3 py-5 '>
      <div className="education flex flex-col space-between justify-center ">
        <Link href="/education"   className='text-bold' >
          <PiGraduationCapThin  className='serviceIcon'/>
        </Link>
        <div className="iconText"> EDUCATIONAL CONSULTING </div>
      </div>
      <div className="travel">
        <Link href="/travel"  >
          <PiAirplaneTiltThin className='serviceIcon' />
        </Link>
        <div className="iconText"> TRAVEL AGENCY </div>
      </div>
    </div>
  )
}

export default IconSection
