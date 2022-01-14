import React,{useState} from "react";

export default function Cart(props){
    const [cartProduct, setCartProduct] = useState(props)
    
    const removeProduct=(id)=>{
        let newCartProduct = cartProduct.filter((product)=>product.id!==id)
        setCartProduct(newCartProduct);
    }

    return(
        <>
            {cartProduct.map(product=>{
                const {id,img,title,price} = product
                return (
                    <div className="d-flex flex-row">
                        <img src={img} alt="product"/>
                        <div className="d-flex flex-column">
                            <h6>{title}</h6>
                            <span>Price : Rs {price}</span>
                            <button onClick={()=>removeProduct(id)}>Remove</button>
                        </div>
                    </div>
                )
            })}
            <button onClick={()=>setCartProduct([])}>Clear Cart</button>
        </>
    )
}