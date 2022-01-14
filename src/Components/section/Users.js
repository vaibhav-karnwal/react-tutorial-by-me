import React,{Component} from "react";
import Employee from "./Employee";
import Emp from "../data/Emp";

class Users extends Component{
    render(){
        return (
            <div className="container my-4">
                <h1>User data</h1>
                {Emp.map(data=>{
                    return <Employee key={data.emp_id}
                        {...data}
                    />
                })}
            </div>
        )
    }
}

export default Users;