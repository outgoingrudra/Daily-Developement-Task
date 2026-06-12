"use client"
import Navbar from '@/components/Navbar'
import React from 'react'

export default function AboutLayout({children}) {
  return (
    <div>
        <Navbar/>
        <div>{children}</div>
    </div>
  )
}
