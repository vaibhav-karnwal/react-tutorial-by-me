import React from "react";

export default function Nested(){
    return(
        <>
            <Person/>
            <Message/>
        </>
    )
}

const Person=()=><h2>Vaibhav</h2>;

const Message=()=>{
    return(<p>this is my message</p>);
}