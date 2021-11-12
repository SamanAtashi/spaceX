import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from './planet.png';

const NavBar = () => (
  <nav className="flex justify-between items-center border-b-2 w-full h-20">
    <div className="h-12 flex justify-between items-center space-x-4">
      <img src={logo} alt="logo" className="w-12" />
      <h2 className="text-3xl">Space Travelers Hub</h2>
    </div>
    <div className="flex items-center space-x-4 text-blue-500">
      <NavLink
        className={({ isActive }) => (isActive ? 'underline' : null)}
        to="/"
      >
        Rockets
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'underline' : null)}
        to="/Missions"
      >
        Missions
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'underline' : null)}
        to="/MyProfile"
      >
        My Profile
      </NavLink>
    </div>
  </nav>
);

export default NavBar;
