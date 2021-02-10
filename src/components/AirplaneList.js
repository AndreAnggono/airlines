import React from "react";

function AirplaneList(props) {
	return (
		<div>
			{props.planes.map((p) => (
				<div>
					<h2>{p.name}</h2>
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
				</div>
			))}
		</div>
	);
}

export default AirplaneList;
