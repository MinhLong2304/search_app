"use client"

import Link from 'next/link'
import React from 'react'
import { TbGridDots } from "react-icons/tb";
import {useRouter}  from 'next/navigation';



export default function Homeheader() {
  const router = useRouter()
  function signin(){
    router.push(`/signup`)
  }
  return (
    <header className='flex justify-end p-5 text-sm'>
        <div className='flex space-x-4 items-center'>
        <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2' />
        <button onClick={()=>signin()} className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button>

    </div>

    </header>
    
  )
}
