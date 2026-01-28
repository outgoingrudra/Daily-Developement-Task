import React, { useState } from 'react'

export default function Login() {
    const [name , setName] = useState("login")

    const updae = () =>{
        setName("logout")
    }
    
  return (
    <button onClick={updae()}>{name}</button>
  )
}
