import React from "react";

export default function Employee(props){
    console.log(props)
    const {emp_name,emp_image, emp_id, Dateofjoin, Department, Branch} = props;
    return(
        <>
            <div className="card mx-1 p-1 w-25 d-flex flex-column">
                <img  className="" src={emp_image} alt="user_image"/>    
                <h6 className="p-2">Employee Name : {emp_name}</h6>
                <p className="p-2">Department : {Department}</p>
                <p className="p-2">Id : {emp_id}</p>
                <p className="p-2">Branch : {Branch}</p>
                <p className="p-2">Date of Joining : {Dateofjoin}</p>
            </div>
        </>
    )
}