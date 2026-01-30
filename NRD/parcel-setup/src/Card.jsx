import React from 'react'

export default function Card() {
  return (
    < div className='h-56 w-40 bg-zinc-300 flex justify-center   rounded-md '>
       <div>
         <img className='h-24 w-32 rounded-md mt-2 ' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-craig-122861-376464.jpg&fm=jpg" alt="" />

          <h3 className="font-bold ">Chinese Dhaba</h3>
          <h4 className="">lorem ispum</h4>
       </div>
    
    </div>
  )
}

export const PromotedCard =(Card)=>{

    return ()=>{
        return (
            <div>
                <label className='absolute  bg-zinc-900 text-white  p-2 rounded-md' >Promoted</label>
                <Card/>
            </div>
        )
    }

}
