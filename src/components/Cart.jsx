import React from "react";
import "./Cart.css"


export default function Cart(props){
    return(
        <div className="cart-container">
            <h1>Cart:  </h1>
            {props.scart.length === 0 ? (
                <h1 className="emptyCart">Your cart is empty</h1>
            ) :(
                <div className="cartItem-container">
                 {props.scart.map(herb=>(
                    <div key={herb.id} className="cartItem">
                        <div className="cartImg">
                            <img className="cartI" src={herb.imageUrl} alt="item in cart" />
                        </div>
                        <div className="cartItemInfo">
                            <h2>{herb.name}</h2>
                            <p></p>
                            <button onClick={()=>props.removeItem(herb)}> delete</button>

                        </div>
                    </div>
                 ))}
                </div>
                
            )}
        </div>
    )
}