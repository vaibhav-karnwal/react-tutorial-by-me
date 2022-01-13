import React from "react";

export default function Employee(props){
    return(
        <>
            <div className="card">
                <h1>Name : {props.name}</h1>
                <p>department : {props.department}</p>
                <p>salary : {props.salary}</p>
            </div>
        </>
    )
}