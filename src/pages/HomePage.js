import React from "react";
import About from "./HomePageParts/About";
import Schooling from "./HomePageParts/Schooling";
import Career from "./HomePageParts/Career";
import Hobbies from "./HomePageParts/Hobbies";
import Caedmon from "./photos/Caedmon-Howell.jpg"

function HomePage(){
    return(<div className="container">
        <img className="center-image rounded small-image" src ={Caedmon} alt ="Caedmon Howell"/>
        <h1 className="center-text">Caedmon Howell</h1>
        <div className="row space-around">
            <a className="col" href ="#about">About</a>
            <a className="col" href ="#schooling">Schooling</a>
            <a className="col" href ="#career">Career</a>
            <a className="col" href ="#hobbies">Hobbies</a>
            <a className="col" href ="#contact">Contact</a>
        </div>

        <article id="about">
            <About/>
        </article>

        <hr></hr>

        <article id="schooling">
            <Schooling/>
        </article>

        <hr></hr>

        <article id="career">
            <Career/>
        </article>

        <hr></hr>

        <article id="hobbies">
            <Hobbies/>
        </article>

        <hr></hr>

    </div>)
}

export default HomePage;