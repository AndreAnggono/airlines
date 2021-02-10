import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Airplane from "./Airplane";
import Search from "./Search";
import FlightC from "./FlightC";
import Reservation from "./Reservation";
import Nav from "./Nav";
import Home from "./Home";
import Admin from "./Admin";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/admin" component={Admin} />
					<Route path="/admin/airplane" component={Airplane} />
					<Route path="/admin/flight" component={FlightC} />
					<Route path="/search" component={Search} />
				</Switch>
				{/* <Home /> */}
				{/* <Airplane />
			<Search />
			<FlightC />
			<Reservation /> */}
			</div>
		</Router>
	);
}

export default App;
