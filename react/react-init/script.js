import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"

// const heading = React.createElement("h3",{ id : "heading"},"Heading ")
// const input = React.createElement("input",{placeholder:"Enter Name"})

//const main = React.createElement("div",{},[ heading , input ])

const main = <div className="">
    <h1>hello  from React</h1>
     <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRu-BjT_TFqioXpxyw7OI-hdTFGFqI0qbv8erPPuOxxnAGLS5Cu"></img>
</div>

console.log(Header)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(main)



