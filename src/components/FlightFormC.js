import React, { Component } from "react";

class FlightFormC extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      date: '',
      origin: '',
      destination: '',
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({ [event.target.id]: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log('it works kind of');
  }


  render() {
    return (
    <div>
      <form onSubmit={ this._handleSubmit }>
      <label>Flight Number: </label>
      <input type="text" id="number" onChange={ this._handleChange } value={ this.state.number }/>
      <label>Date: </label>
      <input type="text" id="date" onChange={ this._handleChange } value={ this.state.date }/>
      <label>From: </label>
      <input type="text" id="origin" onChange={ this._handleChange } value={ this.state.origin }/>
      <label>To: </label>
      <input type="text" id="destination" onChange={ this._handleChange } value={ this.state.destination }/>
      <button>Create Flight</button>
      </form>
    </div>
    );
  }
}


export default FlightFormC
