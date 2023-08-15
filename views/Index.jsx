import React from 'react'

export default function Index(props) {
  return (
    <div>
      <h3>Flights</h3>
      {props.flights.map((flight)=>{
    <div>
         <p>{flight.airline}</p>
         <p>{flight.flightNo}</p>
         <p>{flight.departs}</p>
         <a href={`/flights/${flight._id}`}><button>Flight Details</button></a>
    </div>
       console.log(flight)
      })}
    </div>
  )
}
