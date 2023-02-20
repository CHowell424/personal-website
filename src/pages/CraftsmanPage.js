import React from "react";
import "../StyleSheets/CraftsmanPage.css"

import dragon from './photos/Dragon.jpg'
import forestWolf from "./photos/ForestWolf.jpg"
import mando from "./photos/Mandolorian.jpg"

function CraftsmanPage(){
    return(<div>
        <h1 className="center-text">Caedmon the Craftsman</h1>
        <p>Caedmon loves to learn any skill if it involves creating.
            He has learned woodworking, jewling, sewing, and cooking, but his prefured craft is pytography (wood burning).
            This love for creating is the primary reason he seeks to become a <a href="/software">software engineer,</a> where he can create things that help people around the world.
        </p>
        <p className="center-text">Below are some of his best work in his different crafts.</p>
        
        <h2 className="center-text">Pytography</h2>
        <div className="row">
            <img className="col" src={dragon} alt="Dragon"/>
            <img className="col" src={forestWolf} alt="Forest Wolf"/>
            <img className="col" src={mando} alt="The Mandolorian"/>
        </div>
        <div className="row">
            <div className="col">
                <div>
                    <h5 className="center-text row">Dragon</h5>
                    <p className="row">
                    This is a re-do of the first wood burning Caedmon did.
                    He has found this image and wanted to see if he could get that detailed using pytography.
                    He re did it rouphly 2 years after his first one so that he could see how much he imporved.
                    </p>
                </div>
            </div>

            <div className="col">
                <div>
                    <h5 className="center-text row">Forest Wolf</h5>
                    <p className="row">
                    This is one of Caedmons most recent wood burnings and one of his favoriates.
                    It depicts a beautify woold with a tree line and mountians reflcted in his fur.
                    Though it may seem vary detailed it acctualy took less time than most of his wood burings.
                    </p>
                </div>
            </div>

            <div className="col">
                <div>
                    <h5 className="center-text row">The Mandolorian</h5>
                    <p className="row">
                        Like the forest wolf, this is one of Caedmons most recent wood burings.
                        Being a huge Star Wars fan this was one of the more fun projects for him to do.
                        This fits in with some of his other work that include star wars charitors, Darth Vader and Grogu.
                    </p>
                </div>
            </div>

        </div>
    </div>)
}

export default CraftsmanPage;