import React from 'react'

export default function ProductCard({product}) {
  return (
    <div className="product-card">
        <h3>{product.id}</h3>
        <img src={product.thumbnail} alt="" className="" />
        <span className="title">{product.title}</span>
        <div className="left"><button className="">Add</button></div>
    </div>
  )
}
