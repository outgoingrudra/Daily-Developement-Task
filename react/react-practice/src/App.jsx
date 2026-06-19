import React from "react";
import Card from "./components/Card";
import Details from "./components/Details";

export default function App() {
  return (
    <div>
      {/* <h1>Components</h1> */}
      <h1>User Details</h1>
        {/* <Card /> */}
        <Details name="Rudra Verma" age={23} city="Kolkata" />
        <Details name="Virat Kohli" age={34} city="Delhi" />
        <Details name="A" age={34} city="Delhi" />
        <Details name="B" age={34} city="Delhi" />
        <Details name="C" age={34} city="Delhi" />
     
  
    </div>
  );
}

