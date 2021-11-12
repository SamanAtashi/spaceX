import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Rockets from './Components/Rockets/Rockets';
import Missions from './Components/Missions/Missions';

const routes = [
  {
    name: 'Rockets',
    path: '/',
    component: <Rockets />,
  },
  {
    name: 'Missions',
    path: '/missions',
    component: <Missions />,
  },
];
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Navbar title="Space Travelers' Hub" routes={routes} />
        <Routes>
          { routes.map(
            ({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ),
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
