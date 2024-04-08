import Link from 'next/link'
import React from 'react'
import "./iconSection.css"
import { PiGraduationCapThin } from "react-icons/pi";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { CiCompass1 } from "react-icons/ci"
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { PiBookOpenTextThin } from "react-icons/pi";

const IconSection = () => {
  return (
    <div className='iconSection-wrapper container '>
      <div className="education flex flex-col   space-between justify-center ">
        <Link href="/education"   >
          <PiGraduationCapThin className='serviceIcon' />
        </Link>
        <div className="iconText"> EDUCATIONAL CONSULTING </div>
      </div>
      <div className="travel">
        <Link href="/travel"  >
          <CiCompass1 className='serviceIcon' />
        </Link>
        <div className="iconText "> VISA PROCESSING </div>
      </div>
      <div className="travel">
        <Link href="/travel"  >
          <PiBookOpenTextThin className='serviceIcon' />
        </Link>
        <div className="iconText "> IELTS EXAMS </div>
      </div>
      <div className="travel">
        <Link href="/travel"  >
          <PiChalkboardTeacherThin className='serviceIcon' />
        </Link>
        <div className="iconText "> TEACHERS' STAFFING </div>
      </div>
      <div className="travel">
        <Link href="/travel"  >
          <PiAirplaneTiltThin className='serviceIcon' />
        </Link>
        <div className="iconText "> TRAVEL AGENCY </div>
      </div>
    </div>
  )
}

export default IconSection
