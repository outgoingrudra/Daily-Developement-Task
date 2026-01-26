
// const heading =  React.createElement("h1",{id:"heading"},"Hello World from React")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)



// now 
// make a structure like it 

//   <div class="parent">
//         <div class="child">
//             <h2>Rudra</h2>
//             <h2>Verma</h2>
//         </div>
//     </div>



const  parent = React.createElement("div",{className:"parent"},
    React.createElement("div",{className:"child"},
        [React.createElement("h2",{},"Rudra"),
        React.createElement("h2",{},"Verma")]
    )

)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)


