import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <h1 className='p-10 bg-zinc-400 text-center text-bold text-2xl text-blue-700'>Loader Page</h1>
        <div>{children}</div>
    </div>
  )
}
