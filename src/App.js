import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Missions from './Components/Missions/Missions';
import Navbar from './Components/Navbar';
import Rockets from './Components/Rockets/Rockets';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="Missions" element={<Missions />} />
        <Route path="Rockets" element={<Rockets />} />
      </Routes>
    </div>
  );
}
export default App;
