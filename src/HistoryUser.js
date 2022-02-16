// HistoryUser.jsx for #61.useHistoryHook.jsx
import React from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";

const HistoryUser = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  // console.log(location);
  const history = useHistory();
  console.log(history);

  return (
    <>
      <h2>
        User {fname}, {lname} page
      </h2>
      <p>My current Location is {location.pathname}</p>
      {location.pathname === `/historyuser/ajnk/shinde` ? (
        <button onClick={() => history.goBack()}> go back</button>
      ) : null}
      {/* or */}
      {location.pathname === `/historyuser/ajnk/shinde` ? (
        <button onClick={() => history.push("/")}> Home Page</button>
      ) : null}

    
    </>
  );
};
export default HistoryUser;