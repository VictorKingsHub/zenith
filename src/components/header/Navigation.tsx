import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from "@/app/button"
import Burger from '@/app/burger/Burger'
import { NAV_LINKS } from '@/app/constants'


const Header = () => {
  return (
    <nav className="container mx-auto max-container padding-container relative z-9 items-center flex flex-row space-between justify-around text-white  py-3 " >
      <div className=" cursor-pointer">
        <Link href="/">
          <Image alt="logo" src="/logo.jpg" width={70} height={50} />
        </Link>
      </div>
      <div>
        <ul className="hidden  flex-row justify-between text-black space-center md:flex">
          {NAV_LINKS.map((menuitem) => {
            return (
              <Link href={menuitem.href} key={menuitem.key} className="mx-4 font-bold cursor-pointer hover:text-red-500 transition-all"> {menuitem.label} </Link>
            )
          })}
        </ul>
      </div>
      <div className="hidden lg:flex" >
        {/* <Link href="/contact"  > Book us Now </Link> */}
        <Link href="/contact">
          <Button type="button" title="Book Us Today" />
        </Link>
      </div>

      <div className="flex md:hidden">
        <div>
          <Burger />
        </div>
        <ul className="flex flex-col md:hidden bg-green-500">
          {NAV_LINKS.map((menuitem) => {
            return (
              <Link href={menuitem.href} key={menuitem.key} className="mx-4 cursor-pointer hover:text-red-500 transition-all"> {menuitem.label} </Link>
            )
          })}
        </ul>
      </div>

    </nav>
  )
}

export default Header
