import { FOOTER_CONTENT } from "@/app/constants"
import "./footer.css"
import Link from "next/link"
import Marquee from "react-fast-marquee";

import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

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
          <div className="mt-5" style={{display: "flex", flexDirection: "row",  alignItems: "center"}}>
            <div className="text-gray-500" >
              <Link href="tel:+2348028600330"> <FaPhone /> </Link>
            </div>
            <div className="ml-5 text-[1.5rem] text-gray-500]">
              <Link href="mailto:riskoutconsults@gmail.com"> <BiLogoGmail /> </Link>
            </div>
            <div className="ml-5 text-[1.5rem] text-gray-500">
              <Link href="https://www.facebook.com/Riskouteduconsults"> <FaFacebook /> </Link>
            </div>
            <div className="ml-5 text-[1.5rem] text-gray-500">
              <Link href="https://www.linkedin.com/in/riskout-consults-161511270"> <FaLinkedin /> </Link>
            </div>
          </div>
          <div className="mt-5" style={{display: "flex", flexDirection: "column",  alignItems: "center"}}>
            <div  >
              <Link className="text-gray-500" href="tel:+2348028600330"> +234(0)802 860 0330 </Link>
            </div>
            <div className="ml-5 text-[1.5rem] text-gray-500]">
              <Link href="tel:+2348037855426"> +234(0)803 785 5426 </Link>
            </div>
            <div className="ml-5 text-[1.5rem] text-gray-500">
              <Link href="tel:+2347025530041"> +234(0)702 553 0041</Link>
            </div>
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

          {FOOTER_CONTENT.opening.map((day) => {
            return (
              <div key={day.id}>
                <div className="flex flex-row space-between">
                  <span > {day.icon} </span>
                  <div className="ml-5 menu_item_title"> {day.days} </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="two">
        <div className="social_icons flex flex-row content-center ">
          {FOOTER_CONTENT.address.map((address) => {
            return (
              <div className="mr-4" key={address.id}>
                <Link href="" > {address.icons} </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="three">
        <div className="last">
          <Marquee pauseOnHover={true} pauseOnClick={true} gradient={true} >
            <div >The Best Travel and Educational consulting firm</div>
          </Marquee>
        </div>
        <div >©2024. Riskoutconsults.com. All Rights Reserved.</div>
      </div>
    </div>
  )
}
