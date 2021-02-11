import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Airplane from "./Airplane";
import FlightC from "./FlightC";

function Admin() {
	return (
		<Router>
			<div>
				{Nav()}
				Admin page
				<Switch>
					<Route path="/admin/airplane" exact component={Airplane} />
					<Route path="/admin/flight" exact component={FlightC} />
				</Switch>
			</div>
		</Router>
	);
}

function Nav() {
	return (
		<nav>
			<ul className="navAdmin-links">
				<Link to="/admin/airplane">
					<li>Create Airplane</li>
				</Link>
				<Link to="/admin/flight">
					<li>Create Flight</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Admin;
