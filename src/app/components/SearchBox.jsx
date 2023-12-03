"use client"
import { useSearchParams,useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm]= useState(searchTerm || "");
  function handleSubmit(e){
    e.preventDefault();
    if(!term) return;
    router.push(`/search/web?searchTerm=${term}`);
  }
  return (
    <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center' onSubmit={handleSubmit}>
      <input type='text' value={term} onChange={(e) => setTerm(e.target.value)} className='w-full focus:outline-none'></input>
      <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={() => setTerm("")} />
     
      <CiSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer' onClick={handleSubmit}/>


      </form>
  )
}
