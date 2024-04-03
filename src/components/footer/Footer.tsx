import { FOOTER_CONTENT } from "@/app/constants"
import "./footer.css"
import Link from "next/link"
import Marquee from "react-fast-marquee";

import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="one">
        <div className="video">
          <h1 className="font-semibold text-sm pb-2">VIDEO ADVERT</h1>

        </div>
        <div className="office">
          <h1 className="font-semibold text-sm pb-2">OFFICE ADDRESS</h1>
          {FOOTER_CONTENT.address.map((address) => {
            return (
              <div key={address.id} className="menu_item_title">
                < > {address.office} </>
              </div>
            )
          })}
          <div className="mt-5" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div className="text-gray-500 hover:text-[#4da251]" >
              <Link href="tel:+2348028600330 "> <FaPhone /> </Link>
            </div>
            <div className="ml-5 text-[1.5rem] text-gray-500 hover:text-[#e34133]">
              <Link href="mailto:riskoutconsults@gmail.com"> <BiLogoGmail /> </Link>
            </div>
            <div className="ml-5 text-[1.5rem] text-gray-500 hover:text-[#3d73eb]">
              <Link href="https://www.facebook.com/Riskouteduconsults"> <FaFacebook /> </Link>
            </div>
            <div className="ml-5 text-[1.5rem] text-gray-500 hover:text-[#3c7ab6]">
              <Link href="https://www.linkedin.com/in/riskout-consults-161511270"> <FaLinkedin /> </Link>
            </div>
          </div>
          <div className="mt-5" style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "left" }}>
            <Link href="tel:+2348028600330" className="text-gray-500 hover:text-gray-900"> +234(0)802 860 0330 </Link>
            <Link href="tel:+2348037855426" className="text-gray-500 hover:text-gray-900"> +234(0)803 785 5426 </Link>
            <Link href="tel:+2347025530041" className="text-gray-500 hover:text-gray-900"> +234(0)702 553 0041</Link>
          </div>
        </div>
        <div className="quick_links">
          <h1 className="font-semibold text-sm pb-2" >QUICK LINK</h1>
          {FOOTER_CONTENT.footerNav.map((nav) => {
            return (<div> <a href={nav.link} className="menu_item" key={nav.id}> {nav.label} </a> </div>)
          })}
        </div>
        <div className="opening">
          <h1 className="font-semibold text-sm pb-2" >OPENING DAYS</h1>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <div className="menu_item_title flex flex-row text-[1.5rem] text-gray-500]  "> <span className="text-[1.5rem] text-gray-500"><IoMdTime /> </span> <p className="ml-4">Monday - Friday: 8:00am - 5:00pm</p>  </div>
            <div className="menu_item_title flex flex-row text-[1.5rem] text-gray-500]"> <span className="text-[1.5rem] text-gray-500"><IoMdTime /> </span> <p className="ml-4"> Saturday: 9:00am - 3:00pm </p>  </div>
          </div>

        </div>
      </div>
      <div className="two social_icons flex flex-row content-center">
          <Marquee pauseOnHover={true} pauseOnClick={true} gradient={true} gradientColor="lightgray, #f7f7f7" gradientWidth={50} >
            <div className="menu_item_title" >The Best Travel and Educational consulting firm</div>
          </Marquee>
      </div>
      <div className="three">
        <div className="menu_item_title">©2024. Riskoutconsults.com. All Rights Reserved.</div>
      </div>
    </div>
  )
}
