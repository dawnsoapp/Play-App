import alcremie1 from '../images/alcremie1.png';
import blissey1 from '../images/blissey1.png';
import fuecoco1 from '../images/fuecoco1.png';
import houndoom1 from '../images/houndoom1.png';
import roserade1 from '../images/roserade1.png';
import rotom1 from '../images/rotom1.png';
import './Teams.css';

function HomeTeam() {
return (
    <div className="App">
    <header className="App-header">
        <h1>Trainer Dawn's Team</h1>
        <div className="Poke-container">
        <img src={fuecoco1} className="Poke-logo" alt=""/>
        <img src={houndoom1} className="Poke-logo" alt=""/>
        <img src={blissey1} className="Poke-logo" alt=""/>
        <img src={rotom1} className="Poke-logo" alt=""/>
        <img src={alcremie1} className="Poke-logo" alt=""/>
        <img src={roserade1} className="Poke-logo" alt=""/>
        </div>
        <p>
        The stories behind the bonds between trainer and pokemon!
        </p>
    </header>
    </div>
);
}

export default HomeTeam;