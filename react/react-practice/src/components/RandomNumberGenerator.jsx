import React, { useState } from 'react'

export default function RandomNumberGenerator() {
const [ val ,setVal] = useState(null)
  return (
    <div>
        <button className=" border border-1 px-2 py-1 bg-gray-900  cursor-pointer rounded-md text-white" onClick={()=> setVal(Math.floor(Math.random()*10000000))}>Generate</button>
        <div>Random Number : <span className=' font-semibold  text-orange-700'>{val}</span></div>
    </div>
  )
}
