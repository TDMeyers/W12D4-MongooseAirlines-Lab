import React from 'react';

export default function DefaultLayout(props) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        {/* <a href="/flights">Flights</a> */}
     
        {props.children}
      </body>
    </html>
  );
}
