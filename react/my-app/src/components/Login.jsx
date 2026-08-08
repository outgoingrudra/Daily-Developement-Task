import React, { useState } from 'react'

export default function Login() {
    const [email ,setEmail] = useState("")
    const [pass ,setPass] = useState("")
  return (
    <div>
        <h3>Login</h3>
        <input type="text" className="" value={email} onChange={(e)=> {setEmail(e.target.value)}} placeholder='enter email...' /><br />
        <input type="text" value={pass}  onChange={(e)=> {setPass(e.target.value)}}placeholder='enter pass...' /><br />
        <button>Login</button>
    </div>
  )
}
