import React from "react";

function Contact(){
    return(<div className="container">
        <h2 className="center-text">Contact</h2>
        <p className="center-text">You can contact Caedmon in any of the below ways.</p>
        <div className="center spaced-evenly">
            <a className="contact" href ="https://www.linkedin.com/in/caedmon-howell/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="contact" href="https://www.etsy.com/shop/CaveManCraftsByCJ" target="_blank" rel="noopener noreferrer">Etsy</a>
            <a className="contact" href = "mailto: caedmonhowell@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a className="contact" href="https://github.com/CHowell424" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        
    </div>)
}

export default Contact;