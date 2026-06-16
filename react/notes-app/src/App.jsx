import React from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Footer from './components/Footer'
import Search from './components/Search'
export default function App() {
  return (
   <div>
        {/* Navbar section */}
        <Navbar/>

        {/* hero section */}
        <Hero/>
        
        {/* search section */}
        <Search/>

        <Footer/>
   </div>
  )
}




