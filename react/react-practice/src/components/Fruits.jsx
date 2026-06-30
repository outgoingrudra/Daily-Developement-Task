import React, { useState } from 'react'

export default function Fruits() {
     const [fruits , setFruits] = useState(["Apple","Mango"])
     const [name ,setName] = useState("")
   
     
     function addFruit(){
        setFruits([...fruits ,name ])
        setName("")
     }
  return (
    <div>
        <h3 className='text-2xl font-semibold mb-4'>Fruits</h3>
        <input onChange={(e)=> {
            setName(e.target.value)
           
            
        }} type="text" value={name}  className='border  h-8 mx-3 mb-3 px-1 ' placeholder='Enter fruits ....'/>
        <button onClick={addFruit} className=' border  border-1 px-2 py-1 rounded-lg  bg-yellow-400 cursor-pointer'>Add</button>
        <ul className='list-inside list-disc px-3'>
            {fruits.map((fruit,idx)=>( <li key={idx}>{fruit}</li>))}
        </ul>
    </div>
  )
}
