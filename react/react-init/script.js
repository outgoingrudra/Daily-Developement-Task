import React from "react"
import ReactDOM from "react-dom/client"




const heading = React.createElement("h3",{ id : "heading"},"Heading ")
const input = React.createElement("input",{placeholder:"Enter Name"})

const main = React.createElement("div",{},[ heading , input ])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(main)

