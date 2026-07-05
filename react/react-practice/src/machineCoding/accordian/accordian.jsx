// import React, { useState } from 'react';
// //import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
// import './styles.css'

// function Accordion({ items }) {
//     const [openItem, setOpenItem] = useState(null)
//     function handleToggle(idx) {
//         setOpenItem(openItem == idx ? null : idx)
//     }
//     if(!items || items.length==0) return "No items available"
//     return (
//         <div className ="accordion">
//             {items.map((item, idx) => (
//                 <div className="accordion-item">
//                     <div className="accordion-title" onClick={() => {
//                         handleToggle(idx)
//                     }}>{item.title}
//                         {openItem !== idx ? <FaChevronDown  /> : <FaChevronUp />}
//                     </div>
//                     {openItem === idx ? <div className="accordion-content">{item.content}</div>:""
//                     }

//                 </div>))}
//         </div>
//     );
// }

// export default Accordion;


import React from 'react'

export default function accordian() {
  return (
    <div>accordian</div>
  )
}
