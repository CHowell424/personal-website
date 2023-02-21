import React from "react";
import "../StyleSheets/CraftsmanPage.css"
import Pytography from "./CraftsmanPageParts/Pytography"
import Sewing from "./CraftsmanPageParts/Sewing";

function CraftsmanPage(){
    return(<div>
        <h1 className="center-text">Caedmon the Craftsman</h1>
        <p>Caedmon loves to learn any skill if it involves creating.
            He has learned woodworking, jewling, <a href ="#sewing">sewing</a>, and cooking, but his prefured craft is <a href="#pytography">pytography</a> (wood burning).
            This love for creating is the primary reason he seeks to become a <a href="/software">software engineer,</a> where he can create things that help people around the world.
        </p>
        <p>Caedmon sells some of his crafts on Etsy shop called <a href ="https://www.etsy.com/shop/CaveManCraftsByCJ?ref=profile_header" target="_blank" rel="noopener noreferrer">CaveMan Crafts by CJ.</a></p>
        <p className="center-text">Below are some of his best work in his different crafts.</p>
        
        <article id ="pytography">
            <Pytography/>
        </article>

        <hr></hr>

        <article id ="sewing">
            <Sewing/>
        </article>
    </div>)
}

export default CraftsmanPage;