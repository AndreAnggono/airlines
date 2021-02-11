import React, { Component } from "react";
import axios from "axios";
import FlightFormC from "./FlightFormC";
import FlightListC from "./FlightListC";

const SERVER_URL = "http://localhost:3000/flights.json";
//later change to: const SERVER_URL = "http://we-are-the-best.heroku.com/"
//for deployment

class FlightC extends Component {
  constructor() {
    super();
    this.state = {
      flights: []
    }

    this.saveFlight = this.saveFlight.bind(this);

  const fetchFlights = () => {
    axios.get(SERVER_URL).then((response) => {
      this.setState({flights: response.data});
      setTimeout(fetchFlights, 4000)
    });
  };

  fetchFlights();
}

saveFlight(obj) {
  axios.post(SERVER_URL, obj).then((response) => {
    this.setState({ flights: [...this.state.flights, response.data] });
  });
}

  render() {
    return (
      <div>
      <FlightFormC onSubmit={ this.saveFlight }/>
      <FlightListC flights={ this.state.flights } />
      </div>
    );
  }
}

export default FlightC
