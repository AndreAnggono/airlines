import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<Link to="/">
				<h3>Burning Airline</h3>
			</Link>
			<ul className="nav-links">
				<Link to="/Search">
					<li>Search</li>
				</Link>
				<Link to="/Admin">
					<li>Admin</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
