import React from 'react'
import useCardLoad from '../utils/useCardLoad'
//import useCardLoad from '../utils/useCardLoad'

export default function Restaurant() {
   //  const arr = useCardLoad()
   const x  = useCardLoad()
   console.log(x)

   const name = x?.user?.login
   const bio = x?.user?.bio
     
  return (
    <div>Restaurant
        <br />
        {x.success ? " Data Found " : "Data Not FOund"}
          <br />
        <h1>Name : {name}</h1>
        <h2>Bio : {bio} </h2>
        

    </div>
  )
}
