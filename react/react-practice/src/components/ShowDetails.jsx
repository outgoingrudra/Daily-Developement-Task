import { useState } from "react"

export default function ShowDetails(){
    let [xyz,updaterFunction] = useState("Hello")
    

    function updateOutput(){
         updaterFunction("Updated output") 
    }
    return (
        <div>
            <div>{xyz}</div>
            <button onClick={updateOutput}  className=" border-1 p-2 bg-gray-500 cursor-pointer">Update Output</button>
        </div>
    )
}
