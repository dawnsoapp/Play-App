import tinkatink1 from './/story-images/tinkatink1.png';
import tinkatuff1 from './/story-images/tinkatuff1.webp';
import FairyType from './/story-images/FairyType.webp';
import SteelType from './/story-images/SteelType.webp';
import './Tinkaton.css';
import React from "react";

function Tinkaton() {
    return (
        <div className="tink-app">
            <header className="tink-header">
                <h1>Story of Tinkaton</h1>
                <h2>The Pokemon Team Leader!</h2>
                <img src={tinkatink1} className="tink-img" alt=""/>
            </header>
            <div className="container-one">
                <div className="personality-box">
                    <h2>Tinkaton Profile</h2>
                    <h3>Type</h3>
                    <div className="type-box">
                        <img src={FairyType} className="type-logo" alt=""/>
                        <img src={SteelType} className="type-logo" alt=""/>
                    </div>
                    <h3>Nature & Abilities</h3>
                    <div className="text-box">
                        <p>Sassy and "Somewhat Vain"</p>
                        <p>Own Tempo</p>
                    </div>
                </div>
                <div className="picture-box-one">
                    <img src={tinkatuff1} className="img-pic-box-one" alt=""/>
                    <footer>Fun Fact: Tinkatink's are not born with their
                        hammers. They actually forge them with scraps of metal
                        they find in the wild. They make great blacksmiths!
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Tinkaton;