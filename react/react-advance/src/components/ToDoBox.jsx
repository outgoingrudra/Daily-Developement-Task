import React from 'react'

export default function ToDoBox({todo}) {
  return (
    <div className='border m-3 h-auto w-120 flex justify-between px-3 rounded-xl p-3 items-center'> 
         <span className="">{todo.id} . </span>
         <span className="w-[60%] overflow-hidden text-gray-600 ">{todo.todo}</span>
         <span className={`text-2xl ${todo.completed  ? "text-green-500" : "text-red-500"}`}>{todo.completed ? "Completed" : "Pending" }</span>
    </div>
  )
}
