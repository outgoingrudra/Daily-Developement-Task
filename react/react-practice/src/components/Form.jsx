import React, { useState } from 'react'

export default function Form() {
    const [name , setName ] = useState("")
    const [email , setEmail ] = useState("")
    const [password , setPassword ] = useState("")
    const [city , setCity ] = useState("")



  return (
    <div>
        <input type="text" className='border border-1 h-10 w- 80 p-1 rounded-md mb-2' name='name' value={name} placeholder='Name '   onChange={(e)=>{setName(e.target.value)}} /><br />
        <input type="text" className='border border-1 h-10 w- 80 p-1 rounded-md mb-2' name='Email' value={email} placeholder='Email ' 
        onChange={(e)=>{setEmail(e.target.value)}}  /><br />
        <input type="text" className='border border-1 h-10 w- 80 p-1 rounded-md mb-2' name='password' value={password} placeholder='Password ' onChange={(e)=>{setPassword(e.target.value)}}  /><br />
        <input type="text" className='border border-1 h-10 w- 80 p-1 rounded-md mb-2' name="city" onChange={(e)=>{setCity(e.target.value)}}   value={city} placeholder='City ' />


        <div className=' border border-1 mt-10  mx-20 w-96 p-4'>
            <ul>
                <li>Name : {name} </li>
                <li>Email:{ email} </li>
                <li>Password :{password} </li>
                <li>City : {city}</li>
            </ul>
        </div>
    </div>
  )
}


