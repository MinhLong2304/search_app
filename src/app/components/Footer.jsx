import React from 'react'
import ContryLookup from './ContryLookup'

export default function Footer() {
  return (
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
        <div className='border-b px-8 py-3'>
            <ContryLookup />
        </div>
        <div className=' flex px-8 py-3 '>
            <p>Made by Long</p>
        </div>
    </footer>
  )
}
