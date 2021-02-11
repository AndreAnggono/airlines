import React from "react";

function AirplaneList(props) {
	return (
		<div class="list"><h2>Current Airplanes:</h2>
			{props.planes.map((p) => (
				<div key={p.id}>
					<h3>{p.name}</h3>
					<table>
						<tbody>
							<tr>
								<th>Rows</th>
								<td>{p.row}</td>
							</tr>
							<tr>
								<th>Columns</th>
								<td>{p.column}</td>
							</tr>
						</tbody>
					</table>
					{printLayout(p)}
				</div>
			))}
		</div>
	);
}

function printLayout(obj) {
	const { row, column } = obj;
	let letter = 65; // ASCII for A

	function printLayout(obj) {
		const { row, column } = obj;
		let letter = 65; // ASCII for A

		return (
			<div>
				<table>
					<tbody>
						{[...Array(Number(column))].map((e, i) => (
							<tr>
								<th>{String.fromCharCode(letter++)}</th>
								{[...Array(Number(row))].map((e, i) => (
									<td class="planeLayout"></td>
								))}
							</tr>
						))}
						<tr>
							<th></th>
							{[...Array(Number(row))].map((e, i) => (
								<td>{i + 1}</td>
							))}
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default AirplaneList;
