import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function Products() {
     const [data , setData] = useState([])

  useEffect(()=>{
          async function fetchData() {
                 let res = await  fetch("https://dummyjson.com/products")
                  res  = await res.json()
                  console.log(res)
                  setData(res.products)
          }
          fetchData()
  },[])
  return (
    <div>
        <h1>Products</h1>
         <div className="show">
          {
            data.map((product)=><ProductCard key={product.id} product={product}/>)
          }
         </div>
    </div>
  )
}
