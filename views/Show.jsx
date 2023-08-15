import React from "react"
export default function Show({ flight }) {
    let { airline,flightNo, departs, _id,destination} =flight
  console.log(flight)
  console.log(destination)
    return (
      <div>
        <h1>Show Flight Details</h1>
        <p> Airline:{airline}</p>
        <p>Flight No:{flightNo}</p>
        <p>Departure: {departs.toLocaleDateString()}</p>
     {/* Destination Information */}
     <div>
        <h2>Destinations:</h2>
        {destination ? (
          destination.map((destination) => (
            <div key={destination._id}>
              <p>
                Airport: {destination.airport}, Arrival:{" "}
                {new Date(destination.arrival).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p>No destinations available.</p>
        )}
      </div>
         <form action={`/flights/${_id}?_method=PUT`} method='POST'>
<label htmlFor="airport">Departure Airport:</label><br />
            <select id="airport" name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
            </select><br /><br />

<label htmlFor='arrival'>Arrival:</label>
<input type='datetime-local' id='arrival' name='arrival'></input><br /><br /><br />
   
    <button>Update</button>
   

    </form>
    
  
  
      </div>
    )
  }