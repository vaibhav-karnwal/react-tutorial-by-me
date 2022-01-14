import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <section className="d-flex flex-row">
                <Link className="p-2" to="/bookland">Home</Link> 
                <input className="p-2" type="text" ></input>       
                <Link className="p-2" to="/bookland/login-register">Login/Register</Link> 
                <Link className="p-2" to="/bookland/cart">Cart</Link> 
            </section>
        </>
    )
}