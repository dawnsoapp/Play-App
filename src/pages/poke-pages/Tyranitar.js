import larvitar1 from './/story-images/larvitar1.png';
import pupitar1 from './/story-images/pupitar1.png';
import DarkType from './/story-images/DarkType.png';
import RockType from './/story-images/RockType.png';
import './Tinkaton.css';
import React from "react";

function Tyranitar() {
    return (
        <div className="tink-app">
            <header className="tink-header">
                <h1>Story of Tyranitar</h1>
                <h2>The Team Tank!</h2>
                <img src={larvitar1} className="tyran-img" alt=""/>
            </header>
            <div className="container-one">
                <div className="personality-box">
                    <h2>Tinkaton Profile</h2>
                    <h3>Type</h3>
                    <div className="type-box">
                        <img src={DarkType} className="type-logo" alt=""/>
                        <img src={RockType} className="type-logo" alt=""/>
                    </div>
                    <h3>Nature & Abilities</h3>
                    <div className="text-box">
                        <p>Jolly and it's proud of it's power!</p>
                        <p>Sandstream</p>
                    </div>
                </div>
                <div className="picture-box-one">
                    <img src={pupitar1} className="img-pic-box-one" alt=""/>
                    <footer>Fun Fact: If it rampages, a Tyranitar can knock 
                        down mountains and bury rivers, making cartographers 
                        have to redraw maps afterwards. Don't get on their 
                        bad side!
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Tyranitar;