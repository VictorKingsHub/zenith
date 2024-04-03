
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Burger from '@/app/burger/Burger'
import { NAV_LINKS } from '@/app/constants'


const Header = () => {
  return (
    <nav className="bg-white sticky top-0 w-full container mx-auto max-container padding-container z-999 items-center flex flex-row space-between justify-around  py-3 " >
      <div className=" cursor-pointer">
        <Link href="/">
          <Image alt="logo" src="/logo.jpg" width={70} height={50} />
        </Link>
      </div>
      <div>
        <ul style={{color: "rgb(68, 68, 68)"}} className="hidden  flex-row justify-between text-black  space-center md:flex">
          {NAV_LINKS.map((menuitem) => {
            return (
              <Link href={menuitem.href} key={menuitem.id} className="mx-4 font-bold cursor-pointer hover:text-red-500 transition-all"> {menuitem.label} </Link>
            )
          })}

        </ul>
      </div>
      <div className="hidden lg:flex" >
        {/* <Link href="/contact"  > Book us Now </Link> */}
        <Link href="/contact">
          <button  type="button" title="Book Us Today"  className='gap-3 bg-gradient-to-r from-red-400 to-red-900 p-2 rounded border-rounded cursor-pointer text-white'> Book Us Today </button>
        </Link>
      </div>

      <div className="flex md:hidden">
        <div>
          <Burger />
        </div>
        <ul className="flex flex-col md:hidden bg-green-500">
          {NAV_LINKS.map((menuitem) => {
            return (
              <Link href={menuitem.href} key={menuitem.id} className="mx-4 cursor-pointer hover:text-red-500 transition-all"> {menuitem.label} </Link>
            )
          })}
        </ul>
      </div>

    </nav>
  )
}

export default Header
