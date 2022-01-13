import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div bg="light" expand="lg">
            <div className = "container">
                <Link className = "mx-3" exact to="/">Home</Link>
                <Link className = "mx-3" exact to="/about">About</Link>
                <Link className = "mx-3" exact to="/users">Users</Link>
            </div>
        </div>
    )
}