import React from "react";
import School from "../photos/school.jpg"

function Schooling(){
    const thinkful = "https://www.thinkful.com//getstarted/all-topics-outcomes/?sf_campaign_id=7015b0000033JLoAAM&utm_campaign=&utm_medium=g&utm_content=&utm_term=GGL_Brand_Ex_GEO_Core&utm_source=google&keyword=thinkful&matchtype=e&adgroupid=125742843081&campaignid=13051883165&creativeid=520765092401&keywordid=303219710301&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJQShfevDhSZ1QNDapSYAcKCFJ-KlsCHXpBbKrmM2XToKUFpXZdYpJIaApFgEALw_wcB";
    return(<div>
        <h2 className="center-text">Schooling</h2>
        <img className="center-image small-image" src={School} alt="Doing school"/>
        <p>
            Caedmon went to Colorado Early Colleges Aurora for high school.
            This allowed him to achieve an Associate's Degree of General Science at Community College of Aurora.</p>
        <p>
        After high school Caedmon took a year break from school to work at Discount Tire.
        He took a leap into <a href ="/software">Software Engineering</a> when he had saved enough money to pay for the coding bootcamp <a target="_blank" rel="noopener noreferrer" href ={thinkful}>Thinkful. </a>
         At Thinkful he learned JavaScript, .NET, React, Knex, and SQL.
         These skills allowed him to create many websites during his time at Thinkful and ultimately allowed him to create this website using React.

        </p>

    </div>)
}

export default Schooling;