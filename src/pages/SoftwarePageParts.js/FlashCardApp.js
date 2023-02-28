import React from "react";
import flashCard from "../photos/FlashCardApp.png"

function FlashCardApp(){
    return(<div className = "container">
        <h3 className="center-text">Flash Card App</h3>
        <a className="center" href = "https://github.com/CHowell424/Flash-Card-App">Github</a>
        <img className="center-image large-image" src={flashCard} alt="Flash Card app homepage"/>

        <p>
            This project was one of the more time consuming projects.
            It took a lot of patience for Caedmon because React was not his strong suit.
            He deffinatly has become more ephiocent with React because of this project.
        </p>
        <p>
            This website is not hooked up to an API yet so it isnt quite functional.
            When it is hooked up to an API it will allow the user to create, edit, and study decks of flash cards.
            Its primary pourpose is to be an easy to use study tool.
        </p>
    </div>)
}

export default FlashCardApp;