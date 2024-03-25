import tinkatink1 from './/story-images/tinkatink1.png';
import '../Teams.css';
import React from "react";

function Tinkaton() {
    return (
        <div className="App">
        <header className="App-header">
            <h1>Story of Tinkaton</h1>
            <h2>The Pokemon Team Leader!</h2>
            <img src={tinkatink1} className="Poke-logo" alt=""/>
        </header>
        </div>
    )
}

export default Tinkaton;