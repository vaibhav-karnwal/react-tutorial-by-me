import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div bg="light" expand="lg">
            <div className = "container">
                <Link className = "mx-3" to="/">Home</Link>
                <Link className = "mx-3" to="/about">About</Link>
                <Link className = "mx-3" to="/users">Users</Link>
                <Link className = "mx-3" to="/nested_components">Nested Component</Link>
                <Link className = "mx-3" to="/bookland">Bookland</Link>
                <Link className = "mx-3" to="/useStateInObjects">UseState InObjects</Link>
            </div>
        </div>
    )
}

