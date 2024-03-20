import dragapult1 from '../images/dragapult1.png';
import hitmonchan1 from '../images/hitmonchan1.png';
import smilotic1 from '../images/smilotic1.png';
import tinkaton1 from '../images/tinkaton1.png';
import tyranitar1 from '../images/tyranitar1.png';
import vikavolt1 from '../images/vikavolt1.png';
import './Teams.css';
import React from "react";

function BattleTeam() {
return (
    <div className="App">
    <header className="App-header">
        <h1>Trainer Dawn's Team</h1>
        <div className="Poke-container">
        <img src={tinkaton1} className="Poke-logo" alt=""/>
        <img src={tyranitar1} className="Poke-logo" alt=""/>
        <img src={hitmonchan1} className="Poke-logo" alt=""/>
        <img src={vikavolt1} className="Poke-logo" alt=""/>
        <img src={smilotic1} className="Poke-logo" alt=""/>
        <img src={dragapult1} className="Poke-logo" alt=""/>
        </div>
        <p>
        The stories behind the bonds between trainer and pokemon!
        </p>
    </header>
    </div>
);
}

export default BattleTeam;