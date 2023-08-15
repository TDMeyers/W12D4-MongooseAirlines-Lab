import React from "react"
export default function Show({ flight }) {
    let { airline,flightNo, departs, _id } =flight
  console.log(flight)
  
    return (
      <div>
        <h1>Show Flight Details</h1>
        <p> Airline:{airline}</p>
        <p>Flight No:{flightNo}</p>
        <p>Departure: {departs.toLocaleDateString()}</p>
  
        <form action={`/flights/${_id}?_method=DELETE`} method='post'>
          <button>Remove</button>
  
        </form><br />
        <form action={`/flights/${_id}/edit`}>
          <button>Edit</button>
        </form><br />
        <a href='/flights'>Back</a>
  
  
    
  
  
      </div>
    )
  }