import React from "react"
export default function Show({ flight }) {
    let { airline,flightNo, departs, _id,destinations} =flight
  console.log(flight)
  
    return (
      <div>
        <h1>Show Flight Details</h1>
        <p> Airline:{airline}</p>
        <p>Flight No:{flightNo}</p>
        <p>Departure: {departs.toLocaleDateString()}</p>
         <h1>Destination:</h1>
         <form action={`/flight/${_id}?_method=PUT`} method='POST'>
<label htmlFor="airport">Departure Airport:</label><br />
            <select id="airport" name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
            </select><br /><br />

<label htmlFor='arrival'>Arrival:</label>
<input type='date' id='arrival' name='arrival'></input><br /><br /><br />
   
    <button>Update</button>
   

    </form>
    
  
  
      </div>
    )
  }