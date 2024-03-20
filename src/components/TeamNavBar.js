import LoveBall1 from '../images/LoveBall1.png';
import MasterBall1 from '../images/MasterBall1.png';
import UltraBall1 from '../images/UltraBall1.png';
import { NavLink } from 'react-router-dom';
import React from 'react';
import './NavBar.css';

const TeamNavBar = () => {
    return (
        <>
        <nav className="nav-bar">
            <NavLink to="/BattleTeam">
                <img src={UltraBall1} className="nav-image" alt=""/>
                Battle Team
            </NavLink>
            <NavLink to="/HomeTeam">
                <img src={LoveBall1} className="nav-image" alt=""/>
                Home Team
            </NavLink>
            <NavLink to="/MysticEncounters">
                <img src={MasterBall1} className="nav-image" alt=""/>
                Mystic Encounters
            </NavLink>
        </nav>
        </>
    )
}

export default TeamNavBar;