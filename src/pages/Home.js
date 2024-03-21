import '../App.css';
import '../components/NavBar.css';
import './Home.css';
import TeamNavBar from '../components/TeamNavBar';
import React from "react";

const Home = () => {
return (
    <div className="App">
    <header className="App-header">
        <h1>Trainer Dawn's Pokemon Compendium</h1>
        <p>Inside the Lore of Trainer Dawn and her Pokemon</p>
        <div className="home-nav-box">
        <TeamNavBar />
        </div>
    </header>
    </div>
);
}

export default Home;