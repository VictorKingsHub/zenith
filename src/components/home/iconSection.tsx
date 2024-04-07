import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./iconSection.css"
import { RiVisaFill } from "react-icons/ri";

import { PiGraduationCapThin } from "react-icons/pi";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { RiPassValidLine } from "react-icons/ri";
import { CiCompass1 } from "react-icons/ci"
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { PiBookOpenTextThin } from "react-icons/pi";


const IconSection = () => {
  return (
    <div className='flex  flex-row iconSection justify-around self-center mb-3 gap-10 w-1/2 mt-3 mb-3 py-5 '>
      <div className="education flex flex-col space-between justify-center ">
        <Link href="/education"   >
          <PiGraduationCapThin  className='serviceIcon'/>
        </Link>
        <div className="iconText text-xs"> EDUCATIONAL CONSULTING </div>
      </div>
      <div className="travel">
        <Link href="/travel"  >
          <CiCompass1 className='serviceIcon' />
        </Link>
        <div className="iconText text-xs"> VISA PROCESSING </div>
      </div>
      <div className="travel">
        <Link href="/travel"  >
          <PiBookOpenTextThin className='serviceIcon' />
        </Link>
        <div className="iconText text-xs"> IELTS EXAMS </div>
      </div>
      <div className="travel">
        <Link href="/travel"  >
          <PiChalkboardTeacherThin className='serviceIcon' />
        </Link>
        <div className="iconText text-xs"> TEACHERS' STAFFING </div>
      </div>
      <div className="travel">
        <Link href="/travel"  >
          <PiAirplaneTiltThin className='serviceIcon' />
        </Link>
        <div className="iconText text-xs"> TRAVEL AGENCY </div>
      </div>
    </div>
  )
}

export default IconSection
