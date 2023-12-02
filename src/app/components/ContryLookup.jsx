"use client"

import React, { useEffect, useState } from 'react'

export default function ContryLookup() {
  const[country,setCountry]= useState("United States")
  useEffect(()=>{
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.IP_API_KEY}`).then((res) => res.json()).then((data) => setCountry(data.country));  
  },[]);
    return (
    <div>{country}</div>
  )
}
