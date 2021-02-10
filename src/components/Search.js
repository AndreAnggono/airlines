import React, { Component } from 'react';
import axios from 'axios';
import AirplaneForm from "./AirplaneForm";

const SERVER_URL = 'http://localhost:3000/flights.json';

// Child

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
    };
    this._handleChange1 = this._handleChange1.bind(this);
    this._handleChange2 = this._handleChange2.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange1(e) {
    this.setState( { origin: e.target.value } );
  }

  _handleChange2(e) {
    this.setState( { destination: e.target.value } );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.origin, this.state.destination );
    this.setState({origin: ''});
    this.setState({destination: ''});


  }
//admin choose origin and destination
  render() {
      return(
        <form onSubmit={ this._handleSubmit } class="flights">

       <p>Origin</p>
       <select value={this.state.value} onChange={this._handleChange1}>
         <option value=""></option>
         <option value="Adelaide"> Adelaide</option>
              <option value="Darwin">Darwin</option>
             <option value="Melbourne">Melbourne</option>
             <option value="Sydney">Sydney</option>
       </select>

       <p>Destination</p>
       <select value={this.state.value} onChange={this._handleChange2}>
         <option value=""></option>
         <option value="Hobart">Hobart</option>
         <option value="Perth"> Perth</option>
            <option value="Brisbane">Brisbane</option>
       </select>
       <br></br>
       <br></br>
       <input type="submit" value="Search Flights" />
     </form>

      );
    }
  }

  function ShowFlights(props) {
    return (
      <div>
      <h1> Flight Search Results</h1>
          { props.flights.map( s =>
             <p key= {s.id}>{s.date}, {s.number}, {s.origin} to {s.destination}, {s.name}</p>)}
      </div>
    );
  }

  // Parent

  class Search extends Component {
    constructor(props) {
      super(props);
      this.state = { flights: [] ,
        searchedflights: [],
        origin: '',
        destination: ''
      };
      this.searchFlights = this.searchFlights.bind(this);
      this._handleClick = this._handleClick.bind(this);

      // polling for live updating, connect to database
      const fetchFlights = () => {
     axios.get(SERVER_URL).then( results => this.setState( { flights: results.data }));

   }

   fetchFlights();

}

// show database
_handleClick(e) {
    const ghUrl = `http://localhost:3000/flights.json`
    window.location.href = `${ghUrl}`;
  }

//filter the flight which match with choosen origin and destination
  searchFlights(q1, q2) {
         axios.get(SERVER_URL).then(function (results){
           let array_flights = [];
           for (let i =0;i<results.data.length;i++)
             if (results.data[i].origin === q1 && results.data[i].destination === q2)
               array_flights.push(results.data[i]);
           this.setState({flights : array_flights});
         }.bind(this));

         return (
           <div>
           <h2> Flight Search Results</h2>
               { this.state.flights.map( s =>
                 <p key= {s.id}>{s.date}, {s.number}, {s.origin} to {s.destination}, {s.name}</p>)}
           </div>
         );
       }


render() {
   return (
     <div>
     <h1>Flights Search</h1>
       <SearchForm onSubmit={ this.searchFlights } />
       <ShowFlights flights={ this.state.flights } />
     </div>
   )
 }
}

export default Search;