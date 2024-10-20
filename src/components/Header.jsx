import React, { useState } from "react";
import "./Header.css";
import {Link} from "react-router-dom"


export default function Header(props){
    const [cartCount, setCartCount] = useState(0);
    return(
        <header >
            <div id="nav-container"> 
            <div className="webI-nm">
                <img className="M-I" src="https://media.istockphoto.com/id/1359498242/vector/green-mortar-and-pestle-with-leaves-line-icon-herbal-traditional-medicine.jpg?s=612x612&w=0&k=20&c=ZhxUkHbD7D5M6OVLiqGUGeQUfmPwnqzk-AgV57VgAmk="/>
                <a className="W-N" href="/">AyurHerbs</a>
            </div>
            <div className="navL links">
                <Link to="/"> Home </Link>
                <Link to="/products">Products</Link>
                <Link  to="/cart">Cart<sub>{cartCount}</sub></Link>
            </div>
            </div>
        </header>
    )
}