import LoveBall1 from '../images/LoveBall1.png';
import MasterBall1 from '../images/MasterBall1.png';
import UltraBall1 from '../images/UltraBall1.png';
import { NavLink } from 'react-router-dom';
import React from 'react';
import './NavBar.css';

const TeamNavBar = () => {
    return (
        <nav className="Nav-Container">
            <NavLink to="/BattleTeam">
                <img src={UltraBall1} className="Nav-Images" alt=""/>
            </NavLink>
            <NavLink to="/HomeTeam">
                <img src={LoveBall1} className="Nav-Images" alt=""/>
            </NavLink>
            <NavLink to="/MysticEncounters">
                <img src={MasterBall1} className="Nav-Images" alt=""/>
            </NavLink>
        </nav>
    )
}

export default TeamNavBar;