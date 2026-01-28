import { Component } from "react"

class Child extends Component{
    constructor(props){
        super(props)
        console.log(this.props.name+"Child Constructor")
    

    }
    componentDidMount(){
        console.log(this.props.name+"Child Component mounted !");
        
    }
    componentDidUpdate(){
        console.log(this.props.name+"Child Component updated !");
        
    }
    render(){
        console.log(this.props.name+"Child Render")
        return(
            <div>{this.props.name} child updated !! </div>)

}
}

export default Child ;