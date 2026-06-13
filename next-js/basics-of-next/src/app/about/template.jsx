import React from 'react'

export default function template({children}) {
  return (
    <div>
        <h1 className='bg-zinc-400 text-3xl  p-4 '>Template Part</h1>
        <div>{children}</div>
    </div>
  )
}
