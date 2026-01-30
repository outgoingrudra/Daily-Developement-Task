import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./src/Home"


const heading = React.createElement("h1",{id:"heading"}, " Hello from Parcel !")


const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


const head2 = <h1 id="heading"> Hello from Parcel !</h1>

const Header = (<div>
    {head2}
     <span>again Hy !!</span>
</div>)

// root.render(Header)


// functional components

const Welcome = ()=>{
    return (
        <div>
            <h1> Welcome to React !</h1>
            <p> Hello from React !</p>
            <Home/>
        </div>
    )
}


const Bye =()=> (
    <div>
        <Welcome/>
        <h1> Bye Bye !</h1>
    </div>
)

const Shake =()=> (
    <div>
        {Bye()}
        <h1> Hand-Shake </h1>
    </div>
)


root.render(<Shake/>)


