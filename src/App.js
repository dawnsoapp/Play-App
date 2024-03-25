import './App.css';
import BattleTeam from './pages/BattleTeam';
import HomeTeam from './pages/HomeTeam';
import Home from './pages/Home';
import Tinkaton from './pages/poke-pages/Tinkaton';
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
        <Route element={<Tinkaton />} path="Tinkaton" />
      </Routes>
    </div>
  );
}

export default App;