import React from 'react'
import "./address.css"
import { FOOTER_CONTENT } from '../constants'
import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaPhone } from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi'

const Address = () => {
    return (
        <div className='container address-container'>
            <p className='font-semibold text-blue-800'>Office Address</p>

            <div className="offices">

                {FOOTER_CONTENT.address.map((address) => {
                    return <div key={address.id}>
                        <div key={address.id} className='mt-4'>
                            <p className='font-bold text-gray-600'>{address.location}</p>
                            <p >{address.office}</p>
                        </div>

                    </div>
                })}

            </div>
            <div className='flex flex-row space-center justify-start gap-8'>

                <div className="mt-5" style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "left" }}>
                    <Link href="tel:+2348028600330" className="text-gray-700 hover:font-semibold hover:text-blue-800"> +234(0)802 860 0330 </Link>
                    <Link href="tel:+2348037855426" className="text-gray-700 hover:font-semibold hover:text-blue-800"> +234(0)803 785 5426 </Link>
                    <Link href="tel:+2347025530041" className="text-gray-700 hover:font-semibold hover:text-blue-800"> +234(0)702 553 0041</Link>
                </div>
                <div className="mt-5" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div className="text-gray-500 hover:text-[#4da251]" >
                        <Link target='-blank' href="tel:+2348028600330 "> <FaPhone /> </Link>
                    </div>
                    <div className="ml-5 text-[1.5rem] text-gray-500 hover:text-[#e34133]">
                        <Link target='-blank' href="mailto:riskoutconsults@gmail.com"> <BiLogoGmail /> </Link>
                    </div>
                    <div className="ml-5 text-[1.5rem] text-gray-500 hover:text-[#3d73eb]">
                        <Link target='-blank' href="https://www.facebook.com/Riskouteduconsults"> <FaFacebook /> </Link>
                    </div>
                    <div className="ml-5 text-[1.5rem] text-gray-500 hover:text-[#3c7ab6]">
                        <Link target='-blank' href="https://www.linkedin.com/in/riskout-consults-161511270"> <FaLinkedin /> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address
