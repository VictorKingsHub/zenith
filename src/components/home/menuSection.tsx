'use script'
"use client"
import { MINI_MENU } from '@/app/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const MenuSection = ({getCurrentId}) => {
  const [menu, setMenu] = useState(true)
  const [selected, setSelected] = useState(1)

  const handleSelection = (getCurrentId: any) => {
    setSelected(getCurrentId === selected ? " " : getCurrentId)

    console.log("menu item:", menu)
    console.log("selected item:", selected)
    console.log("getCurrent:", getCurrentId)
  }

  return (
    <div className="bg-red-500 h-[20rem] pt-10 pb-10 mini_menu_content">
      <div className="min-nav text-white flex flex-row justify-center align-center">
        {MINI_MENU.menu.map((menuItem) => {
          return (
            <Link href={menuItem.href} key={menuItem.id} className='pb-2 min_menu_link cursor-pointer sm:text-sm md:text-base' onClick={() => handleSelection(menuItem.id)} data-toggle="tab" aria-expanded="false" >
              {menuItem.label}
            </ Link>
          )
        })}

      </div>
      <div className=" mini_menu_item">

        {MINI_MENU.content && MINI_MENU.content.length > 0 ?

          MINI_MENU.content.map((item) => {
            return (
              <div key={item.id} className='flex flex-row align-center text-center space-around image_text ' >
                <div className="icon">
                  {(selected === item.id) && <Image src={item.icon} alt={item.header} width={100} height={100} />}
                </div>
                <div className="details">
                  <h1 className='text-white font-bold md:text-sm'>{(selected === item.id) && item.header}</h1>
                  <p className='pt-3'>{(selected === item.id) && item.description}</p>

                  <button type='button' className={(selected !== getCurrentId)  ? "flex" : "hidden"} style={{backgroundColor: "white", color: "black", borderRadius: "5px"}}> {(selected === item.id) && (item.button)} </button>   

                  {/* <button type='button' className='learn_more pt-3' style={{backgroundColor: "white", color: "black", borderRadius: "5px", padding: ".5rem"}}> {(selected === (getCurrentId) ) && (item.button)} </button>                   */}
                </div>
              </div>
            )
          }) :
          <div>{null}</div>

        }
      </div>
    </div>
  )
}

export default MenuSection
