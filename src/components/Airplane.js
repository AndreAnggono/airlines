import React, { Component } from "react";
import axios from "axios";
import AirplaneForm from "./AirplaneForm";
import AirplaneList from "./AirplaneList";

const SERVER_URL = "http://localhost:3000/airplanes.json"; // Change this to Heroku address later

export class Airplane extends Component {
	constructor() {
		super();

		this.state = {
			planes: [],
		};

		this.savePlane = this.savePlane.bind(this);

		const fetchPlanes = () => {
			axios.get(SERVER_URL).then((response) => {
				this.setState({ planes: response.data });
				setTimeout(fetchPlanes, 4000);
			});
		};
		fetchPlanes();
	}

	savePlane(obj) {
		axios.post(SERVER_URL, obj).then((response) => {
			this.setState({ planes: [...this.state.planes, response.data] });
		});
	}

	render() {
		return (
			<div>
				Airplane Console
				<AirplaneForm onSubmit={this.savePlane} />
				<AirplaneList planes={this.state.planes} />
			</div>
		);
	}
}

export default Airplane;
