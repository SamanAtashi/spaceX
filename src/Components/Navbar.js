import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    textDecoration: 'underline',
    color: 'red',
  };

  return (
    <nav>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/Rockets"
      >
        Rockets
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/Missions"
      >
        Missions
      </NavLink>
    </nav>
  );
};

export default Navbar;
