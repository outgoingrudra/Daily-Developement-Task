import { Component } from "react";
import Child from "./Child"
class Parent extends Component{
    constructor(){
         super()
        console.log("Parent Constructor")

        this.state={
            cnt : 0
        }
       
    
    }

    componentDidMount(){
        console.log("parent Component mounted !");
        
    }
    componentDidUpdate(){
        console.log("parent Component updated !");
        
    }
    render(){
        console.log("Parent Render")
        return(
            <div>
                <span>Count : {this.state.cnt}</span>
                <button onClick={()=> this.setState(
                    {
                        cnt : this.state.cnt+1
                    }
                )}>Click Me !</button>
                <Child name="first"   />
                <Child name="Second "   />

                

            </div>
        )
    }
}


export default Parent;