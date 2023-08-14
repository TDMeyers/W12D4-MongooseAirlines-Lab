import React from 'react'

function New() {
    return (
        <div>
            <h1>New</h1>
            <form action='/flights' method='POST'>

                <label htmlFor='airline'>Airline:</label><br />
                <input type='text' id='airline' name='airline'></input><br /><br /><br />

                <label htmlFor='flightNo'>flightNo:</label><br />
                <input type='number' id='flightNo' name='flightNo'></input><br /><br />

                <label htmlFor='departs'>Departure:</label>
                <input type='date' id='departs' name='departs'></input><br /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default New;