import React from "react"

class UserClass2 extends React.Component {
      constructor(props){
        super(props)
      }
    render(){
        const {name , age} = this.props
        return (
            <div>
                Hey from Class Component -2 !!!  Name : {name} - Age : {age}
            </div>
        )
    }
}



export default UserClass2