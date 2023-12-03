import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import { RiSettings3Line } from "react-icons/ri";
import SearchHeaderOption from './SearchHeaderOption';


export default function SearchHeader() {
  return (
    <header className='sticky top-0  bg-white'>
        <div className='flex w-full p-6 items-center justify-between'>
            <Link href={"/"}>
                <Image className='' width={50} height={10} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/735px-Magnifying_glass_icon.svg.png"/>
            </Link>
            <div className='flex-1'>
                <SearchBox />
            </div>
            <div className='hidden md:inline-flex space-x-2'>
            <RiSettings3Line className='header-icon' />
            


            </div>
            <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 shadow-md transition-all ml-2'>Sign In</button>
            
        </div>
        <SearchHeaderOption/>
    </header>
  )
}
