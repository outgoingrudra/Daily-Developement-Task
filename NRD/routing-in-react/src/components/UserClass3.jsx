import React from "react"

class UserClass3 extends React.Component {
    constructor(){
        super()
        this.state={
            cnt : 0
        }
    }
      
    render(){
      const {cnt} = this.state
        return (
            <div>
                Hey from Class Component -3 !!! <span>Count : {cnt}</span> 
                <button
                onClick={()=>
                    this.setState({
                        cnt : this.state.cnt +1 
                    })
                }
                >Click Me !</button> 
            </div>
        )
    }
}



export default UserClass3