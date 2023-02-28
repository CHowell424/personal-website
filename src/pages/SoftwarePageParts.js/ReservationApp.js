import React from "react";
import reservationApp from "../photos/ReservationApp.png"

function ReservationApp(){
    return(<div className = "container">
        <h3 className="center-text">Restaurant Reservation App</h3>
        <div className="row center">
            <a className="col nav" target="_blank" rel="noopener noreferrer" href="https://github.com/CHowell424/starter-restaurant-reservation">Github</a>
            <a className="col nav" target="_blank" rel="noopener noreferrer" href="https://restaurant-reservation-front-1wid.onrender.com/">Website</a>
        </div>
        <div className="border">
            <img className="large-image center-image" src={reservationApp} alt="Reservation App home Screen"/>
        </div>
        <p>
            With creating the Database, API, and frontend, this is the largest project Caedmon has ever created.
            The website allows a restaurant to create and edit table reservations and tables.
            It allows them to seat a reservation, finish a table, and cancel a reservation.
            The search function allows them to find any reservation including ones from the past.
        </p>
    </div>)
}

export default ReservationApp;