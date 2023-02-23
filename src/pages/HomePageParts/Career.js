import React from "react";

function Coreer(){
    const thinkful = "https://www.thinkful.com//getstarted/all-topics-outcomes/?sf_campaign_id=7015b0000033JLoAAM&utm_campaign=&utm_medium=g&utm_content=&utm_term=GGL_Brand_Ex_GEO_Core&utm_source=google&keyword=thinkful&matchtype=e&adgroupid=125742843081&campaignid=13051883165&creativeid=520765092401&keywordid=303219710301&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJQShfevDhSZ1QNDapSYAcKCFJ-KlsCHXpBbKrmM2XToKUFpXZdYpJIaApFgEALw_wcB";

    return(<div>
        <h2 className="center-text">Career</h2>

        <p>
            Caedmon is acctivly looking for a position in <a href ="/software">Software Engineering</a> or Web Development.
        He is excited about the indestry because it is a way for him to create and make a difference.
        This has been a 3 year endever for Caedmon, starting from when he was in high school taking collage clases for software.</p>

        <p>
            His previos position was a Service Technision at Discount Tire where he learned about teamwork and communication.
        He left this position when he saved enough to start his coding bootcamp at <a target="_blank" rel="noopener noreferrer" href ={thinkful}>Thinkful.</a>
        </p>
    </div>)
}

export default Coreer;