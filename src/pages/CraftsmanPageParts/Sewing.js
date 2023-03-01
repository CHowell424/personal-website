import React from "react";
import backpack from "../photos/Backpack.jpg";

function Sewing (){
    return(<div>
            <h2 className="center-text">Sewing</h2>

            <img className="center-image large-image" src={backpack} alt="BackPack"/>

        <div className="row">
            <div>
                <h3 className="center-text">Alice in Wonderland BackPack</h3>
                <p>Caedmon created this backpack for his girlfriend's birthday.
                    He created it from scratch, from designing the pattern, to actually sewing it.
                    This backpack is one of the projects he is more proud of.
</p>
            </div>
        </div>

    </div>)
}

export default Sewing;