import React, { useEffect, useState } from 'react'

export default  function UseEffectDemo() {
   
    const [data ,setData] = useState(0)


      async function fetchData() {
             const result = await fetch("https://dummyjson.com/todos")
             const backendData = await result.json()
             console.log(backendData);
             setData(backendData)

             
      } 

     

   useEffect(()=>{
          fetchData()
     
   },[])
    
  return (
    <div>
        count : {data}
    </div>
  )
}

