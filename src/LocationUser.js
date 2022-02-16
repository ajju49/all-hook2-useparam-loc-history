// LocationUser.jsx for #60.useLocationHook.
import React from "react";
import { useLocation, useParams } from "react-router-dom";

const LocationUser = () => {
  const { fname, lname } = useParams();
  const locationnnn = useLocation();
  // console.log(locationnnn);

  return (
    <>
      <h2>
        User {fname}, {lname} page
      </h2>
      <p>My current Location is {locationnnn.pathname}</p>
      {locationnnn.pathname === `/locationuser/shubham/pandkar` ? (
        <button onClick={() => alert(`you are awesome`)}> click me</button>
      ) : null}

      {locationnnn.pathname === `/locationuser/mokshali/b` ? (
      <button onClick={() => alert(` i m mokshali`)}>clk mokshali</button>) : null}
    </>
  );
};

export default LocationUser;