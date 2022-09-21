import React from "react";
import Cart from './Cart'
function Product()
{
    let name="Sports Shoes"
    let price="$90"
    let model="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_O4lDmKBmGiz4rXqM-CSWhRwtzJwUB9BBb4pR_ffXQ&s"
    return <div>
        <h4>Product Details:</h4>
        <Cart prop1={name} prop2={price}prop3={model} />

    </div>
}
export default Product