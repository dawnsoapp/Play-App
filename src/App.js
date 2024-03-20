import './App.css';
import BattleTeam from './pages/BattleTeam';
import HomeTeam from './pages/HomeTeam';
import Home from './pages/Home';
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Home />} path="Home" />
        <Route element={<BattleTeam />} path="BattleTeam" />
        <Route element={<HomeTeam />} path="HomeTeam" />
        <Route/>
        </Routes>
    </div>
  );
}

export default App;