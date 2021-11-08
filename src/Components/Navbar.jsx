import { NavLink  } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<NavLink activeClassName='selected' to='/Rockets'>
				Rockets
			</NavLink>
			<NavLink activeClassName='selected' to='/Missions'>
				Missions
			</NavLink>
		</nav>
	);
};

export default Navbar;
