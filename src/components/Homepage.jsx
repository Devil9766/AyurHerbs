import React from "react";
import "./Homepage.css"
export default function Homepage(props){
    return(
        <main>
            <div id="container">
                <div className="main-container">
                    <div className="web-home-info">
                        <h1>Welcome to AyurHerbs.....</h1>
                        <p>your one way ticket to chemical free medicine.</p>
                    </div>
                    <div className="web-home-images">
                        <img className="herbI herb1" src="/images/herb1.jpg" alt="main page image 1"></img>
                        <img className="herbI herb2" src="/images/herb2.jpg" alt="main page image 2"></img>
                        <img className="herbI herb3" src="/images/herb3.jpg" alt="main page image 2"></img>
                    </div>
                </div>
                <div className="benefits">
                    <h2>Benefits:</h2>
                    <div className="benefitInfo">
                        <div className="bene1">
                            <h4> Natural Healing</h4>
                            <p>Ayurvedic herbs are often used for their natural healing properties. They can help balance the body's energies and promote overall wellness.</p>
                            <p>Example: Turmeric is known for its anti-inflammatory and antioxidant properties.</p>
                            <div id="beneI">
                                <img id="benI" src="/images/bene1.jpg" alt="benefit image 1"/>
                            </div>
                        </div>
                        <div className="bene1">
                            <h4> Holistic Approach</h4>
                            <p>Ayurvedic practices focus on treating the whole person rather than just symptoms. This holistic approach can lead to better long-term health outcomes.</p>
                            <p>Example: Ashwagandha is used to reduce stress and improve mental health, addressing both physical and emotional well-being.</p>
                            <div id="beneI">
                                <img id="benI" src="/images/bene2.jpg" alt="benefit image 2"/>
                            </div>
                        </div>
                        <div className="bene1">
                            <h4> Boosts Immune System</h4>
                            <p>Ayurvedic treatments use natural herbs and spices that have immune-boosting properties. These herbs and spices contain antioxidants and anti-inflammatory compounds that protect the body against infection and disease.</p>
                            <p>Example: Turmeric, and ginger have been found to have immune-enhancing effects</p>
                            <div id="beneI">
                                <img id="benI" src="/images/bene3.jpg" alt="benefit image 3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}