import React from "react";
import FlashCardApp from "./SoftwarePageParts.js/FlashCardApp";
import ReservationApp from "./SoftwarePageParts.js/ReservationApp";

function SoftwarePage(){
    const thinkful = "https://www.thinkful.com//getstarted/all-topics-outcomes/?sf_campaign_id=7015b0000033JLoAAM&utm_campaign=&utm_medium=g&utm_content=&utm_term=GGL_Brand_Ex_GEO_Core&utm_source=google&keyword=thinkful&matchtype=e&adgroupid=125742843081&campaignid=13051883165&creativeid=520765092401&keywordid=303219710301&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJQShfevDhSZ1QNDapSYAcKCFJ-KlsCHXpBbKrmM2XToKUFpXZdYpJIaApFgEALw_wcB";

    return(<div>
        <h1 className="center-text">Caedmon the Software Engineer</h1>
        <p>
            Caedmon has wantest to be a Software Engineer since he started high school. 
            He has taken many steps tward getting into the indestry.
            He got an Assosiates Degree of General Science while still in high school. 
            Along with the Assosiates he also earned a certificate from <a href = {thinkful}>Thinkful</a> coding bootcamp.
        </p>
        <p className="center-text">
            In his years of learning coding he has worked with mulpiple languages, librarys, and frameworks.
            This includes...
        </p>
        <ul>
            <li className="center-text">Python</li>
            <li className="center-text">C++</li>
            <li className="center-text">C#</li>
            <li className="center-text">React</li>
            <li className="center-text">Knex</li>
            <li className="center-text">.Net</li>
            <li className="center-text">SQL</li>
        </ul>

        <hr></hr>
        <h2 className="center-text">Projects</h2>
        <hr></hr>
        
        <ReservationApp/>
        <FlashCardApp/>
        
    </div>)
}

export default SoftwarePage;