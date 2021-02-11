import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SERVER_URL = "http://localhost:3000/flights.json";

// Child

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			origin: "",
			destination: "",
		};
		this._handleName = this._handleName.bind(this);
		this._handleChange1 = this._handleChange1.bind(this);
		this._handleChange2 = this._handleChange2.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);

	}

	_handleName(event) {
		this.setState({ name: event.target.value });
	}

	_handleChange1(e) {
		this.setState({ origin: e.target.value });
	}

	_handleChange2(e) {
		this.setState({ destination: e.target.value });
	}

	_handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.origin, this.state.destination);
		this.setState({ origin: "" });
		this.setState({ destination: "" });
	}
	//admin choose origin and destination
	render() {
		return (
			<form onSubmit={this._handleSubmit} className="flights">
				<p>Name</p>
				<input type="text" required onInput={this._handleName} />

				<p>Origin</p>
				<select value={this.state.value} onChange={this._handleChange1}>
					<option value=""></option>
					<option value="Adelaide"> Adelaide</option>
					<option value="Darwin">Darwin</option>
					<option value="Melbourne">Melbourne</option>
					<option value="Sydney">Sydney</option>
				</select>

				<p>Destination</p>
				<select value={this.state.value} onChange={this._handleChange2}>
					<option value=""></option>
					<option value="Hobart">Hobart</option>
					<option value="Perth"> Perth</option>
					<option value="Brisbane">Brisbane</option>
				</select>
				<br></br>
				<br></br>
				<input type="submit" value="Search Flights" />
			</form>
		);
	}
}

function ShowFlights(props) {
	console.log("this is props", props);
	return (
		<div>
			<h1> Flight Search Results</h1>
			{props.flights.map((f) => (
				<p key={f.id}>
					{f.date}, {f.number}, {f.origin}, {f.destination}, {f.airplane_id}
          <Link to="/Reservation">Book Flight</Link>
				</p>
			))}
		</div>
	);
}

// Parent

class Search extends Component {
	constructor() {
		super();
		this.state = { flights: [], searchedflights: [], origin: "", destination: "" };

		this.searchFlights = this.searchFlights.bind(this);
		this._handleClick = this._handleClick.bind(this);

		// polling for live updating, connect to database
		const fetchFlights = () => {
			axios.get(SERVER_URL).then((results) => this.setState({ flights: results.data }));
		};
		fetchFlights();
	}

	// show database
	_handleClick(e) {
		const ghUrl = `http://localhost:3000/flights.json`;
		window.location.href = `${ghUrl}`;
	}

	//filter the flight which match with choosen origin and destination
	searchFlights(q1, q2) {
		axios.get(SERVER_URL).then(
			function (results) {
				let array_flights = [];
				for (let i = 0; i < results.data.length; i++)
					if (results.data[i].origin === q1 && results.data[i].destination === q2) array_flights.push(results.data[i]);
				this.setState({ flights: array_flights });
			}.bind(this)
		);

		return (
			<div>
				{this.state.flights.map((f) => (
					<p key={f.id}>
          {f.date}, {f.number}, {f.origin}, {f.destination}, {f.airplane_id}
          <Link to="/Reservation">Book Flight</Link>{" "}
        </p>
      ))}
    </div>
		);
	}

	render() {
		return (
			<div>
				<h1>Flights Search</h1>

				<SearchForm onSubmit={this.searchFlights} />
				<ShowFlights flights={this.state.flights} />
			</div>
		);
	}
}

export default Search;
