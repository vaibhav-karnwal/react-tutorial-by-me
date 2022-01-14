import React ,{ useState } from "react";
import Product from "./Product/Product";
import data from "./data/product.json"

export default function Home(){
    const [products,setProducts] = useState(data)
    return(
        <>
            {products.map(product=>{
                return <Product key={product.id} {...product}/>
            })}
        </>
    )
}
                