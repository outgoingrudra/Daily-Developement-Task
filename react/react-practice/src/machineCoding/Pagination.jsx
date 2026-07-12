import React, { useEffect, useState } from 'react'

export default function Pagination() {
    const [products , setProducts] = useState([])
    const [currentPage , setCurrentPage] = useState(0)

    async function fetchData() {
    const json = await fetch("https://dummyjson.com/products?skip:10&limit:194")
    const data = await json.json()
    console.log(data.products);
    setProducts(data.products)
    
}
 useEffect(()=>{
           fetchData()
 },[])


 const PRODUCTS_PER_PAGE = 4
 const totalPages =  products.length/ PRODUCTS_PER_PAGE
 const array = []
 for(let i = 0; i< totalPages ;i++) array.push(i)

  function  handleLeftNavigation() {
if(currentPage-1<0)  return 
 setCurrentPage(prev => prev -1 )
  
 }

function  handleRightNavigation() {
if(currentPage+1>= totalPages)  return 
 setCurrentPage(prev => prev +1 )
  
 }
    
  return (
   <div>
     <div className='text-center text-3xl '>Pagination</div>
      <div className="pages text-center mt-2">
         <button
            className={` border rounded-md hover:outline outline-blue-900 outline-offset-2 border-1 px-2 py-1 mx-1 cursor-pointer`}
            onClick={()=> {handleLeftNavigation()}}
            > lt
            </button>
          {
           array.map((ele)=> <button
            className={` border rounded-md hover:outline outline-blue-900 outline-offset-2 border-1 px-2 py-1 mx-1 ${currentPage == ele && "bg-blue-500"} cursor-pointer`}
            onClick={()=> {setCurrentPage(ele)}}
            >{ele+1}
            </button>)
          }
            <button
            className={` border rounded-md hover:outline outline-blue-900 outline-offset-2 border-1 px-2 py-1 mx-1 cursor-pointer`}
            onClick={()=> {handleRightNavigation()}}
            > rt
            </button>
          {
            products.slice(currentPage*PRODUCTS_PER_PAGE ,(currentPage+1)*PRODUCTS_PER_PAGE).map((product,idx)=>(
              <ProductItem key={idx} product={product}/>
            ))
          }
      </div>
   </div>
  )
}



function ProductItem({product}) {
  return (
    <div className='h-20 w-10/12 border rounded-xl m-1 flex items-center hover:outline-2 outline-blue-300 outline-offset-1 justify-between px-4'>
      <img src={product.images[0]} alt={product.brand} className='h-16 border rounded-xl mx-2 hover:bg-zinc-300 ' />
       <span className='text-lg font-sans'>{product.title}</span>
       <button className='border-1 px-3 py-2 rounded-lg cursor-pointer bg-green-500  hover:outline-double outline-green-500 outline-offset-1 '>Cart </button>
    </div>
  )
}


