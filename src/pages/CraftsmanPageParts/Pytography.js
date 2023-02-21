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
    return(<div><h2 className="center-text">Pytography</h2>
    <div className="row">
        <img className="col" src={dragon} alt="Dragon"/>
        <img className="col" src={forestWolf} alt="Forest Wolf"/>
        <img className="col" src={mando} alt="The Mandolorian"/>
    </div>


    <div className="row text">
        <div className="col">
            <div>
                <h5 className="center-text row">Dragon</h5>
                <p className="row">
                This is a re-do of the <a href="#first">first</a> wood burning Caedmon did.
                He has found this image and wanted to see if he could get that detailed using pytography.
                He re did it rouphly 2 years after his first one so that he could see how much he imporved.
                </p>
            </div>
        </div>

        <div className="col">
            <div>
                <h5 className="center-text row">Forest Wolf</h5>
                <p className="row">
                This is one of Caedmons most recent wood burnings and one of his favoriates.
                It depicts a beautify woold with a tree line and mountians reflcted in his fur.
                Though it may seem vary detailed it acctualy took less time than most of his wood burings.
                </p>
            </div>
        </div>

        <div className="col">
            <div>
                <h5 className="center-text row">The Mandolorian</h5>
                <p className="row">
                    Like the forest wolf, this is one of Caedmons most recent wood burings.
                    Being a huge Star Wars fan this was one of the more fun projects for him to do.
                    This fits in with some of his other work that include star wars charitors, Darth Vader and Grogu.
                </p>
            </div>
        </div>
    </div>


    <div className="row">
        <img className="col" src={jesus} alt="Jesus"/>
        <img className="col" src={koiDragon} alt="Koi and Dragon"/>
        <img className="col" src={wolf} alt="Wolf"/>
    </div>


    <div className="row text">
        <div className="col">
            <div>
                <h5 className="center-text row">Jesus</h5>
                <p className="row">
                    This depicts Jesus with the crown of thorns on his head and blood running down his face.
                    This wood buring took the second longest amount of time to complete with almost 20 hours of work.
                </p>
            </div>
        </div>

        <div className="col">
            <div>
                <h5 className="center-text row">Koi and Dragon</h5>
                <p className="row">
                    Caedmon did this wood burning for a local shop owner in the Aurora mall.
                    For Caedmon it hold the title of longes wood buring with more than 30 hours of work. 
                </p>
            </div>
        </div>

        <div className="col">
            <div>
                <h5 className="center-text row">Wolf</h5>
                <p className="row">
                    This wolf Caedmon burned on request of one of his friends.
                    He viewed it as a challenge concidering he had never burning up close animal fur on his art before this.
                </p>
            </div>
        </div>
    </div>


    <div className="row">
        <img className="col" src={moonLitKiss} alt="Moon Lit Kiss"/>
        <img className="col" src={reavenclawCrest} alt="Ravinclaw Crest"/>
        <img className="col" src={skeyeLine} alt="Skeyeline"/>
    </div>


    <div className="row text">
        <div className="col">
            <div>
                <h5 className="center-text row">Moon Lit Kiss</h5>
                <p className="row">
                    This depiction of Caedmon and his girlfriend is the first wood burning he spliced two images together.
                    The two pictures he spliced were the picuture of him and his girlfriend and the moon for the background.
                </p>
            </div>
        </div>

        <div className="col">
            <div>
                <h5 className="center-text row">Ravinclaw Crest</h5>
                <p className="row">
                    Though Caedmon himself is a Hufflepuff, he burned the Ravenclaw Crest beacuse his girlfriend is a Ravenclaw.
                    He has planned on making the ohter Harry Potter house crests at some point in the neer future. 
                </p>
            </div>
        </div>

        <div className="col">
            <div>
                <h5 className="center-text row">Skeyeline</h5>
                <p className="row">
                    Caedmon offten researches on the internet for insparation for his wood burnings, this is one of this favorites he has come across.
                    This city skyline inside an eye has gotten a lot of complements from the people he has shown it to, but it has yet to be sold.
                </p>
            </div>
        </div>
    </div>


    <div className="row">
        <h3 className="center-text">Where it started</h3>
    </div>

    <div className="row center">
        <img className="col" src={first} alt="First wood buring"/>
    </div>

    <div id="first" className="row">
        <p>This was the first wood burning Caedmon ever did and where he fell in love with the art form.
            It is one of the few he has not sold or given away because it has the most sentimental meening.
            He started it in April of 2020 as a quarintine project and learned quickly how to make it better.
        </p>
    </div>
    
    </div>)
}

export default Pytography;