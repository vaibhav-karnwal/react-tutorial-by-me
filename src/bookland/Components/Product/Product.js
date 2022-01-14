import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router";

export default function Product(props){
    const {img, title, price, description} = props
    
    const showDetail=(props)=>{
        return(
            <>
                <Route path="/{product}"/>
                <Link to="/{product}"/>
            </>
        )
    }
    return(
        <>
            <div className="d-flex flex-column">
                <img src={img} onClick={showDetail} alt="img"/>
                <h6 onClick={showDetail}>{title}</h6>
                <p>{description}</p>
                <span>Price : Rs {price}</span>
            </div>
        </>
    )
}