import React from "react";
import "./StyleSheets/NavBar.css"

function Navagation(){
    return(<div className="navbar">
        <a className="col" href="/"><h1>Caedmon Howell</h1></a>
        <h4 className="col">as a</h4>
        <ul className="col">
                <li className="row"><a href ="/software">Software Engineer</a></li>
                <li className="row"><a href ="/craftsman">Craftman</a></li>
        </ul>
    </div>)
}

export default Navagation;