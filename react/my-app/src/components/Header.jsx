import React from 'react'
import { Link , useLocation  } from 'react-router-dom'
export default function Header() {
       const location  = useLocation()
       console.log(location.pathname)

       const arr = [
          { path : "/" , name : "Home"},
          { path : "/about" , name : "About"},
          { path : "/contact" , name : "Contact"},
          { path : "/products" , name : "Products"},
       ]
  return (
    <div>
        <header>
             {
              arr.map((ele)=> <Link to={ele.path} className={location.pathname ==ele.path ? "active-head" : ""}>{ele.name}</Link>)
             }
        </header>
    </div>
  )
}
