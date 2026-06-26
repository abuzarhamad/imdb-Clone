
import React from 'react'
import Headeritems from './Headeritems'
import Link from 'next/link'
import Darkmodeswitch from './Darkmodeswitch'
import { FaHome } from "react-icons/fa"
import { FaInfoCircle } from 'react-icons/fa';


export default function Header() {

  return (
    <>
      <div className='flex justify-between sm:justify-around p-3 items-center
         '>
        <div className='flex py-2 gap-3 items-center '>
          <Headeritems title='Home' address='/' icon={<FaHome />} />
          <Headeritems title='About' address='/about' icon={<FaInfoCircle />} />
        </div>

        <div className='flex gap-2 items-center '>
          <Darkmodeswitch />
          <Link href={"/"} className='flex items-center gap-1 '>
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg   ' >imdb</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </Link>

        </div>
      </div>
    </>
  )
}
