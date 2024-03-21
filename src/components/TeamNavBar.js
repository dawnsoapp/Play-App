import LoveBall1 from '../images/LoveBall1.png';
import MasterBall1 from '../images/MasterBall1.png';
import UltraBall1 from '../images/UltraBall1.png';
import { NavLink } from 'react-router-dom';
import React from 'react';
import './NavBar.css';

const TeamNavBar = () => {
    return (
        <>
        <nav className="nav-container">
            <NavLink to="/BattleTeam">
                <img src={UltraBall1} className="nav-image" alt=""/>
                <p className="nav-text">Battle Team</p>
            </NavLink>
            <NavLink to="/HomeTeam">
                <img src={LoveBall1} className="nav-image" alt=""/>
                <p className="nav-text">Home Team</p>
            </NavLink>
            <NavLink to="/MysticEncounters">
                <img src={MasterBall1} className="nav-image" alt=""/>
                <p className="nav-text">Mystic Encounters</p>
            </NavLink>
        </nav>
        </>
    )
}

export default TeamNavBar;