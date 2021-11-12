import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Missions from './Components/Missions/Missions';
import MyProfile from './Components/MyProfile/MyProfile';
import Navbar from './Components/Navbar';
import Rockets from './Components/Rockets/Rockets';

function App() {
  return (
    <div className="App px-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} exact />
        <Route path="Missions" element={<Missions />} />
        <Route path="MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
