import React, { Component } from "react";
import axios from "axios";
import FlightFormC from "./FlightFormC";
import FlightListC from "./FlightListC";

class FlightC extends Component {
  constructor() {
    super();
    this.state = {
      flights: [
        { id: 1, number: 'Q654', date: '12/12/22', origin: 'Sydney', destination: 'Melbourne'},
        { id: 2, number: 'Q734', date: '12/07/22', origin: 'Sydney', destination: 'Brisbane'},
        { id: 3, number: 'Q275', date: '09/12/22', origin: 'Sydney', destination: 'Perth'},
      ]
    }
  }

  render() {
    return (
      <div>
      Flight Create Coming Soon
      <FlightFormC />
      <FlightListC flights={ this.state.flights } />
      </div>
    );
  }
}

export default FlightC
