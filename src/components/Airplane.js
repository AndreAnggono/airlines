import React, { Component } from "react";
import axios from "axios";
import AirplaneForm from "./AirplaneForm";
import AirplaneList from "./AirplaneList";

const SERVER_URL = "";

export class Airplane extends Component {
	constructor() {
		super();

		this.state = {
			planes: [
				{ id: 4, name: "NH747", rows: 24, cols: 4 },
				{ id: 5, name: "QA747", rows: 20, cols: 5 },
			],
		};

		this.savePlane = this.savePlane.bind(this);

		// const fetchPlanes = () => {
		// 	axios.get(SERVER_URL).then((response) => {
		// 		this.setState({ planes: response.data });
		// 		setTimeout(fetchPlanes, 4000);
		// 	});
		// };
		// fetchPlanes();
	}

	savePlane(obj) {
		console.log(obj);
		this.setState({ planes: [...this.state.planes, obj] });
		console.log(this.state.planes);
		// axios.post(SERVER_URL, obj);
	}

	render() {
		return (
			<div>
				Airplane coming soon
				<AirplaneForm onSubmit={this.savePlane} />
				<AirplaneList planes={this.state.planes} />
			</div>
		);
	}
}

export default Airplane;
