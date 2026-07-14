import React  , {useState ,useEffect} from 'react'
import ToDoBox from './ToDoBox'

export default function UseEffectDemo() {
      const [data, setData] = useState([])
      const [input ,setInput] = useState("")
      const [input2 ,setInput2] = useState("")

      useEffect(() => {
        async function DataFetch() {
            const result = await fetch("https://dummyjson.com/todos")
            const output = await result.json()
            setData(output.todos)
            console.log(output.todos);
            
        }
        DataFetch()
        console.log("UseEffect run");
        
        
      }, [input])
      
      

  return (
    <div>
        <h3>TO DOs</h3>
         <div className="">
            {data.map((todo)=> <ToDoBox key={todo.id} todo = {todo} />)}
         </div>
    </div>
  )
}



