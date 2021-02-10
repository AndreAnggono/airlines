import React, { Component } from "react";

export class AirplaneForm extends Component {
	constructor() {
		super();

		this.state = {
			name: "",
			row: 0,
			column: 0,
		};
		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}

	_handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.state);
		this.setState({ name: "", row: 0, column: 0 });
	}

	render() {
		return (
			<div>
				<form onSubmit={this._handleSubmit}>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" onChange={this._handleChange} value={this.state.name} placeholder="e.g. NH747" />
					<label htmlFor="row">Rows</label>
					<input type="number" id="row" onChange={this._handleChange} value={this.state.row} />
					<label htmlFor="column">Columns</label>
					<input type="number" id="column" onChange={this._handleChange} value={this.state.column} />
					<button>Add Plane</button>
				</form>
			</div>
		);
	}
}

export default AirplaneForm;
