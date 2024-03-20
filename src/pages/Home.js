import '../App.css';
import React from "react";
import '../components/TeamNavBar.css';
import TeamNavBar from '../components/TeamNavBar';

function Home() {
return (
    <div className="App">
    <header className="App-header">
        <h1>Trainer Dawn's Pokemon Compendium</h1>
    </header>
    <div>
        <TeamNavBar />
    </div>
    </div>
);
}

export default Home;