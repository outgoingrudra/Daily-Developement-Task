"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function UseRouterExample() {
    const router = useRouter()
    function PushToHome(){
        router.push("/")
    }
    function BackToLast(){
        router.back()
    }
    function RefreshPage(){
        router.refresh()
    }
    function PrefetchProduct(){
                  router.prefetch("/products")
    }
    function Forward(){
        router.forward()
    }
  return (
    <div>useRouterExample
        <div>
            <button onClick={PushToHome} className=' m-2 cursor-pointer text-xl text-black bg-gray-400 p-10'>Push to Home</button>
            <button onClick={BackToLast} className=' m-2 cursor-pointer text-xl text-black bg-gray-400 p-10'>Back to last Page</button>
            <button onClick={RefreshPage} className=' m-2 cursor-pointer text-xl text-black bg-gray-400 p-10'>Refresh</button>
            <button onClick={PrefetchProduct} className='  m-2 cursor-pointer text-xl text-black bg-gray-400 p-10'>Prefetch</button>
            <button onClick={Forward} className='  m-2 cursor-pointer text-xl text-black bg-gray-400 p-10'>Forward</button>
        </div> 
    </div>
  )
}
