import React, { Component } from "react";

const FlightListC = (props) => {
	console.log(props.flights);
	return (
		<div class="list"><h2>Current Flights:</h2>
			{props.flights.map((f) => (
				<div key={f.id}>
					<h3>{f.number}</h3>
					<table>
						<tbody>
							<tr>
								<th>Date: </th>
								<td>{f.date}</td>
							</tr>
							<tr>
								<th>From: </th>
								<td>{f.origin}</td>
							</tr>
							<tr>
								<th>To: </th>
								<td>{f.destination}</td>
							</tr>
							<tr>
								<th>Plane: </th>
								<td>{f.number}</td>
							</tr>
						</tbody>
					</table>
				</div>
			))}
		</div>
	);
};

export default FlightListC;
