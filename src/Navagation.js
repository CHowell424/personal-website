import React from "react";

function Navagation(){
    return(<div className="container">
        <a className="col center" href="/"><h1>Caedmon Howell</h1></a>
        <h4 className="col center">as a</h4>
        <ul className="col center">
                <li className="row nav"><a href ="/software">Software Engineer</a></li>
                <li className="row nav"><a href ="/craftsman">Craftsman</a></li>
        </ul>
    </div>)
}

export default Navagation;