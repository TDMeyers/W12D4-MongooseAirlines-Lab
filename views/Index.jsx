import React from 'react'
import DefaultLayout from './layout/DefaultLayout'

export default function Index(props) {
  return (
    <DefaultLayout>
    <div>
      <h3>Flights</h3>
      {props.flights.map((flight) => (
  <div key={flight._id}>
    <p>{flight.airline}</p>
    <p>{flight.flightNo}</p>
    <p>{flight.airport}</p>
    <p>{new Date(flight.departs).toLocaleString()}</p>
    
<a href={`/flights/${flight._id}`}><button>Flight Details</button></a>

 
  </div>
))}
    </div>
    </DefaultLayout>
  )
}

