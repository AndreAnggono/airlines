import React, { Component } from "react";

const FlightListC = (props) => {

console.log(props.flights);
    return (
      <div>
        {props.flights.map((f) => (
          <div key={ f.id }>
            <h2>{f.number}</h2>
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
              </tbody>
            </table>
          </div>
        ))}
      </div>
      );
  };

export default FlightListC
