import './App.css';
// import './components/NavBar.css';
// import TeamNavBar from './components/TeamNavBar';
import BattleTeam from './pages/BattleTeam';
import HomeTeam from './pages/HomeTeam';
import Home from './pages/Home';
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Home />} path="Home" />
        <Route element={<BattleTeam />} path="BattleTeam" />
        <Route element={<HomeTeam />} path="HomeTeam" />
      </Routes>
    </div>
  );
}

export default App;