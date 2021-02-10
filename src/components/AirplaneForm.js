import React, { Component } from "react";

export class AirplaneForm extends Component {
	constructor() {
		super();

		this.state = {
			name: "",
			rows: 0,
			cols: 0,
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
		this.setState({ name: "", rows: 0, cols: 0 });
	}

	render() {
		return (
			<div>
				<form onSubmit={this._handleSubmit}>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" onChange={this._handleChange} value={this.state.name} placeholder="e.g. NH747" />
					<label htmlFor="rows">Rows</label>
					<input type="number" id="rows" onChange={this._handleChange} value={this.state.rows} />
					<label htmlFor="cols">Columns</label>
					<input type="number" id="cols" onChange={this._handleChange} value={this.state.cols} />
					<button>Add Plane</button>
				</form>
			</div>
		);
	}
}

export default AirplaneForm;
