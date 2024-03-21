import '../App.css';
import '../components/NavBar.css';
import TeamNavBar from '../components/TeamNavBar';
import './Home.css';
import React from "react";

const Home = () => {
return (
    <div className="App">
    <header>
        <h1>Trainer Dawn's Pokemon Compendium</h1>
        <p>Inside the Lore of Trainer Dawn and her Pokemon</p>
    </header>
    <div className="nav-container">
        <TeamNavBar />
    </div>
    </div>
);
}

export default Home;