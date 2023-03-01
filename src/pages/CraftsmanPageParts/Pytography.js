import React from 'react';
import dragon from '../photos/Dragon.jpg';
import forestWolf from "../photos/ForestWolf.jpg";
import mando from "../photos/Mandolorian.jpg";
import jesus from "../photos/Jesus.jpg";
import koiDragon from "../photos/KoiDragon.jpg";
import moonLitKiss from "../photos/MoonlitKiss.jpg";
import reavenclawCrest from "../photos/RavenclawCrest.jpg";
import wolf from "../photos/Wolf.jpg";
import skeyeLine from "../photos/SkeyeLine.jpg";
import first from "../photos/First.jpg";


function Pytography(){
    return(<div><h2 className="center-text">Pyrography</h2>
    <div className="craft-group">

    <div className="craft-project">
        <img className="craft-image" src={dragon} alt="Dragon"/>
        <div className="col craft-text">
            <div>
                <h5 className="center-text">Dragon</h5>
                <p className="row">
                This is a re-do of the first wood burning Caedmon did.
                He had found this image and wanted to see if he could get that detailed using pyrography.
                He redid it roughly 2 years after his first one so that he could see how much he improved.
</p>
            </div>
        </div>
    </div>

    <div className="craft-project">
        <img className=" craft-image" src={forestWolf} alt="Forest Wolf"/>
        <div className="col craft-text">
            <div>
                <h5 className="center-text">Forest Wolf</h5>
                <p className="row">
                This is one of Caedmon's most recent wood burnings and one of his favorites.
                It depicts a beautiful wolf with a tree line and mountains reflected in his fur.
                Though it may seem very detailed it actually took less time than most of his wood burnings.
</p>
            </div>
        </div>
    </div>

    <div className="craft-project">
        <img className=" craft-image" src={mando} alt="The Mandolorian"/>
        <div className="col craft-text">
            <div>
                <h5 className="center-text">The Mandolorian</h5>
                <p className="row">
                Like the forest wolf, this is one of Caedmon's most recent wood burnings.
                    Being a huge Star Wars fan this was one of the more fun projects for him to do.
                    This fits in with some of his other work that include Star Wars characters, Darth Vader and Grogu.
</p>
            </div>
        </div>
    </div>

    </div>

    <div className="craft-group">

    <div className="craft-project">
        <img className="craft-image" src={jesus} alt="Jesus"/>
        <div className="col">
            <div>
                <h5 className="center-text">Jesus</h5>
                <p className="row">
                This depicts Jesus with the crown of thorns on his head and blood running down his face.
                    This wood burning took the second longest amount of time to complete with almost 20 hours of work.
</p>
            </div>
        </div>
    </div>

    <div className="craft-project">
        <img className="craft-image" src={koiDragon} alt="Koi and Dragon"/>
        <div className="col">
            <div>
                <h5 className="center-text">Koi and Dragon</h5>
                <p className="row">
                Caedmon did this wood burning for a local shop owner in the Aurora mall.
                    For Caedmon it holds the title of longest wood burning with more than 30 hours of work.
</p>
            </div>
        </div>
    </div>

    <div className="craft-project">
        <img className="craft-image" src={wolf} alt="Wolf"/>
        <div className="col">
            <div>
                <h5 className="center-text">Wolf</h5>
                <p className="row">
                This wolf Caedmon burned on request of one of his friends.
                    He viewed it as a challenge considering he had never burned up close animal fur on his art before this.

</p>
            </div>
        </div>
    </div>

    </div>

    <div className="craft-group">

<div className="craft-project">
    <img className="craft-image" src={moonLitKiss} alt="Moon Lit Kiss"/>
    <div className="col">
            <div>
                <h5 className="center-text">Moonlit Kiss</h5>
                <p className="row">
                This depiction of Caedmon and his girlfriend is the first wood burning he spliced two images together.
                    The two pictures he spliced were the picture of him and his girlfriend and the moon for the background.
</p>
            </div>
        </div>
</div>

<div className="craft-project">
    <img className="craft-image" src={reavenclawCrest} alt="Ravinclaw Crest"/>
    <div className="col">
            <div>
                <h5 className="center-text">Ravenclaw Crest</h5>
                <p className="row">
                Though Caedmon himself is a Hufflepuff, he burned the Ravenclaw Crest because his girlfriend is a Ravenclaw.
                    He has planned on making the other Harry Potter house crests at some point in the near future.
</p>
            </div>
        </div>
</div>

<div className="craft-project">
    <img className="craft-image" src={skeyeLine} alt="Skeyeline"/>
    <div className="col">
            <div>
                <h5 className="center-text">Skeyeline</h5>
                <p className="row">

                Caedmon often researches on the internet for inspiration for his wood burnings, and this is one of his favorites he has come across.
                    This city skyline inside an eye has gotten a lot of compliments from the people he has shown it to, but it has yet to be sold.
</p>
            </div>
        </div>
</div>

</div>
    <div id="first">
        <h3 className="center-text">Where it started</h3>
    </div>

    <div>
        <img className="center-image large-image" src={first} alt="First wood buring"/>
    </div>

    <div  className="row">
        <p>This was the first wood burning Caedmon ever did and where he fell in love with the art form.
            It is one of the few he has not sold or given away because it has the most sentimental meaning.
            He started it in April of 2020 as a quarantine project and learned quickly how to make it better.
</p>
    </div>
    
    </div>)
}

export default Pytography;