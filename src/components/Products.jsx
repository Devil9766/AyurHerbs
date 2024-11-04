import React from "react";
import "./Products.css"
import ayurvedicHerbs from "./herbs";

export default function Products(props){
    
    return(
        <div className="productsContainer">
            <h1>Products: </h1>
            <div className="productGrid">
                {ayurvedicHerbs.map(herb=>(
                <div key={herb.id}  className="productFlex">
                        <div className="infoCont">
                            <h1>{herb.name}</h1>
                            <hr/>
                            <img id="herbImage" src={herb.imageUrl} alt="herb image"/>
                            <p>Rarity: {herb.rarity}</p>
                            <p>Species: {herb.species}</p>
                            <p>Information: {herb.information}</p>
                            <p>Price: &#8377; {herb.pricePer100gm}</p>
                            <div className="buttons"> 
                                <button onClick={()=>{props.addToCart(herb)}} className="buyButton">Buy</button>
                            </div>
                        </div>
                    </div>
))}
            </div>
        </div>
    )

}