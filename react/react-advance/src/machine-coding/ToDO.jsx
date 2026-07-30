import React, { useState } from 'react'

export default function ToDO() {

   const [todos , setTodos  ] = useState([])
   const [input , setInput] = useState("")



   function addTodo() {
    let temp = [...todos]
    let id =  Math.floor(Math.random()*100000)
    temp.push({ id : id ,  name : input , completed : false})
    setTodos(temp)
    setInput("")
   }

   function deleteTodo(id) {

   }
  return (
    <div>
       <center> <h2> TO DO App </h2></center>

       <div className="upper">
        <input type="text"
         className="todo-input"
         onChange={(e)=> setInput(e.target.value)}
         value={input}
         />
        <button onClick={()=> addTodo()} className="todo-btn">Add</button>
       </div>

       <div className="">
        {
            todos.map((todo)=><div key={todo.id} className='todo'> 
            <input type="checkbox" name="" id="" checked={todo.completed} />
                    <span className="todo-name">{todo.name}</span>

                     Status : {todo.completed ? " Completed" :"Not Completed"}

                     <button className="" onClick={()=> deleteTodo(todo.id)}>Delete</button>
                </div>)
        }
       </div>

    </div>
  )
}


