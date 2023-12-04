import WebSearchResults from '@/app/components/WebSearchResults';
import Link from 'next/link';
import React from 'react'

export default async function WebsearchPage({searchParams}) {
  const startIndex = searchParams.start || "1";
  //await new Promise((resolve)=> setTimeout(resolve,1000))
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`

  )
  if(!response.ok){
    console.log(response);
    throw new Error('Something went wrong');
  }
  const data =await response.json()
  const results = data.items
  if(!results){
    return<div className='flex flex-col justify-center items-center pt-10'>
      <h1 className='text-3xl mb-4'>No result found</h1>
      <p className='text-lg'>
        Try search for something else go back to homepage 
      </p>
      <Link className='text-blue-500' href='/'>Home</Link>
    </div> 
  }
  return <>
    {results && <WebSearchResults results={data}/>}

  </>
    
  
}
