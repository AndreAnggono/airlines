import React, { Component } from "react";
import axios from "axios";

const SERVER_URL = "http://localhost:3000/reservations.json";

export class Reservation extends Component {
	constructor() {
		super();

		this.state = {};
		this.insertMockData();
	}

	insertMockData() {
		const row = 20;
		const col = 4;
		const arr = [];

		// for (let i = 0; i < row; i++) {
		// 	for (let j = 0; j < row[i]; j++) {}
		// }

		axios
			.post(SERVER_URL, [
				{ fnumber: "JQ888", passenger: "", row: 1, col: 1 },
				{ fnumber: "JQ888", passenger: "", row: 1, col: 2 },
			])
			.then((response) => {
				console.log(response);
			});
	}

	render() {
		return <div></div>;
	}
}

export default Reservation;
