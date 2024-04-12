import dragapult1 from '../images/dragapult1.png';
import hitmonchan1 from '../images/hitmonchan1.png';
import smilotic1 from '../images/smilotic1.png';
import tinkaton1 from '../images/tinkaton1.png';
import tyranitar1 from '../images/tyranitar1.png';
import vikavolt1 from '../images/vikavolt1.png';
import { NavLink } from 'react-router-dom';
import './Teams.css';
import React from "react";

function BattleTeam() {
return (
    <div className="App">
    <header className="App-header">
        <h1>Trainer Dawn's Team</h1>
        <nav className="Poke-container">
            <NavLink to="/Tinkaton">
                <img src={tinkaton1} className="Poke-logo" alt=""/>
            </NavLink>
            <NavLink to="/Tyranitar">
                <img src={tyranitar1} className="Poke-logo" alt=""/>
            </NavLink>
            <NavLink>
                <img src={hitmonchan1} className="Poke-logo" alt=""/>
            </NavLink>
            <NavLink>
                <img src={vikavolt1} className="Poke-logo" alt=""/>
            </NavLink>
            <NavLink>
                <img src={smilotic1} className="Poke-logo" alt=""/>
            </NavLink>
            <NavLink>
                <img src={dragapult1} className="Poke-logo" alt=""/>
            </NavLink>
        </nav>
        <p>
        The stories behind the bonds between trainer and pokemon!
        </p>
    </header>
    </div>
);
}

export default BattleTeam;