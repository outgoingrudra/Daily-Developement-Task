import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'

export default function Cart() {
  let carts = useSelector((store)=>store.cart.items)
  const dispatch = useDispatch()
  function clearCartArr() {
            dispatch(clearCart())
    
  }
  return (
    <div>
        <button onClick={()=> clearCartArr()} className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium shadow-sm hover:bg-indigo-700 hover:shadow-md active:scale-95 transition-all duration-150">
  Clear Cart
</button>
        <h1 className="text-2xl font-bold">Cart</h1>
        <div>
          <h5>Total : {carts.length}</h5>
          <ol className='mx-3 '>
            {carts.map((el,idx)=><li key={idx}>- {el}</li>)}
          </ol>
         </div>
         
    </div>
  )
}
