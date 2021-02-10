import React from "react";

function AirplaneList(props) {
	return (
		<div>
			{props.planes.map((p) => (
				<div key={ p.id }>
					<h2>{p.name}</h2>
					<table>
						<tbody>
							<tr>
								<th>Rows</th>
								<td>{p.rows}</td>
							</tr>
							<tr>
								<th>Columns</th>
								<td>{p.cols}</td>
							</tr>
						</tbody>
					</table>
				</div>
			))}
		</div>
	);
}

export default AirplaneList;
