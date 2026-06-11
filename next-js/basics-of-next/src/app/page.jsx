"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  function move(s){
    router.push(s)


  }
  return (
    <div>Home
      <nav className='border border-2 border-gray-200 w-full h-7  bg-gray-400'>
        <ul className='flex gap-3'>
          <li className='text-blue-900 underline '><Link href={"/about"}>About</Link></li>
          <li className='text-blue-900 underline '><Link href={"/works"} replace>Works</Link></li>
          <li className='text-blue-900 underline '><Link href={"/userouter-example"} >useRouter example</Link></li>
          <li><button className='text-blue-900 underline' onClick={()=>move("/products")}>Products</button></li>
        </ul>
      </nav>
    </div>
  )
}
