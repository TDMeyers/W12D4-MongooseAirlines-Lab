import React from 'react'

export default function Index(props) {
  return (
    <div>
      <h3>Flights</h3>
      {props.flights.map((flight) => (
  <div key={flight._id}>
    <p>{flight.airline}</p>
    <p>{flight.flightNo}</p>
    <p>{new Date(flight.departs).toLocaleString()}</p>
    <a href={`/flights/${flight._id}`}><button>Flight Details</button></a>
  </div>
))}
    </div>
  )
}

