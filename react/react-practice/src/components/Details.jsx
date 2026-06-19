import React from 'react'

export default function Details(props) {
   
  return (
    <div className=' p-3 border border-1 w-72 bg-gray-300 rounded-xl m-3 outline outline-gray-600 outline-offset-2'>
        <h3 className='font-semibold'>Name : {props.name} </h3>
        <h3>Age : {props.age}</h3>
        <h3>City : {props.city}</h3>
    </div>
  )

  
}
