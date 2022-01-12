import React,{Component} from 'react'

class Message extends React.Component{

    constructor(){
        super();
        this.state = {
            name: "vaibhav",
        }
    }
    changeName(){
        this.setState({
            name: "shakti",
        })
    }
    render(){
        return(
            <div>
                <h1>my name is {this.state.name}</h1>
                <button onClick={()=>this.changeName()}></button>
            </div>
        )
    }
}
export default Message;