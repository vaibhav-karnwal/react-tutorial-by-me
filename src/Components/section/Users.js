import React from "react";
import Employee from "./Employee";

export default function Users(){
    return (
        <>
            <div>
                <h1>User data</h1>
                <Employee name = 'vaibhav karnwal' department = 'FrontEnd' Salary = {90000}/>
            </div>
        </>
    )
}