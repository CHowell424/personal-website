import React from "react";
import burning from "../photos/burning.jpg"

function Hobbies(){
    return(<div>
        <h2 className="center-text">Hobbies</h2>
        <img className="small-image center-image" src={burning}  alt="Caedmon burning art"/>
        <p>
        Caedmon loves to learn, both general knowledge and skills.
            Because of this he has many hobbies and skills including, pyrography (wood burning), sewing, cooking, jewelling, and video games.
            He also enjoys working on software projects in his free time to help him learn more about his craft.
</p>
        <p>
        Besides trying to get a job, Caedmon’s current project is his first phone app.
            The app is a Bible study tool that an individual or a group could utilize to have a discussion every day instead of once a week.
            It achieves this by asking a pre-written or custom question every day and linking your answer to your groups in a discussion.
            Caedmon is very excited about this project and hopes to get it working well in a timely manner.
</p>
    </div>)
}

export default Hobbies;