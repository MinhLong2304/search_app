"use client"

import React, { useEffect, useState } from 'react'

export default function ContryLookup() {
  const[country,setCountry]= useState("")
  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setCountry(data.country))
      .catch((error) => console.error("Error fetching country:", error));
  }, []);
  
    return (
    <div>Current location: {country}</div>
  )
}
