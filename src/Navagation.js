import React from "react";
import {Link} from "react-router-dom"

function Navagation(){
    return(<div className="container header">
        <h1 className="col center"><a className="col center" href="/">Caedmon Howell</a></h1>
        <h4 className="col center">as a</h4>
        <ul className="col center">
                <li className="row nav"><Link to ="/software">Software Engineer</Link></li>
                <li className="row nav"><Link to ="/craftsman">Craftsman</Link></li>
        </ul>
    </div>)
}

export default Navagation;