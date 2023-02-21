import React from "react";
import backpack from "../photos/Backpack.jpg";

function Sewing (){
    return(<div>
        <div className="row center">
            <h2>Sewing</h2>
        </div>

        <div className ="row center">
            <img className="col" src={backpack} alt="BackPack"/>
        </div>

        <div className="row">
            <div>
                <h3 className="center-text">Alice in Wonderland BackPack</h3>
                <p>Ceadmon created this backpack for his grilfriends birthday.
                    He created it from scratch, from designing the patern, to acctualy sewing it.
                    This backpack is one of the projects he his more proud of.
                </p>
            </div>
        </div>

    </div>)
}

export default Sewing;