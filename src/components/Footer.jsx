import React from "react";
import "./Footer.css"

export default function Footer(){
    const year = new Date().getFullYear();

    return(
        <footer>
            <div className="footerContainer">
                <hr />
                <div className="web-N">
                    <h2>AyurMeds</h2>
                </div>
                <div className="endFooter">
                    <p>&copy; {year} AyurHerbs. All Rights Reserved </p>
                </div>

            </div>
        </footer>
    )
}